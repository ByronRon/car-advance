import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns } from "../datatables/cars.datatables";
import styles from "../styles/Datatable.module.css";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteCar, getCars } from "../services/car.service";
import { useConfirm } from "material-ui-confirm";
import NotificationManager from "react-notifications/lib/NotificationManager";

const Car = () => {
  const confirm = useConfirm();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const resp = await getCars(accessToken);
        if (resp) {
          setCars(resp.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [getAccessTokenSilently]);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      confirm({
        title: "",
        description: "Esta seguro que desea eliminar el registro seleccionado?",
      }).then(async () => {
        const accessToken = await getAccessTokenSilently();
        await deleteCar(id, accessToken);
        setCars((cars) => cars.filter((car) => car.id !== id));

        NotificationManager.success("OK!", "", 2000);
        navigate("/");
      });
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Existio un error al eliminar la informacion",
        "",
        2000
      );
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link
              to={{ pathname: "/cars/" + params.row.id }}
              state={{ car: params.row, action: "INFO" }}
              style={{ textDecoration: "none" }}
            >
              <VisibilityIcon className={styles.icon} />
            </Link>
            <Link
              to={{
                pathname: "/cars/" + params.row.id + "/maintenances",
              }}
              state={{ car: params.row }}
            >
              <CarRepairIcon className={styles.icon} />
            </Link>
            <div
              className={styles.deleteButton}
              onClick={(e) => handleDelete(e, params.row.id)}
            >
              <DeleteForeverIcon className={styles.deleteIcon} />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Cars
        <Link
          to="/cars/new"
          state={{ car: {}, action: "NEW" }}
          className={styles.link}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className={styles.datagrid}
        rows={cars}
        columns={carColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Car;

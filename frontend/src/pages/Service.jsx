import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../styles/Datatable.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { servicesColumns } from "../datatables/services.datatables";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NotificationManager } from "react-notifications";
import { useConfirm } from "material-ui-confirm";
import { useAuth0 } from "@auth0/auth0-react";
import { getServices } from "../services/service.service";

const Service = () => {
  const confirm = useConfirm();
  const [services, setServices] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      confirm({
        title: "",
        description: "Esta seguro que desea eliminar el registro seleccionado?",
      })
        .then(async () => {
          await axios.delete("services/" + id);
          NotificationManager.success("OK!", "", 2000);
          setServices((services) =>
            services.filter((service) => service.id !== id)
          );
        })
        .catch(() => {});
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getServices(accessToken);
      if (data) setServices(data.data);
      else if (error)
        NotificationManager.error(
          "Existio un error al obtener la informacion",
          "",
          2000
        );
    };
    fetchData();
  }, [getAccessTokenSilently]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link
              to={{ pathname: "/services/" + params.row.id }}
              state={{ service: params.row, action: "INFO" }}
              style={{ textDecoration: "none" }}
            >
              <EditIcon className={styles.icon} />
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
        Services
        <Link
          to="/services/new"
          state={{ service: {}, action: "NEW" }}
          className={styles.link}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className={styles.datagrid}
        rows={services}
        columns={servicesColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Service;

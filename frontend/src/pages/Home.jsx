import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns } from "../datatables/cars.datatables";
import styles from "../styles/Datatable.module.css";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getAccessTokenSilently } = useAuth0();
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete("cars/" + id);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const res = await axios.get("cars", {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCars(res.data.data);
        console.log("carga data");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location.key, getAccessTokenSilently]);

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

export default Home;

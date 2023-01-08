import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
// import { services } from "../data";
import styles from "../styles/Datatable.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { maintenancesColumns } from "../datatables/maintenances.datatables";

const MaintenanceList = () => {
  const item = useLocation();
  console.log(item);
  const {
    state: { car },
  } = item;
  const base = "cars/" + car.id;

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete("maintenances/" + id);
    } catch (err) {
      console.log(err);
    }
  };

  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(base + "/maintenances");
        setMaintenance(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link
              to={{ pathname: base + "/maintenance/" + params.row.id }}
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
        {car.brand} {car.model} Maintenances
        <Link
          to={base + "/maintenance/new"}
          state={{ maintenance: {}, action: "NEW" }}
          className={styles.link}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className={styles.datagrid}
        rows={maintenance}
        columns={maintenancesColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default MaintenanceList;

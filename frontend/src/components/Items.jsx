import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns } from "../datatables/cars.datatables";
import { cars } from "../data";
import styles from "../styles/Datatable.module.css";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Items = () => {
  const handleDelete = async (id) => {
    try {
      // await deleteDoc(doc(db, "users", id));
      // setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
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
            <Link to="/cars/:id" style={{ textDecoration: "none" }}>
              <VisibilityIcon className={styles.icon} />
            </Link>
            <Link
              to="/cars/maintenances/:id"
              style={{ textDecoration: "none" }}
            >
              <CarRepairIcon className={styles.icon} />
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
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
        <Link to="/cars/new" className={styles.link}>
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

export default Items;

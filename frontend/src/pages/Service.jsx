import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { services } from "../data";
import styles from "../styles/Datatable.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { servicesColumns } from "../datatables/services.datatables";

const Service = () => {
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
            <Link to="/service/:id" style={{ textDecoration: "none" }}>
              <EditIcon className={styles.icon} />
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
        Services
        <Link to="/service/new" className={styles.link}>
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

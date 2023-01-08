import { Divider, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Datatable.module.css";
import stylesM from "../styles/Maintenance.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

const MaintenanceCard = () => {
  const location = useLocation();
  console.log(location.state);
  const { car } = location.state;

  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/cars/" + car.id + "/maintenances");
        console.log(res.data);
        setMaintenances(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location.key, car.id]);

  const handleSelect = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        {car.brand} {car.model} Maintenances
        <Link
          to={{ pathname: "/cars/" + car.id + "/maintenances/new" }}
          state={{ maintenance: { carId: car.id }, action: "NEW" }}
          className={styles.link}
        >
          Add New
        </Link>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {maintenances.map((maintenance) => (
          <Grid item xs={4} sm={4} md={4} key={maintenance.id}>
            <Paper
              elevation={3}
              className={stylesM.container}
              onClick={(e) => handleSelect(maintenance)}
            >
              <div className={stylesM.header}>
                {maintenance.date.substring(0, 10)}
              </div>
              <Link
                to={{
                  pathname:
                    "/cars/" + car.id + "/maintenances/" + maintenance.id,
                }}
                state={{ maintenance: maintenance, action: "INFO" }}
                style={{ textDecoration: "none" }}
              >
                <VisibilityIcon className={styles.icon} />
              </Link>
              <Divider />
              <div className={stylesM.headerContainer}>
                <p className={stylesM.title}> {maintenance.title}</p>
                <div className={stylesM.field}>
                  <div className={stylesM.label}>Precio total:</div>
                  <div>$ {maintenance.totalPrice}</div>
                </div>
                <div className={stylesM.field}>
                  <div className={stylesM.label}>Kilometraje:</div>
                  <div> {maintenance.mileage} Km.</div>
                </div>
                <div className={stylesM.field}>
                  <div className={stylesM.label}>Notas:</div>
                  <div>{maintenance.notes}</div>
                </div>
              </div>
              <div className={stylesM.serviceTitle}> Servicios:</div>

              <ul>
                {maintenance.maintenanceServices.map((mservice) => (
                  <li className={stylesM.services} key={mservice.id}>
                    <div>
                      {mservice.service.title}. ${mservice.price}
                    </div>
                    <div>{mservice.notes}</div>
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MaintenanceCard;

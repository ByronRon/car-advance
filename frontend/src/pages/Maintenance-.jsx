import {
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "../styles/Datatable.module.css";
import stylesM from "../styles/Maintenance.module.css";
import { maintenances } from "../data";

const Maintenance = () => {
  const item = useLocation();
  const { car } = item.state;
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        {car.brand} {car.model} Maintenances
        <Link
          to={{ pathname: "/cars/" + car.id + "/maintenances/new" }}
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
          <Grid item xs={2} sm={4} md={4} key={maintenance.id}>
            <Paper elevation={3} className={stylesM.container}>
              <div className={stylesM.header}>{maintenance.date}</div>
              <Divider />
              <div className={stylesM.headerContainer}>
                <p className={stylesM.title}> {maintenance.title}</p>
                <div className={stylesM.field}>
                  <div className={stylesM.label}>Precio total:</div>
                  <div>$ {maintenance.total_price}</div>
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
                {maintenance.services.map((service) => (
                  <li className={stylesM.services} key={service.id}>
                    <div>
                      {service.title}. ${service.price}
                    </div>
                    <div>{service.notes}</div>
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

export default Maintenance;

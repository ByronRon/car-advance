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
import { Link } from "react-router-dom";
import styles from "../styles/Datatable.module.css";
import stylesM from "../styles/Maintenance.module.css";
import { maintenances } from "../data";

const Maintenance = ({ car }) => {
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Maintenance for
        <Link to="/cars/maintenace/new" className={styles.link}>
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
              {/* <div className={stylesM.serviceTitle}> Servicios:</div> */}
              <Divider />
              <Table
                sx={{ minWidth: 100 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Service </TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Notas</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {maintenance.services.map((service, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {service.title}
                      </TableCell>
                      <TableCell align="right">{service.price}</TableCell>
                      <TableCell align="right">{service.notes}</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Maintenance;

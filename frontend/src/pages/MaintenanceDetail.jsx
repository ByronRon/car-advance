import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import styles from "../styles/CarDetail.module.css";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { NotificationManager } from "react-notifications";

const maintenanceValidationSchema = yup.object({
  title: yup
    .string("Ingrese la descripcion")
    .required("Campo requerido")
    .max(255),
  date: yup.date().required("Campo requerido"),
  totalPrice: yup.number().min(0).max(99999999),
  mileage: yup
    .number("Ingrese el kilometraje")
    .required("Campo requerido")
    .max(999999),
  notes: yup.string().max(255),
});

const serviceValidationSchema = yup.object({
  serviceNotes: yup.string().max(255),
  servicePrice: yup.number().min(0).max(99999999),
});

const MaintenanceDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { maintenance, action },
  } = location;

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState();
  const [selectedServices, setSelectedServices] = useState(
    maintenance.maintenanceServices || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/services");
        setServices(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      if (action === "NEW") {
        values.services = selectedServices;
        await axios.post("maintenances/", values);
      } else {
        values.services = selectedServices;
        await axios.patch("maintenances/" + maintenance.id, values);
      }
      NotificationManager.success("OK!", "", 2000);
      navigate("/cars/" + maintenance.carId + "/maintenances", {
        state: {
          car: { id: maintenance.carId },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteService = (e, service) => {
    e.preventDefault();
    try {
      setSelectedServices((prevArray) =>
        prevArray.filter((item) => item.id !== service.id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const maintenanceFormik = useFormik({
    initialValues: {
      title: maintenance.title || "",
      date: maintenance.date ? maintenance.date.substr(0, 10) : "",
      totalPrice: maintenance.totalPrice || 0,
      mileage: maintenance.mileage || 0,
      notes: maintenance.notes || "",
      carId: maintenance.carId,
    },
    validationSchema: maintenanceValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const serviceFormik = useFormik({
    initialValues: {
      serviceNotes: "",
      servicePrice: 0,
    },
    validationSchema: serviceValidationSchema,
    onSubmit: (values) => {
      if (selectedService && selectedService.id) {
        const item = selectedServices.find(
          (service) => service.service.id === selectedService.id
        );
        if (!item) {
          setSelectedServices((prevArray) => [
            ...prevArray,
            {
              serviceId: selectedService.id,
              notes: values.serviceNotes,
              price: values.servicePrice,
              service: {
                title: selectedService.title,
              },
            },
          ]);
        } else {
          NotificationManager.warning(
            "El servicio seleccionado ya existe.",
            "",
            2000
          );
        }
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {action === "NEW" ? "New Maintenance" : "General Information"}
      </div>
      <div className={styles.wrapper}>
        <form onSubmit={maintenanceFormik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Descripcion"
                value={maintenanceFormik.values.title}
                onChange={maintenanceFormik.handleChange}
                error={
                  maintenanceFormik.touched.title &&
                  Boolean(maintenanceFormik.errors.title)
                }
                helperText={
                  maintenanceFormik.touched.title &&
                  maintenanceFormik.errors.title
                }
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="date"
                name="date"
                label="Date"
                type="date"
                value={maintenanceFormik.values.date}
                onChange={maintenanceFormik.handleChange}
                error={
                  maintenanceFormik.touched.date &&
                  Boolean(maintenanceFormik.errors.date)
                }
                helperText={
                  maintenanceFormik.touched.date &&
                  maintenanceFormik.errors.date
                }
                size="small"
                variant="standard"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="totalPrice"
                name="totalPrice"
                label="Total Price"
                type="number"
                value={maintenanceFormik.values.totalPrice}
                onChange={maintenanceFormik.handleChange}
                error={
                  maintenanceFormik.touched.totalPrice &&
                  Boolean(maintenanceFormik.errors.totalPrice)
                }
                helperText={
                  maintenanceFormik.touched.totalPrice &&
                  maintenanceFormik.errors.totalPrice
                }
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="mileage"
                name="mileage"
                label="Mileage"
                type="number"
                value={maintenanceFormik.values.mileage}
                onChange={maintenanceFormik.handleChange}
                error={
                  maintenanceFormik.touched.mileage &&
                  Boolean(maintenanceFormik.errors.mileage)
                }
                helperText={
                  maintenanceFormik.touched.mileage &&
                  maintenanceFormik.errors.mileage
                }
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                fullWidth
                id="notes"
                name="notes"
                label="Notes"
                value={maintenanceFormik.values.notes}
                onChange={maintenanceFormik.handleChange}
                error={
                  maintenanceFormik.touched.notes &&
                  Boolean(maintenanceFormik.errors.notes)
                }
                helperText={
                  maintenanceFormik.touched.notes &&
                  maintenanceFormik.errors.notes
                }
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
      <Divider />
      <div className={styles.title}>Services</div>
      <div className={styles.wrapper}>
        <form onSubmit={serviceFormik.handleSubmit}>
          <Autocomplete
            size="small"
            onChange={(event, newValue) => {
              setSelectedService(newValue);
            }}
            id="service"
            options={services}
            getOptionLabel={(service) => service.title}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Servicios" />
            )}
          />
          <TextField
            id="serviceNotes"
            name="serviceNotes"
            label="Nota"
            value={serviceFormik.values.serviceNotes}
            onChange={serviceFormik.handleChange}
            error={
              serviceFormik.touched.serviceNotes &&
              Boolean(serviceFormik.errors.serviceNotes)
            }
            helperText={
              serviceFormik.touched.serviceNotes &&
              serviceFormik.errors.serviceNotes
            }
            size="small"
            variant="standard"
          />
          <TextField
            id="servicePrice"
            name="servicePrice"
            label="Precio"
            type="number"
            value={serviceFormik.values.servicePrice}
            onChange={serviceFormik.handleChange}
            error={
              serviceFormik.touched.servicePrice &&
              Boolean(serviceFormik.errors.servicePrice)
            }
            helperText={
              serviceFormik.touched.servicePrice &&
              serviceFormik.errors.servicePrice
            }
            size="small"
            variant="standard"
          />
          {/* <Button
            className={styles.button}
            color="primary"
            variant="contained"
            type="submit"
          >
            <AddIcon className={styles.icon} />
          </Button> */}
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            type="submit"
          >
            <AddIcon />
          </IconButton>
        </form>
      </div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {selectedServices &&
          selectedServices.map((service) => (
            <ListItem
              key={service.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={(e) => handleDeleteService(e, service)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={service.service.title}
                secondary={`$${service.price || "-"} ${service.notes || ""}`}
              />
            </ListItem>
            // <div key={service.id}>
            //   <span>
            //     {service.service.title} {service.notes} {service.price}
            //   </span>
            // </div>
          ))}
      </List>
      {/* <div>{selectedService ? selectedService.id : ""}</div> */}
    </div>
  );
};

export default MaintenanceDetail;

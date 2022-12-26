import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import styles from "../styles/CarDetail.module.css";
import axios from "axios";
import Notification from "../components/Notification";
import CarDetail from "./CarDetail";

const validationSchema = yup.object({
  title: yup
    .string("Ingrese nombre del servicio")
    .required("Campo requerido")
    .max(100),
  decription: yup.string("Ingrese detalle del servicio").max(45),
});

const ServiceDetail = () => {
  const navigate = useNavigate();
  const item = useLocation();
  const {
    state: { service, action },
  } = item;

  const handleSubmit = async (values) => {
    try {
      if (action === "NEW") {
        const res = await axios.post("services/", values);

        res && <Notification />;

        navigate("/services");
      } else {
        const res = await axios.patch("services/" + service.id, values);
        console.log(res);

        res && <Notification />;
        navigate("/services");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: service.title || "",
      description: service.description || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleSubmit(values);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {action === "NEW" ? "New Service" : `${service.title}`} - Information
      </div>
      <div className={styles.wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={{ xs: 2 }} columns={{ xs: 12 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
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
    </div>
  );
};

export default ServiceDetail;

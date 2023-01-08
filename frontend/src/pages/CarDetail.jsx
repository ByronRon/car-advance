import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";
import styles from "../styles/CarDetail.module.css";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const validationSchema = yup.object({
  brand: yup.string("Ingrese la marca").required("Campo requerido").max(45),
  model: yup.string("Ingrese el modelo").required("Campo requerido").max(45),
  year: yup
    .number("Ingrese el anio")
    .required("Campo requerido")
    .min(1900)
    .max(9999),
  plate: yup.string("Ingrese la placa").required("Campo requerido").max(10),
});

const CarDetail = () => {
  const navigate = useNavigate();
  const item = useLocation();
  const {
    state: { car, action },
  } = item;

  const handleSubmit = async (values) => {
    try {
      if (action === "NEW") {
        const res = await axios.post("cars/", values);
        console.log("NEW", res);
      } else {
        const res = await axios.patch("cars/" + car.id, values);
        console.log(res);
      }
      NotificationManager.success("OK!", "", 2000);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      brand: car.brand || "",
      model: car.model || "",
      year: car.year || 0,
      plate: car.plate || "",
      cc: car.cc || 0,
      color: car.color || "",
      image: car.image || "",
      purchaseDate: car.purchaseDate ? car.purchaseDate.substr(0, 10) : "",
      purchasePrice: car.purchasePrice || "",
      saleDate: car.saleDate ? car.saleDate.substr(0, 10) : "",
      salePrice: car.salePrice || "",
      userId: "1",
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
        {action === "NEW" ? "New Car" : `${car.brand} ${car.model}`} -
        Information
      </div>
      <div className={styles.wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                fullWidth
                id="brand"
                name="brand"
                label="Brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                helperText={formik.touched.brand && formik.errors.brand}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                fullWidth
                id="model"
                name="model"
                label="model"
                value={formik.values.model}
                onChange={formik.handleChange}
                error={formik.touched.model && Boolean(formik.errors.model)}
                helperText={formik.touched.model && formik.errors.model}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="year"
                name="year"
                label="Year"
                type="number"
                value={formik.values.year}
                onChange={formik.handleChange}
                error={formik.touched.year && Boolean(formik.errors.year)}
                helperText={formik.touched.year && formik.errors.year}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="plate"
                name="plate"
                label="Plate"
                value={formik.values.plate}
                onChange={formik.handleChange}
                error={formik.touched.plate && Boolean(formik.errors.plate)}
                helperText={formik.touched.plate && formik.errors.plate}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="color"
                name="color"
                label="Color"
                value={formik.values.color}
                onChange={formik.handleChange}
                error={formik.touched.color && Boolean(formik.errors.color)}
                helperText={formik.touched.color && formik.errors.color}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="cc"
                name="cc"
                label="Cc"
                type="number"
                value={formik.values.cc}
                onChange={formik.handleChange}
                error={formik.touched.cc && Boolean(formik.errors.cc)}
                helperText={formik.touched.cc && formik.errors.cc}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="image"
                name="image"
                label="Image"
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="purchaseDate"
                name="purchaseDate"
                label="Purchase date"
                type="date"
                value={formik.values.purchaseDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.purchaseDate &&
                  Boolean(formik.errors.purchaseDate)
                }
                helperText={
                  formik.touched.purchaseDate && formik.errors.purchaseDate
                }
                size="small"
                variant="standard"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="purchasePrice"
                name="purchasePrice"
                label="Purchase price"
                value={formik.values.purchasePrice}
                onChange={formik.handleChange}
                error={
                  formik.touched.purchasePrice &&
                  Boolean(formik.errors.purchasePrice)
                }
                helperText={
                  formik.touched.purchasePrice && formik.errors.purchasePrice
                }
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="saleDate"
                name="saleDate"
                label="Sale date"
                type="date"
                value={formik.values.saleDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.saleDate && Boolean(formik.errors.saleDate)
                }
                helperText={
                  formik.touched.saleDate && formik.errors.purchaseDate
                }
                size="small"
                variant="standard"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="salePrice"
                name="salePrice"
                label="Sale price"
                value={formik.values.salePrice}
                onChange={formik.handleChange}
                error={
                  formik.touched.salePrice && Boolean(formik.errors.salePrice)
                }
                helperText={formik.touched.salePrice && formik.errors.salePrice}
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

export default CarDetail;

import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  brand: yup.string("Ingrese la marca").required("Campo requerido"),
  model: yup.string("Ingrese el modelo").required("Campo requerido"),
  year: yup.string("Ingrese el anio").required("Campo requerido"),
  plate: yup.string("Ingrese la placa").required("Campo requerido"),
  cc: yup.string("Ingrese el cilindraje").required("Campo requerido"),
  color: yup.string("Ingrese el color").required("Campo requerido"),
});

const Item = ({ item }) => {
  return <div>Item</div>;
};

export default Item;

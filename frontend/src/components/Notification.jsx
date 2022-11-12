import { Alert } from "@mui/material";
import React from "react";

const error = (msg) => {
  return <Alert severity="error">{msg}</Alert>;
};

const success = (msg) => {
  return <Alert severity="success">{msg}</Alert>;
};

const info = (msg) => {
  return <Alert severity="info">{msg}</Alert>;
};

const Notification = () => {
  return (
    <div>
      <Alert severity="success">OK</Alert>
    </div>
  );
};

export default Notification;

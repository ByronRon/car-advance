import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./Auth0ProviderWithNavigate";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    NotificationManager.error("Existio un error.!", "", 2000);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

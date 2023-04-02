import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
// import LayoutNoHeader from "./components/layouts/LayoutNoHeader";
import Layout from "./components/layouts/Layout";
import Service from "./pages/Service";
import CarDetail from "./pages/CarDetail";
import ServiceDetail from "./pages/ServiceDetail";
import MaintenanceCard from "./pages/MaintenanceCard";
import MaintenanceDetail from "./pages/MaintenanceDetail";
import "react-notifications/lib/notifications.css";
import CallbackPage from "./pages/CallbackPage";

import AuthenticationGuard from "./components/guards/AuthenticationGuard";
import { PageLoader } from "./components/PageLoader";
import Car from "./pages/Car";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      {/* <ConfirmProvider>
        <NotificationContainer /> */}
      <Routes>
        {/* <Route element={<LayoutNoHeader />}>
          <Route path="login" element={<Login />} />
        </Route> */}
        <Route element={<Layout />}>
          <Route path="/">
            <Route index element={<Home />} />

            <Route
              path="cars"
              index
              element={<AuthenticationGuard component={Car} />}
            />
            <Route
              path="cars/:id"
              index
              element={<AuthenticationGuard component={CarDetail} />}
            />
            <Route
              path="cars/new"
              index
              element={<AuthenticationGuard component={CarDetail} />}
            />
            <Route
              path="cars/:id/maintenances"
              index
              element={<AuthenticationGuard component={MaintenanceCard} />}
            />
            <Route
              path="cars/:id/maintenances/new"
              index
              element={<AuthenticationGuard component={MaintenanceDetail} />}
            />
            <Route
              path="cars/:id/maintenances/:idm"
              index
              element={<AuthenticationGuard component={MaintenanceDetail} />}
            />
          </Route>
          <Route path="services">
            <Route
              index
              element={<AuthenticationGuard component={Service} />}
            />
            <Route
              path=":id"
              index
              element={<AuthenticationGuard component={ServiceDetail} />}
            />

            <Route
              path="new"
              index
              element={<AuthenticationGuard component={ServiceDetail} />}
            />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/callback" element={<CallbackPage />} />
          {/* <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              }
            />
          </Route> */}
        </Route>
      </Routes>
      {/* </ConfirmProvider> */}
    </div>
  );
};

export default App;

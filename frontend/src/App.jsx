import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
import LayoutNoHeader from "./components/layouts/LayoutNoHeader";
import Layout from "./components/layouts/Layout";
import Service from "./pages/Service";
import CarDetail from "./pages/CarDetail";
import ServiceDetail from "./pages/ServiceDetail";
import MaintenanceCard from "./pages/MaintenanceCard";
import MaintenanceDetail from "./pages/MaintenanceDetail";
import "react-notifications/lib/notifications.css";
import NotificationContainer from "react-notifications";
import { ConfirmProvider } from "material-ui-confirm";
import CallbackPage from "./pages/CallbackPage";

import AuthenticationGuard from "./components/guards/AuthenticationGuard";
import { PageLoader } from "./components/PageLoader";

const App = () => {
  // const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  //console.log(currentUser);
  return (
    <div>
      <ConfirmProvider>
        <NotificationContainer />
        {/* <BrowserRouter> */}
        <Routes>
          <Route element={<LayoutNoHeader />}>
            {/* <Route path="/"> */}
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/">
              <Route index element={<AuthenticationGuard component={Home} />} />

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
            <Route path="/callback" element={CallbackPage} />
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
        {/* </BrowserRouter> */}
      </ConfirmProvider>
    </div>
  );
};

export default App;

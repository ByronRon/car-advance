import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import LayoutNoHeader from "./components/layouts/LayoutNoHeader";
import Layout from "./components/layouts/Layout";
import Service from "./pages/Service";
import Maintenance from "./pages/Maintenance";
import Item from "./components/Item";
import CarDetail from "./pages/CarDetail";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutNoHeader />}>
          {/* <Route path="/"> */}
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route
              path="cars/:id"
              index
              element={
                <RequireAuth>
                  <CarDetail />
                </RequireAuth>
              }
            />
            <Route
              path="cars/new"
              index
              element={
                <RequireAuth>
                  <CarDetail />
                </RequireAuth>
              }
            />
            <Route
              path="cars/:id/maintenances"
              index
              element={
                <RequireAuth>
                  <Maintenance />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="services">
            <Route
              index
              element={
                <RequireAuth>
                  <Service />
                </RequireAuth>
              }
            />
            <Route
              path=":id"
              index
              element={
                <RequireAuth>
                  <ServiceDetail />
                </RequireAuth>
              }
            />

            <Route
              path="new"
              index
              element={
                <RequireAuth>
                  <ServiceDetail />
                </RequireAuth>
              }
            />
          </Route>
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
    </BrowserRouter>
  );
};

export default App;

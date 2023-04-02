import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import styles from "../../styles/Layout.module.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
          {isAuthenticated && (
            <div className={styles.sidebar}>
              <SideBar className={styles.menu} />
            </div>
          )}
          <div className={styles.children}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

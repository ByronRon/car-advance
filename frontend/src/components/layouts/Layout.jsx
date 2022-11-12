import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import styles from "../../styles/Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.children}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

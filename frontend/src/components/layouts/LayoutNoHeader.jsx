import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../styles/LayoutNoHeader.module.css";

const LayoutNoHeader = ({ children }) => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default LayoutNoHeader;

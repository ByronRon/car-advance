import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "../styles/SideBar.module.css";
import LogoutButton from "./buttons/LogoutButton";

const SideBar = () => {
  return (
    <>
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <Link to="/cars" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarIcon className={styles.icon} />
              <span>Cars</span>
            </li>
          </Link>
          <p className={styles.title}>ADMIN</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={styles.icon} />
              <span>Service</span>
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li> */}
          <p className={styles.title}>USEFUL</p>
          {/* <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li> */}
          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>CONFIG</p>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className={styles.icon} />
              <span>Profile</span>
            </li>
          </Link>

          <li>
            <ExitToAppIcon className={styles.icon} />
            {/* <span>Logout</span> */}
            <LogoutButton />
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default SideBar;

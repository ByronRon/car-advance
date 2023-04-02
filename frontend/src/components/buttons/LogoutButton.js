import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styles from "../../styles/LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: process.env.REACT_APP_HOME_URL,
    });
  };
  return (
    <div onClick={handleLogout}>
      <span>Log Out</span>
    </div>
  );
};

export default LogoutButton;

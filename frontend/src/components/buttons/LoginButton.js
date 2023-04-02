import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/cars",
      },
    });
  };
  return (
    <Button variant="outlined" size="small" onClick={handleLogin}>
      Log in
    </Button>
  );
};

export default LoginButton;

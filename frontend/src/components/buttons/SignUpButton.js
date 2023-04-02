import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
      appState: {
        returnTo: "/profile",
      },
    });
  };
  return (
    <Button variant="outlined" size="small" onClick={handleSignUp}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;

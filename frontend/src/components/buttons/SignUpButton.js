import { useAuth0 } from "@auth0/auth0-react";
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
    <button className="button__sign-up" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

export default SignUpButton;

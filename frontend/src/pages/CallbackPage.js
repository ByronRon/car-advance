import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CallbackPage = () => {
  const navigate = useNavigate();
  return <div>{navigate("/")}</div>;
};

export default CallbackPage;

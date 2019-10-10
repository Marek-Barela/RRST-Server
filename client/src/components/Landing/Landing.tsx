import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <h1>Welcome on landing page</h1>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/dashboard">Dashboard - redirect if note loged in</Link>
    </div>
  );
};

export default Landing;

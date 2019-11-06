import React, { FC } from "react";
import Alert from "../Alert";
import RedirectRule from "../RedirectRule";
import LoginForm from "../Login-Form";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FC = () => {
  const { container } = styles;
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/login" />
      <div className={container}>
        <Alert />
        <h1>Welcome in login page</h1>
        <Link to="/">Main page</Link>
        <Link to="/registration">Registration</Link>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;

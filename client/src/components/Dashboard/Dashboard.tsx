import React, { FC } from "react";
import RedirectRule from "../RedirectRule";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  const { container } = styles;
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/" />
      <div className={container}>
        <h1>Welcome in Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;

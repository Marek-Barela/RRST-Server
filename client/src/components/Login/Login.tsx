import React, { FC, useState, FormEvent } from "react";
import Alert from "../Alert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../features/login/login-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/login/login-model";
import styles from "./Login.module.css";

interface DispatchProps {
  login: (payload: UserData) => void;
}

type Props = DispatchProps;

const Login: FC<Props> = ({ login }) => {
  const { container } = styles;
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className={container}>
      <Alert />
      <h1>Welcome in login page</h1>
      <Link to="/">Main page</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/dashboard">Dashboard - redirect if note loged in</Link>
      <form onSubmit={e => onSubmit(e)}>
        <label htmlFor="email">email</label>
        <input name="email" type="username" onChange={onChange} value={email} />
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          aria-label="password"
          autoComplete="new-password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  login: loginUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(Login);

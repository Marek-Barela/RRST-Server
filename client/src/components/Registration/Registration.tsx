import React, { FC, useState, FormEvent } from "react";
import Alert from "../Alert";
import RedirectRule from "../RedirectRule";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../features/register/register-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/register/register-model";
import styles from "./Registration.module.css";

interface DispatchProps {
  register: (payload: UserData) => void;
}

type Props = DispatchProps;

const Login: FC<Props> = ({ register }) => {
  const { container, form } = styles;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password === password2) {
      register({ name, email, password });
    }
  };

  return (
    <div className={container}>
      <RedirectRule redirectPathIfNotAuthorized="/registration" />
      <Alert />
      <h1>Welcome in login page</h1>
      <Link to="/">Main page</Link>
      <Link to="/login">login</Link>
      <Link to="/dashboard">Dashboard - redirect if note loged in</Link>
      <form onSubmit={e => onSubmit(e)} className={form}>
        <label htmlFor="username">Username</label>
        <input name="name" type="username" onChange={onChange} value={name} />
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
        <label htmlFor="password2">repeat password</label>
        <input
          name="password2"
          type="password"
          onChange={onChange}
          value={password2}
          aria-label="password"
          autoComplete="new-password"
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  register: registerUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(Login);

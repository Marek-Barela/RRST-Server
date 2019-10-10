import React, { FC, useState, FormEvent } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../features/register/register-actions";
import { RootState } from "../../redux/root-reducer";
import { UserData } from "../../features/register/register-model";
import styles from "./RegistrationForm.module.css";

interface DispatchProps {
  register: (payload: UserData) => void;
}

type Props = DispatchProps;

const RegistrationForm: FC<Props> = ({ register }) => {
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
  const { form, inputWrapper, formButton } = styles;
  return (
    <form onSubmit={e => onSubmit(e)} className={form}>
      <div className={inputWrapper}>
        <label htmlFor="username">Username</label>
        <input name="name" type="username" onChange={onChange} value={name} />
      </div>
      <div className={inputWrapper}>
        <label htmlFor="email">email</label>
        <input name="email" type="username" onChange={onChange} value={email} />
      </div>
      <div className={inputWrapper}>
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          aria-label="password"
          autoComplete="new-password"
        />
      </div>
      <div className={inputWrapper}>
        <label htmlFor="password2">repeat password</label>
        <input
          name="password2"
          type="password"
          onChange={onChange}
          value={password2}
          aria-label="password"
          autoComplete="new-password"
        />
      </div>
      <button type="submit" className={formButton}>
        register
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  register: registerUser
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(RegistrationForm);

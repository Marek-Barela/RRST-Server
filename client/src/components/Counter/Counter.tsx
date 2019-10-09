import React, { Component } from "react";
import {
  incrementCounter,
  decrementCounter,
  fetchCounter
} from "./Counter-actions";
import { registerUser } from "../../features/register/register-actions";
import { loginUser } from "../../features/login/login-actions";
import { getCounter } from "./Counter-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";

interface StateProps {
  count: number;
}

interface DispatchProps {
  onDecrement: () => void;
  onIncrement: () => void;
  fetch: () => void;
  register: any;
  login: any;
}

type Props = StateProps & DispatchProps;

class Counter extends Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  handleTestRegister() {
    this.props.register({
      name: "123123",
      email: "123123@gmail.com",
      password: "123456"
    });
  }

  handleTestLogin() {
    this.props.login({
      email: "123123123.com",
      password: "123"
    });
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <>
        <h2>Counter</h2>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <span>Result: {`${count}`}</span>
        <button onClick={() => this.handleTestRegister()}>
          Register button
        </button>
        <button onClick={() => this.handleTestLogin()}>Login button</button>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const count = getCounter(state);

  return {
    count
  };
};

const mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter,
  fetch: fetchCounter,
  register: registerUser,
  login: loginUser
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

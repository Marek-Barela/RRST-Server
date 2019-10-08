import React, { Component } from "react";
import {
  incrementCounter,
  decrementCounter,
  fetchCounter
} from "./Counter-actions";
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
}

type Props = StateProps & DispatchProps;

class Counter extends Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <>
        <h2>Counter</h2>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <span>Result: {`${count}`}</span>
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
  fetch: fetchCounter
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

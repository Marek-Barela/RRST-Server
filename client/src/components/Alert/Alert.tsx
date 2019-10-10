import React, { FC } from "react";
import { connect } from "react-redux";
import { getAlertMessages } from "../../features/alert/alert-selector";
import { RootState } from "../../redux/root-reducer";
import { Alert } from "../../features/alert/alert-model";

interface StateProps {
  alertMessages: Alert[];
}

type Props = StateProps;

const AlertMessage: FC<Props> = ({ alertMessages }) => {
  return (
    <div>
      {alertMessages.map((alert, index) => (
        <div key={index}>{alert.msg}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  alertMessages: getAlertMessages(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(AlertMessage);

import React, { FC } from "react";

interface ParentProps {
  exact: boolean;
  path: string;
  component: JSX.Element;
}

type Props = ParentProps;

const ProtectedRoute: FC<Props> = props => {
  return <div></div>;
};

export default ProtectedRoute;

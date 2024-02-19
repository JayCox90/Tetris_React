import React from "react";
import { StyledSingleTetroCell } from "./styles/Cell.styled";

const SingleCell = ({ type, height }) => {
  return <StyledSingleTetroCell type={type} height={height} />;
};

export default React.memo(SingleCell);

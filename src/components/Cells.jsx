import React from "react";
import { StyledCell } from "./styles/Cell.styled";

const Cell = ({ type }) => {
  return <StyledCell type={type} />;
};

export default React.memo(Cell);

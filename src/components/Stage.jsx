import Cell from "./Cells";
import { StyledStage } from "./styles/Stage.styled";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} heigth={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;

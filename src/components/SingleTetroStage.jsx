import { StyledSingleTetroStage } from "./styles/SingleTetroStage.styled";
import SingleCell from "./Cells_singleTetro";

// Could actually do this via the same stage component and put props in for the styled components but... this seems better readable?

const SingleTetroStage = ({ stage }) => (
  <StyledSingleTetroStage width={stage[0].length} heigth={stage.length}>
    {stage.map((row) =>
      row.map((cell, x) => <SingleCell key={x} type={cell[0]} height={stage.length} />)
    )}
  </StyledSingleTetroStage>
);

export default SingleTetroStage;

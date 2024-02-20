import styled from "styled-components";
import { SMALL_SCREEN_PX } from "../../gameHelpers";

export const StyledPocketTetroStagePlacer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const StyledNextTetroStagePlacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SMALL_SCREEN_PX}) {
    height: 10vh;
    width: 40%;
  }
`;

export const StyledSingleTetroStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(10vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  border-radius: 5px;
  background: #111;
  margin: 15px 0 15px 0;
`;

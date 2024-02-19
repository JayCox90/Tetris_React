import styled from "styled-components";
import { SMALL_SCREEN_PX, STAGE_HEIGHT, STAGE_WIDTH } from "../../gameHelpers";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  /* width: 100%; */
  /* height: 100%; */
  /* max-width: 24vw; */
  background: #111;

  @media (max-width: ${SMALL_SCREEN_PX}) {
    aspect-ratio: calc(${STAGE_HEIGHT} / ${STAGE_WIDTH});
  }
`;

export const StagePlacer = styled.div`
  display: flex;
  justify-content: center;
`;

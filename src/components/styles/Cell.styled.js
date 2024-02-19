import styled from "styled-components";
import { STAGE_HEIGHT, SMALL_SCREEN_PX, STAGE_WIDTH } from "../../gameHelpers";

export const StyledCell = styled.div`
  /* height: calc(100vh / ${STAGE_HEIGHT}); */
  height: calc(60vh / ${STAGE_HEIGHT});
  aspect-ratio: 1;
  background: rgba(${(props) => props.theme[props.type]}, 0.8);
  // Border shadows
  border: 4px solid;
  border-bottom-color: rgba(${(props) => props.theme[props.type]}, 0.1);
  border-right-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-top-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-left-color: rgba(${(props) => props.theme[props.type]}, 0.3);

  @media (max-width: ${SMALL_SCREEN_PX}) {
    height: calc(30vh / ${STAGE_HEIGHT});
    /* width: calc(50vw / ${STAGE_WIDTH}); */
  }
`;

export const StyledSingleTetroCell = styled.div`
  height: calc(40vh / ${STAGE_HEIGHT});
  /* height: calc(10vh / ${(props) => props.height}); */
  /* height: calc(7vh / $((props)=> props.height)); */
  aspect-ratio: 1;
  background: rgba(${(props) => props.theme[props.type]}, 0.8);
  // Border shadows
  border: 4px solid;
  border-bottom-color: rgba(${(props) => props.theme[props.type]}, 0.1);
  border-right-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-top-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-left-color: rgba(${(props) => props.theme[props.type]}, 0.3);

  @media (max-width: ${SMALL_SCREEN_PX}) {
    height: calc(4vh / ${(props) => props.height});
  }
`;

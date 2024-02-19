import styled from "styled-components";
import { SMALL_SCREEN_PX } from "../../gameHelpers";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  @media (max-width: ${SMALL_SCREEN_PX}) {
    justify-content: center;
    margin: 10px 2px 0px 2px;
  }
`;

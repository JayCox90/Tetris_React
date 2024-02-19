import styled from "styled-components";
import { SMALL_SCREEN_PX } from "../../gameHelpers";

export const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  @media (max-width: ${SMALL_SCREEN_PX}) {
    padding: 5px;
    margin: 0px 5px;
    max-height: 1vh;
  }
`;

import { StyledDisplay } from "./styles/Display.styled";

const Display = ({ gameOver, text, handleFunction }) => {
  return (
    <StyledDisplay gameOver={gameOver} onClick={() => handleFunction()}>
      {text}
    </StyledDisplay>
  );
};

export default Display;

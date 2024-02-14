import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.theme.background});
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 45vw;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export const StyledParagraph = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 40px 0;
  padding: 10px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

export const StyledExplanation = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;

import { StyledButton } from "./styles/StartButton.styled";
const StartPauseButton = ({
  startGame,
  gameStarted,
  pauseGame,
  unPauseGame,
  gamePaused,
  gameOver,
  buttonRef,
}) => {
  return (
    <>
      {!gameStarted || gameOver ? (
        <StyledButton onClick={startGame}>Start Game</StyledButton>
      ) : (
        <StyledButton
          onClick={gamePaused ? unPauseGame : pauseGame}
          ref={buttonRef}
        >
          {gamePaused ? "Continue" : "Pause Game"}
        </StyledButton>
      )}
    </>
  );
};

export default StartPauseButton;

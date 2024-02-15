import { StyledButton } from "./styles/StartButton.styled";
//gameStarted={gameStarted} pauseGame={pauseGame} unPauseGame={unPauseGame} gamePaused={gamePaused}
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

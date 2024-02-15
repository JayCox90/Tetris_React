import { useRef, useState } from "react";
import {
  createStage,
  checkCollision,
  createSingleTetroStage,
} from "../gameHelpers";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartPauseButton from "./StartPauseButton";

// Styled Components
import {
  StyledNextTetroStagePlacer,
  StyledPocketTetroStagePlacer,
} from "./styles/SingleTetroStage.styled";
import SingleTetroStage from "./SingleTetroStage";
import {
  StyledTetrisWrapper,
  StyledTetris,
  StyledParagraph,
  StyledExplanation,
} from "./styles/Tetris.styled";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";
import { StyledButton } from "./styles/StartButton.styled";

const Tetris = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const buttonRef = useRef(null);
  const wrapperRef = useRef(null);
  const [droptime, setDropTime] = useState(null);
  const [currentDropTime, setCurrentDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);

  const [
    player,
    updatePlayerPos,
    resetPlayer,
    playerRotate,
    nextTetro,
    pocketTetro,
    storePocketTetro,
    updatePocketTetro,
    setPocketTetro,
  ] = usePlayer();

  const {
    stage,
    setStage,
    nextTetroStage,
    setNextTetroStage,
    rowsCleared,
    pocketTetroStage,
    setPocketTetroStage,
  } = useStage(player, resetPlayer, nextTetro, pocketTetro);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset eveything
    setStage(createStage());
    setNextTetroStage(createSingleTetroStage());
    setPocketTetroStage(createSingleTetroStage());
    setPocketTetro(null);
    resetPlayer();
    setGameOver(false);
    setGamePaused(false);
    setDropTime(1000 / (level + 1) + 200);
    setScore(0);
    setRows(0);
    setLevel(1);
    setGameStarted(true);
  };

  const pauseGame = () => {
    setCurrentDropTime(droptime);
    setDropTime(null);
    setGamePaused(true);
    if (buttonRef.current) {
      buttonRef.current.blur();
      wrapperRef.current.focus();
    }
  };

  const unPauseGame = () => {
    if (gamePaused) {
      setDropTime(currentDropTime);
      setGamePaused(false);
      if (buttonRef.current) {
        buttonRef.current.blur();
        wrapperRef.current.focus();
      }
    }
  };

  const drop = () => {
    // Increased level when player has cleared 10 rows
    setDropTime(1000 / (level + 1) + 200);
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        setGameOver(true);
        setGamePaused(false);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropDown = () => {
    let pot = 0;
    while (!checkCollision(player, stage, { x: 0, y: pot })) {
      setDropTime(5);
      pot += 1;
    }
    setDropTime(1000 / (level + 1) + 200);

    updatePlayerPos({ x: 0, y: pot - 1, collided: true });
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const pocketPlayer = () => {
    if (pocketTetro) {
      updatePocketTetro();
    } else {
      storePocketTetro();
    }
  };

  const move = ({ keyCode }) => {
    // wrapperRef.current.focus();
    if (!gameOver && !gamePaused && gameStarted && buttonRef.current) {
      if (keyCode === 37) {
        // left arrow key
        movePlayer(-1);
      } else if (keyCode === 39) {
        // right arrow key
        movePlayer(1);
      } else if (keyCode === 40) {
        // down arrow key
        dropPlayer();
      } else if (keyCode === 38) {
        // up arrow key
        playerRotate(stage, 1);
      } else if (keyCode === 32) {
        dropDown();
      } else if (keyCode === 83) {
        pocketPlayer();
      }
    }
  };

  useInterval(() => {
    drop();
  }, droptime);

  const changeTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    if (buttonRef.current) {
      buttonRef.current.blur();
      wrapperRef.current.focus();
    }
  };

  return (
    <>
      <ThemeProvider theme={themes[themeIndex]}>
        <StyledTetrisWrapper
          ref={wrapperRef}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => move(e)}
          onKeyUp={keyUp}
        >
          <StyledTetris>
            <aside>
              {gameStarted && !gameOver && (
                <StyledPocketTetroStagePlacer>
                  <SingleTetroStage stage={pocketTetroStage} />
                  <StyledParagraph>Pocket tetromino</StyledParagraph>
                  <StyledExplanation>Arrow keys for movement</StyledExplanation>
                  <StyledExplanation>Space Key to drop</StyledExplanation>
                  <StyledExplanation>
                    S Key to pocket current Tetro
                  </StyledExplanation>
                </StyledPocketTetroStagePlacer>
              )}
            </aside>
            <Stage stage={stage} />
            <aside>
              {gameOver && <Display gameOver={gameOver} text="GameOver" />}
              {gameStarted && (
                <div>
                  <Display text={`Score: ${score}`} />
                  <Display text={`Rows: ${rows}`} />
                  <Display text={`Level: ${level}`} />
                </div>
              )}
              <StartPauseButton
                gameOver={gameOver}
                startGame={startGame}
                gameStarted={gameStarted}
                pauseGame={pauseGame}
                unPauseGame={unPauseGame}
                gamePaused={gamePaused}
                buttonRef={buttonRef}
              />

              {gameStarted && !gameOver && (
                <>
                  <StyledNextTetroStagePlacer>
                    <SingleTetroStage stage={nextTetroStage} />
                  </StyledNextTetroStagePlacer>
                  <StyledParagraph>upcoming tetromino</StyledParagraph>
                </>
              )}
              <StyledButton ref={buttonRef} onClick={changeTheme}>
                Change Theme
              </StyledButton>
            </aside>
          </StyledTetris>
        </StyledTetrisWrapper>
      </ThemeProvider>
    </>
  );
};

export default Tetris;

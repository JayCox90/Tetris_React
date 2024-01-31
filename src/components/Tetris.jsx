import { useState } from "react";
import { createStage, checkCollision } from "../gameHelpers";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartPauseButton from "./StartPauseButton";

// Styled Components
import {
  StyledTetrisWrapper,
  StyledTetris,
  StyledParagraph,
} from "./styles/Tetris.styled";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";
import {
  StyledNextTetroStagePlacer,
  StyledPocketTetroStagePlacer,
} from "./styles/SingleTetroStage.styled";
import SingleTetroStage from "./SingleTetroStage";

const Tetris = () => {
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
  ] = usePlayer();

  const { stage, setStage, nextTetroStage, rowsCleared, pocketTetroStage } =
    useStage(player, resetPlayer, nextTetro, pocketTetro);
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
    resetPlayer();
    setGameOver(false);
    setGamePaused(false);
    setGameStarted(true);
    setDropTime(1000 / (level + 1) + 200);
    setScore(0);
    setRows(0);
    setLevel(1);
  };

  const pauseGame = () => {
    setCurrentDropTime(droptime);
    setDropTime(null);
    setGamePaused(true);
  };

  const unPauseGame = () => {
    if (gamePaused) {
      setDropTime(currentDropTime);
      setGamePaused(false);
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
    console.log("pocketcalled");
    console.log(pocketTetro);
    if (pocketTetro) {
      updatePocketTetro();
    } else {
      storePocketTetro();
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver && !gamePaused) {
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

  return (
    <StyledTetrisWrapper
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
          />

          {gameStarted && !gameOver && (
            <>
              <StyledNextTetroStagePlacer>
                <SingleTetroStage stage={nextTetroStage} />
              </StyledNextTetroStagePlacer>
              <StyledParagraph>upcoming tetromino</StyledParagraph>
            </>
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
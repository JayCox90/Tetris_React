import { useCallback, useState } from "react";

import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    id: TETROMINOS[0].id,
    collided: false,
  });

  const [nextTetro, setNextTetro] = useState(randomTetromino());
  const [pocketTetro, setPocketTetro] = useState(null);

  const rotate = (matrix, dir) => {
    // Make the rows the columns ( transpose )
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    // Reverse each row to get a rotated matrix/tetromino
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };
  const getNextTetro = useCallback(() => {
    setNextTetro(randomTetromino());
  }, []);

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: nextTetro.shape,
      id: nextTetro.id,
      collided: false,
    });
    getNextTetro();
  }, [nextTetro, getNextTetro]);

  // pocketTetro definition
  const storePocketTetro = () => {
    setPocketTetro(TETROMINOS[player.id]);
    resetPlayer();
  };

  const updatePocketTetro = () => {
    const currentPlayer = JSON.parse(JSON.stringify(player));
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: pocketTetro.shape,
      collided: false,
      id: pocketTetro.id,
      stage: pocketTetro.stage,
    });
    setPocketTetro(TETROMINOS[currentPlayer.id]);
  };

  return [
    player,
    updatePlayerPos,
    resetPlayer,
    playerRotate,
    nextTetro,
    pocketTetro,
    storePocketTetro,
    updatePocketTetro,
    setPocketTetro,
  ];
};

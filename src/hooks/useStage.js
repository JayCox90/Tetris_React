import { useEffect, useState } from "react";
import { createStage, createSingleTetroStage } from "../gameHelpers";

export const useStage = (player, resetPlayer, nextTetro, pocketTetro) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  const [nextTetroStage, setNextTetroStage] = useState(
    createSingleTetroStage()
  );
  const [pocketTetroStage, setPocketTetroStage] = useState(
    createSingleTetroStage()
  );

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Then check if we have collision
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };
    setStage((prev) => updateStage(prev));

    const updateNextTetroStage = () => {
      // Instead of prev stage, we could take the next tetro and just add 1 and 1
      const newNextTetroStage = nextTetro.stage.map((row) =>
        row.map((cell) => [0, "clear"])
      );
      // Then draw the next tetromino
      nextTetro.stage.forEach((row, y) => {
        row.forEach((value, x) => {
          newNextTetroStage[y][x] = [value, "clear"];
        });
      });
      return newNextTetroStage;
    };

    setNextTetroStage((prev) => updateNextTetroStage(prev));

    const updatePocketTetroStage = () => {
      let newPocketTetroStage = createSingleTetroStage();
      if (pocketTetro !== null) {
        newPocketTetroStage = pocketTetro.stage.map((row) =>
          row.map((cell) => [0, "clear"])
        );
        pocketTetro.stage.forEach((row, y) => {
          row.forEach((value, x) => {
            newPocketTetroStage[y][x] = [value, "clear"];
          });
        });
      }
      return newPocketTetroStage;
    };

    setPocketTetroStage((prev) => updatePocketTetroStage(prev));
  }, [player, resetPlayer, nextTetro, pocketTetro, rowsCleared]);

  return {
    stage,
    rowsCleared,
    setStage,
    nextTetroStage,
    setNextTetroStage,
    pocketTetroStage,
    setPocketTetroStage,
  };
};

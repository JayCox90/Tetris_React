import { useState, useEffect, useCallback } from "react";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [0, 40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // do we have score?
    if (rowsCleared > 0) {
      setScore((prev) => prev + linePoints[rowsCleared] * level);
      setRows((prev) => prev + rowsCleared);
    }
    setLevel(Math.floor(rows / 10) + 1);
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, linePoints, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};

export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0", id: "0" },
  I: {
    id: "I",
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    stage: [
      [0, 0, 0, 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  J: {
    id: "J",
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    stage: [
      [0, 0, 0, 0],
      [0, 0, "J", 0],
      [0, 0, "J", 0],
      [0, "J", "J", 0],
      [0, 0, 0, 0],
    ],
  },
  L: {
    id: "L",
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    stage: [
      [0, 0, 0, 0],
      [0, 0, "L", 0],
      [0, 0, "L", 0],
      [0, "L", "L", 0],
      [0, 0, 0, 0],
    ],
  },
  O: {
    id: "O",
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    stage: [
      [0, 0, 0, 0],
      [0, "O", "O", 0],
      [0, "O", "O", 0],
      [0, 0, 0, 0],
    ],
  },
  S: {
    id: "S",
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    stage: [
      [0, 0, 0, 0, 0],
      [0, 0, "S", "S", 0],
      [0, "S", "S", 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  T: {
    id: "T",
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    stage: [
      [0, 0, 0, 0, 0],
      [0, "T", "T", "T", 0],
      [0, 0, "T", 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
  Z: {
    id: "Z",
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    stage: [
      [0, 0, 0, 0, 0],
      [0, "Z", "Z", 0, 0],
      [0, 0, "Z", "Z", 0],
      [0, 0, 0, 0, 0],
    ],
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TETROMINOS[randTetromino];
};

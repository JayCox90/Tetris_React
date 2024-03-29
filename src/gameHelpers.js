export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const NEXT_TETRO_STAGE_WIDTH = 4;
export const NEXT_TETRO_STAGE_HEIGHT = 4;

export const SMALL_SCREEN_PX = "768px";

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const createSingleTetroStage = () =>
  Array.from(Array(NEXT_TETRO_STAGE_HEIGHT), () =>
    new Array(NEXT_TETRO_STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // We shouldn't go through Bottom or sides of stage
          // 2. Check that movement is within stage heigth (y)
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that movement is within stage width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};

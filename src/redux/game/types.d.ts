export type GameType = {
  board: BoardType;
};

export type BoardType = Array<TileType>;

export type TileType = {
  id: string;
  className: string;
  isFull: boolean;
  stoneColor: string;
};

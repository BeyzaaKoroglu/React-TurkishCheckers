export type GameType = {
  board: BoardType;
  selectedStone: string;
  player: "white" | "black";
  movableTiles: Array<MovableTiles>;
  white: number;
  black: number;
};

export type BoardType = Array<TileType>;

export type TileType = {
  id: string;
  className: string;
  isFull: boolean;
  stoneColor: string;
};

export type MovableTiles = {
  moveTo: string;
  delete: string;
};

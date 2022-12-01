import { TileType } from "../../redux/game/types";

export type TileProps = {
  tile: TileType;
  isSelected: boolean;
  isMovable: boolean;
};

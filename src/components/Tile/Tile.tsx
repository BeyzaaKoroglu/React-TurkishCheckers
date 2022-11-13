import { FC } from "react";
import Stone from "../Stone";
import { Styled } from "./Tile.styled";
import { TileProps } from "./Tile.types";

const Tile: FC<TileProps> = ({ tile }) => {
  return (
    <Styled className={tile.className}>
      {tile.isFull && <Stone color={tile.stoneColor} />}
    </Styled>
  );
};

export default Tile;

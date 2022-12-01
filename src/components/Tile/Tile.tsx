import { FC } from "react";
import { useDispatch } from "react-redux";
import { moveStone } from "../../redux/game/gameSlice";
import Stone from "../Stone";
import { Styled } from "./Tile.styled";
import { TileProps } from "./Tile.types";

const Tile: FC<TileProps> = ({ tile, isSelected, isMovable }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    isMovable && dispatch(moveStone(tile.id));
  };
  return (
    <Styled
      onClick={handleClick}
      className={`${
        isMovable ? "movable" : isSelected ? "selected" : tile.className
      }`}
    >
      {tile.isFull && <Stone tile={tile} />}
    </Styled>
  );
};

export default Tile;

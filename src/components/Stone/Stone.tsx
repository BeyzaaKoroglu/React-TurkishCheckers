import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStone } from "../../redux/game/gameSlice";
import { StateType } from "../../redux/state.types";
import { Styled } from "./Stone.styled";
import { StoneProps } from "./Stone.types";

const Stone: FC<StoneProps> = ({ tile }) => {
  const dispatch = useDispatch();
  const player = useSelector((state: StateType) => state.game.player);

  const handleClick = () => {
    player === tile.stoneColor && dispatch(selectStone(tile.id));
  };
  return (
    <Styled
      onClick={handleClick}
      style={{ backgroundColor: tile.stoneColor }}
    ></Styled>
  );
};

export default Stone;

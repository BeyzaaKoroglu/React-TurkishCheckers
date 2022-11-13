import { useSelector } from "react-redux";
import { StateType } from "../../redux/state.types";
import Tile from "../Tile";
import { Styled } from "./Board.styled";

const Board = () => {
  const board = useSelector((state: StateType) => state.game.board);

  return (
    <Styled>
      {board.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </Styled>
  );
};

export default Board;

import { useSelector } from "react-redux";
import { StateType } from "../../redux/state.types";
import Tile from "../Tile";
import { Styled } from "./Board.styled";

const Board = () => {
  const board = useSelector((state: StateType) => state.game.board);
  const selectedStone = useSelector(
    (state: StateType) => state.game.selectedStone
  );
  const movableTiles = useSelector(
    (state: StateType) => state.game.movableTiles
  );
  const greenTilesId = movableTiles.map((tile) => tile.moveTo);

  return (
    <Styled>
      {board.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          isMovable={greenTilesId.includes(tile.id)}
          isSelected={tile.id === selectedStone}
        />
      ))}
    </Styled>
  );
};

export default Board;

import { useDispatch, useSelector } from "react-redux";
import { handlePlayAgain, handleStartGame } from "../../redux/game/gameSlice";
import { StateType } from "../../redux/state.types";
import { Styled } from "./Modal.styled";

const Modal = () => {
  const winner = useSelector((state: StateType) => state.game.winner);
  const dispatch = useDispatch();

  return (
    <Styled>
      {winner === "" ? (
        <div>
          <h1>TURKISH CHECKERS GAME</h1>
          <button onClick={() => dispatch(handleStartGame())}>
            START GAME
          </button>
        </div>
      ) : (
        <div>
          <h1>GAME OVER</h1>
          <h2>The Winner {`=>${winner.toUpperCase()}`}</h2>
          <button onClick={() => dispatch(handlePlayAgain())}>
            Play Again
          </button>
        </div>
      )}
    </Styled>
  );
};

export default Modal;

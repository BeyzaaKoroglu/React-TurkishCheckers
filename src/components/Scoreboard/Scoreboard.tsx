import { FC } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/state.types";
import { Styled } from "./Scoreboard.styled";
import { ScoreboardProps } from "./Scoreboard.types";

const Scoreboard: FC<ScoreboardProps> = ({ player }) => {
  const curentPlayer = useSelector((state: StateType) => state.game.player);
  const whiteStone = useSelector((state: StateType) => state.game.white);
  const blackStone = useSelector((state: StateType) => state.game.black);
  return (
    <Styled className={player === curentPlayer ? "shadow" : ""}>
      <p className="player">{player.toUpperCase()}</p>
      <p className="stone">{player === "white" ? whiteStone : blackStone}</p>
    </Styled>
  );
};

export default Scoreboard;

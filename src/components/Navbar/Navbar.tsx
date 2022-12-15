import { useDispatch } from "react-redux";
import { handlePlayAgain } from "../../redux/game/gameSlice";
import { Styled } from "./Navbar.styled";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Styled>
      <button onClick={() => dispatch(handlePlayAgain())}>Reset</button>
    </Styled>
  );
};

export default Navbar;

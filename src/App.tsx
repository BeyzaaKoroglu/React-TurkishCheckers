import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board";
import Modal from "./components/Modal";
import Scoreboard from "./components/Scoreboard";
import { StateType } from "./redux/state.types";

function App() {
  const modal = useSelector((state: StateType) => state.game.showModal);
  return (
    <div className="App">
      {modal && <Modal />}
      <Scoreboard player="white" />
      <Board />
      <Scoreboard player="black" />
    </div>
  );
}

export default App;

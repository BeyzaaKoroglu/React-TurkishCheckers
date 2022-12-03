import "./App.css";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Scoreboard player="white" />
      <Board />
      <Scoreboard player="black" />
    </div>
  );
}

export default App;

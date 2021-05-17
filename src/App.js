import "./App.css";
import Game from "./Components/Game";

function App() {
  return (
    <div className="App">
      <h1> Rock, paper, scissor</h1>
      <div>
        <Game playerNumber="1" />
      </div>
    </div>
  );
}

export default App;

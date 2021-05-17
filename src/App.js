import { useState } from "react";
import "./App.css";
import Game from "./Components";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1> Rock, paper, scissor</h1>
      <div>
        <Game round={setCounter} playerNumber="1" />
      </div>
    </div>
  );
}

export default App;

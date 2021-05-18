import Game from "../../Components/Game";

import "./styles.css";

function GamePage() {
  return (
    <div className="containerGamePage">
      <h1> Rock, paper, scissor</h1>
      <div>
        <Game playerNumber="1" />
      </div>
    </div>
  );
}
export default GamePage;

import Game from "../../Components/Game";

import "./styles.css";

function GamePage() {
  return (
    <div className="containerGamePage">
      <div className="containerHead">
        <h1> Rock, paper, scissor</h1>
        <img
          className="imageLogo"
          src="https://images-na.ssl-images-amazon.com/images/I/61QkvmvEdVL.png"
          alt="logo"
        />
      </div>

      <div>
        <Game />
      </div>
    </div>
  );
}
export default GamePage;

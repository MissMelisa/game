import { useState } from "react";

import "./styles.css";

const options = ["rock", "paper", "scissor"];

function player1() {
  let player1Option = options[Math.floor(Math.random() * 3)];
  return player1Option;
}

function Game({ round, playerNumber }) {
  const [choice, setChoice] = useState("");

  function handleOnClickChoice(options) {
    setChoice();
  }

  return (
    <div>
      <h2>{round}</h2>

      <h2>Player {playerNumber}</h2>
      <span>Choose an option</span>
      <div className="imagesContainer">
        <div onClick={() => handleOnClickChoice("rock")}>
          <img
            className="images"
            src="https://www.clipartkey.com/mpngs/m/7-76104_rock-drawing-png-vector-clipart-stone-clipart.png"
            alt="rock"
          />
        </div>
        <div onClick={() => handleOnClickChoice("paper")}>
          <img
            className="images"
            src="https://png.vector.me/files/images/1/8/183047/blank_sticky_note_clip_art.jpg"
            alt="paper"
          />
        </div>
        <div onClick={() => handleOnClickChoice("scissor")}>
          <img
            className="images"
            src="https://easydrawingguides.com/wp-content/uploads/2020/06/Scissors-Step-10.png"
            alt="scissor"
          />
        </div>
      </div>
    </div>
  );
}

export default Game;

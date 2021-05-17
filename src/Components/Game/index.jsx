import { useEffect, useState } from "react";

import Choice from "../Choice";

import "./styles.css";

const options = [
  {
    id: 0,
    name: "rock",
    src: "https://www.clipartkey.com/mpngs/m/7-76104_rock-drawing-png-vector-clipart-stone-clipart.png",
    alt: "rock",
  },
  {
    id: 1,
    name: "paper",
    src: "https://png.vector.me/files/images/1/8/183047/blank_sticky_note_clip_art.jpg",
    alt: "paper",
  },
  {
    id: 2,
    name: "scissor",
    src: "https://easydrawingguides.com/wp-content/uploads/2020/06/Scissors-Step-10.png",
    alt: "scissor",
  },
];

function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random() * 3)];
  return computerChoice.name;
}

function obtainResult(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    return "It's draw!";
  } else if (
    (computerChoice === "paper" && userChoice === "scissor") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissor" && userChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "You lost!";
  }
}

function Game({ playerNumber }) {
  const [userChoice, setUserChoice] = useState("");
  const [round, setRound] = useState();
  const [computerChoice, setComputerChoice] = useState();

  function handleOnClickChoice(choice) {
    setUserChoice(choice);
  }

  useEffect(() => {
    if (userChoice) {
      const computerNewChoice = getComputerChoice();
      console.log(computerNewChoice);
      const result = obtainResult(userChoice, computerNewChoice);

      setRound(result);

      setComputerChoice(computerNewChoice);
    }
  }, [userChoice]);

  return (
    <div>
      <h2>Player {playerNumber}</h2>
      <span>Choose an option</span>
      <div className="imagesContainer">
        {options.map((option) => (
          <Choice
            onClick={() => handleOnClickChoice(option.name)}
            src={option.src}
            alt={option.alt}
          />
        ))}
      </div>
      <div>
        {computerChoice && <span>Computer chose: {computerChoice}</span>}
      </div>

      <span className="round">{round}</span>
    </div>
  );
}

export default Game;

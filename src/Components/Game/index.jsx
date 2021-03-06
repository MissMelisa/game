import { useEffect, useState } from "react";

import Choice from "../Choice";
import GameResult from "../GameResult";

import "./styles.css";

const options = [
  {
    id: 0,
    name: "rock",
    src: "https://images.vexels.com/media/users/3/145826/isolated/preview/37a6335f8116ec5d233efd8019e2b2c4-round-rock-by-vexels.png",
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
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
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

function Game() {
  const [userChoice, setUserChoice] = useState();
  const [round, setRound] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setUserChoice();
    setRound();
    setComputerChoice();
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleOnClickChoice(choice) {
    setUserChoice(choice);

    setIsOpen(true);
  }

  useEffect(() => {
    if (userChoice) {
      const computerNewChoice = getComputerChoice();

      const result = obtainResult(userChoice.name, computerNewChoice.name);

      setRound(result);

      setComputerChoice(computerNewChoice);
    }
  }, [userChoice]);

  return (
    <div className="containerGame">
      <h2>Player 1</h2>
      <span>Choose an option</span>
      <div className="imagesContainer">
        {options.map((option) => (
          <Choice
            onClick={() => handleOnClickChoice(option)}
            image={option.src}
            alt={option.name}
          />
        ))}
      </div>
      <GameResult
        userChoice={userChoice}
        computerChoice={computerChoice}
        round={round}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Game;

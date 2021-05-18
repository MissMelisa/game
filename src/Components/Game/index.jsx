import { useEffect, useState } from "react";

import Modal from "react-modal";
import Choice from "../Choice";

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
  let computerChoice = options[Math.floor(Math.random() * 3)];
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
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleOnClickChoice(choice) {
    setUserChoice(choice);

    openModal();
  }

  useEffect(() => {
    if (userChoice) {
      const computerNewChoice = getComputerChoice();
      console.log(computerNewChoice);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Result"
      >
        <div>
          <span className="round">{round}</span>
          {computerChoice && (
            <div className="modalContainer">
              <div>
                <span>You chose:{userChoice.name}</span>
                <img
                  className="imageModal"
                  src={userChoice.src}
                  alt={userChoice.name}
                />
              </div>
              <span> VS</span>
              <div>
                <span>Computer chose: {computerChoice.name}</span>
                <img
                  className="imageModal"
                  src={computerChoice.src}
                  alt={computerChoice.name}
                />
              </div>
            </div>
          )}
        </div>
        <div className="buttonNewGame">
          <button onClick={closeModal}>New Game</button>
        </div>
      </Modal>
    </div>
  );
}

export default Game;

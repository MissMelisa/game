import Modal from "react-modal";

import "./styles.css";

function GameResult({
  modalIsOpen,
  closeModal,
  round,
  computerChoice,
  userChoice,
}) {
  return (
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
              <span className="choiceSpan">You chose:"{userChoice.name}"</span>
              <img
                className="imageModal"
                src={userChoice.src}
                alt={userChoice.name}
              />
            </div>
            <span className="spanVs"> VS</span>
            <div>
              <span className="choiceSpan">
                Computer chose: "{computerChoice.name}"
              </span>
              <img
                className="imageModal"
                src={computerChoice.src}
                alt={computerChoice.name}
              />
            </div>
          </div>
        )}
      </div>
      <div className="buttonContainer">
        <button className="buttonNewGame" onClick={closeModal}>
          New Game
        </button>
      </div>
    </Modal>
  );
}

export default GameResult;

import Modal from "react-modal";

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
  );
}

export default GameResult;

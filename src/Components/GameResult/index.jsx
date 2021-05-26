import Modal from "react-modal";
import SelectedChoice from "../SelectedChoice";

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
            <SelectedChoice player= 'User Choice: '  playerSelect={userChoice.name} alt={userChoice.name} image={userChoice.src} />
            <span className="spanVs"> VS</span>
            <SelectedChoice player='Computer Choice: 'playerSelect={computerChoice.name} alt={computerChoice.name} image={computerChoice.src}/>
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

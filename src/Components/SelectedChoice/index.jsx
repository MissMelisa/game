import "./styles.css";

function SelectedChoice({player, image, playerSelect}){return(<div>
              <span className="choiceSpan">{player}{playerSelect}"</span>
              <img
                className="imageModal"
                src={image}
                alt={playerSelect}
              />
            </div>)}
             export default SelectedChoice

import { useHistory } from "react-router";

import "./styles.css";

function HomePage() {
  const history = useHistory();

  function handleOnClickRedirect() {
    history.push("/game");
  }
  return (
    <div className="containerPage">
      <h1>Welcome!</h1>
      <img
        className="image"
        alt="logo"
        src="https://images-na.ssl-images-amazon.com/images/I/61QkvmvEdVL.png"
      />
      <button className="buttonStart" onClick={handleOnClickRedirect}>
        Start game
      </button>
    </div>
  );
}
export default HomePage;

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
        src="https://static.vecteezy.com/system/resources/previews/000/693/103/non_2x/rock-paper-scissors-vector-line-icons.jpg"
      />
      <button className="buttonStart" onClick={handleOnClickRedirect}>
        Start game
      </button>
    </div>
  );
}
export default HomePage;

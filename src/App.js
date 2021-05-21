import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import GamePage from "./Pages/GamePage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

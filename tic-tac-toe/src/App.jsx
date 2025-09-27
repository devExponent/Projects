import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActiveplayer] = useState("X");
  function handleSelectSquare() {
    setActiveplayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="Y" />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
      LOG
    </main>
  );
}

export default App;

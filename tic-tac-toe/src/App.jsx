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
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="Y" isActive={activePlayer === "0"} />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          selActivePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;

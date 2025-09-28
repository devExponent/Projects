import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActiveplayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, playerIndex) {
    setActiveplayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));

    setGameTurns((prevGameturns) => {
      let currentPlayer = "X";
      if (prevGameturns.length > 0 && prevGameturns[0].player === "X") {
        currentPlayer = "0";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: playerIndex }, player: currentPlayer },
        ...prevGameturns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="Y" isActive={activePlayer === "0"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log ActivePlayerTurns={gameTurns} />
    </main>
  );
}

export default App;

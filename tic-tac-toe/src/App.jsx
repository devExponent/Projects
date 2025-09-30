import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

let gameBoard = initialGameBoard;

for (const turn of gameTurns) {
  const { square, player } = turn;
  const { row, col } = square;
  gameBoard[row][col] = player;
}

function App() {
  // const [activePlayer, setActiveplayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, playerIndex) {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];
    }
    // setActiveplayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));

    setGameTurns((prevGameturns) => {
      const currentPlayer = deriveActivePlayer(prevGameturns);
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
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log ActivePlayerTurns={gameTurns} />
    </main>
  );
}

export default App;

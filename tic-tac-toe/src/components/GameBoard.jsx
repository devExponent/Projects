import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handlePlayer() {}
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerIndex) => (
              <li key={playerIndex}>
                <button onClick={handlePlayer}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

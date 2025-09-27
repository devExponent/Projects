import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handlePlayer(rowIndex, playerIndex) {
    setGameBoard((prevGameBoad) => {
      const updatedBoard = [
        ...prevGameBoad.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][playerIndex] = "X";
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerIndex) => (
              <li key={playerIndex}>
                <button
                  onClick={() => {
                    handlePlayer(rowIndex, playerIndex);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
const me = () => {
  <h1 onClick={() => djjddjdjjd()}></h1>;
};

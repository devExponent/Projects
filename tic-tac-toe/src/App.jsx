import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, handlePlayerName) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = handlePlayerName[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [handlePlayerName, setHandlePlayerName] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, handlePlayerName);
  function handleSelectSquare(rowIndex, playerIndex) {
    setGameTurns((prevGameturns) => {
      const currentPlayer = deriveActivePlayer(prevGameturns);
      const updatedTurns = [
        { square: { row: rowIndex, col: playerIndex }, player: currentPlayer },
        ...prevGameturns,
      ];
      return updatedTurns;
    });
  }
  function handlePlayerNewName(symbol, newName) {
    setHandlePlayerName((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [symbol]: newName,
      };
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            handleChange={handlePlayerNewName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            handleChange={handlePlayerNewName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver champion={winner} Rematch={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log ActivePlayerTurns={gameTurns} />
    </main>
  );
}

export default App;

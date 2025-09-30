import React from "react";

const GameOver = ({ champion }) => {
  return (
    <div id="game-over">
      <h>Game Over!</h>
      <>{champion}</>
      <button>Restart</button>
    </div>
  );
};

export default GameOver;

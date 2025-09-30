const GameOver = ({ champion }) => {
  return (
    <div id="game-over">
      <h>Game Over!</h>
      <>{champion}</>
      <button>Rematch!</button>
    </div>
  );
};

export default GameOver;

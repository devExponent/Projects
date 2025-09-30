const GameOver = ({ champion, Rematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{champion} Won!</p>
      <button onClick={Rematch}>Rematch!</button>
    </div>
  );
};

export default GameOver;

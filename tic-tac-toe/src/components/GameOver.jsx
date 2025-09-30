const GameOver = ({ champion, Rematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <>
        {champion && <p>{champion} Won!</p>}
        {!champion && <p>It's a Draw!</p>}
      </>
      <button onClick={Rematch}>Rematch!</button>
    </div>
  );
};

export default GameOver;

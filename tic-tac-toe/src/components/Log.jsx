const Log = ({ ActivePlayerTurns }) => {
  return (
    <>
      <ol id="log">
        {ActivePlayerTurns.map((playerTurns) => (
          <li key={`${playerTurns.square.row} ${playerTurns.square.col}`}>
            {playerTurns.player} selected {playerTurns.square.row},
            {playerTurns.square.col}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Log;

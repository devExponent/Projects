const Log = ({ ActivePlayerTurns }) => {
  return (
    <>
      <ol id="log">
        {ActivePlayerTurns.map((playerTurns) => {
          console.log(playerTurns);
          <li key={`${playerTurns.row} ${playerTurns.col}`}>
            {playerTurns.player} selected {playerTurns.square.row},{" "}
            {playerTurns.square.col}
          </li>;
        })}
      </ol>
    </>
  );
};

export default Log;

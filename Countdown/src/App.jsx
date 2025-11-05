import { useState, useRef } from "react";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  let playerName = useRef();
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <>
      <Player
        enterPlayerNames={enteredPlayerName}
        onSetName={handleClick}
        ref={playerName}
      />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pro Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;

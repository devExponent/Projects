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
        <TimerChallenge
          title="easy"
          targetTime={1}
          userName={enteredPlayerName}
        />
        <TimerChallenge
          title="Not easy"
          targetTime={5}
          userName={enteredPlayerName}
        />
        <TimerChallenge
          title="Getting tough"
          targetTime={10}
          userName={enteredPlayerName}
        />
        <TimerChallenge
          title="Pro Only"
          targetTime={15}
          userName={enteredPlayerName}
        />
      </div>
    </>
  );
}

export default App;

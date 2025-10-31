import React from "react";
import { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [startChallenge, setStartChallenge] = useState(false);

  function handleChallenge() {
    setStartChallenge(true);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleChallenge}>Start Challenge</button>
      </p>
      <p>{startChallenge ? "Time is running" : "Timer in Inactive"}</p>
    </section>
  );
};

export default TimerChallenge;

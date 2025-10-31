import React from "react";
import { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [startChallenge, setStartChallenge] = useState(false);
  const handleTimer = useRef(null);

  function handleChallengeStart() {
    setStartChallenge(true);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleChallengeStart}>Start Challenge</button>
      </p>
      <p>{startChallenge ? "Time is running" : "Timer in Inactive"}</p>
    </section>
  );
};

export default TimerChallenge;

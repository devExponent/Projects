import React from "react";
import { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const handleTimer = useRef();

  function handleChallengeStart() {
    setTimeStarted(true);
    handleTimer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
  }

  function StopChallenge() {
    clearTimeout(handleTimer);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      {timeExpired && <p>You Lost</p>}
      <p>
        <button onClick={timeStarted ? StopChallenge : handleChallengeStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p>{timeStarted ? "Time is running..." : "Timer in Inactive"}</p>
    </section>
  );
};

export default TimerChallenge;

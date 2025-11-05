import React from "react";
import { useState, useRef } from "react";
import Resultsmodal from "./Resultsmodal.jsx";
import Player from "./Player.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const handleTimer = useRef();
  const dialog = useRef();

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(handleTimer.current);

    dialog.current.open();
  }

  function handleChallengeStart() {
    handleTimer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function StopChallenge() {
    dialog.current.open();
    clearInterval(handleTimer.current);
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  return (
    <>
      <Resultsmodal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timeIsActive ? StopChallenge : handleChallengeStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Timer is running..." : "Timer in Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

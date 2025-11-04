import React from "react";
import { useState, useRef } from "react";
import Resultsmodal from "./Resultsmodal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const handleTimer = useRef();
  const dialog = useRef();

  function handleChallengeStart() {
    handleTimer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.clear();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function StopChallenge() {
    clearTimeout(handleTimer.current);
    setTimeStarted(false);
  }
  return (
    <>
      <Resultsmodal ref={dialog} targetTime={targetTime} result={timeExpired} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timeStarted ? StopChallenge : handleChallengeStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timeStarted ? "Time is running..." : "Timer in Inactive"}</p>
      </section>
    </>
  );
};

export default TimerChallenge;

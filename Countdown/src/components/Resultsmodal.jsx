import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const Resultsmodal = ({
  ref,
  targetTime,
  remainingTime,
  onClear,
  playerName,
}) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const Score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>{playerName ? `Hello ${playerName}` : "Unknown Entity"}</h2>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score is: {Score}</h2>}
      <p>
        Your target time was <strong> {targetTime}</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onClear}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Resultsmodal;

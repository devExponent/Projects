import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Resultsmodal = ({ ref, targetTime }) => {
  const dialog = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        clear() {
          dialog.current.showModal();
        },
      };
    },
    []
  );

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>You </h2>
      <p>
        Your target time was <strong> {targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Resultsmodal;

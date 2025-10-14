import React from "react";
import { useState } from "react";

const Handleinput = () => {
  const [handleInput, setHandleInput] = useState(false);
  const [NhandleInput, setNHandleInput] = useState(false);

  function monitor() {
    setHandleInput(true);
  }
  function Nmonitor() {
    setNHandleInput(true);
  }

  const see = handleInput;
  const Nsee = NhandleInput;
  return (
    <div>
      <h1 style={{ background: see ? "green" : Nsee ? "yellow" : "" }}>
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={monitor}>Yes</button>
        </li>
        <li>
          <button onClick={Nmonitor}>No</button>
        </li>
      </menu>
    </div>
  );
};

export default Handleinput;

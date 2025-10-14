import React from "react";
import { useState } from "react";

const Handleinput = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  function Changing(value, identifier) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  return (
    <ul>
      <li>
        <input
          type="text"
          name="email"
          onChange={(e) => Changing("email", e.target.value)}
        />
        <p>{enteredEmail}</p>

        <input
          type="text"
          name="text1"
          onChange={(e) => Changing("text1", e.target.value)}
        />
      </li>
    </ul>
  );
};

export default Handleinput;

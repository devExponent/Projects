import React from "react";
import { useState } from "react";

const Handleinput = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("fhhfhf");
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
        {enteredPassword}

        <input
          type="text"
          onChange={(e) => Changing("password", e.target.value)}
        />
      </li>
    </ul>
  );
};

export default Handleinput;

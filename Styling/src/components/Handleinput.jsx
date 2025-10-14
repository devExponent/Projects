import React from "react";

const Handleinput = () => {
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
          name="text5"
          onChange={(e) => Changing("text5", e.target.value)}
        />
        <p>{handleInput.text5}</p>
        <p>{handleInput.text1}</p>

        <input
          type="text"
          name="text1"
          onChange={(e) => Changing("text1", e.target.value)}
        />
        <input type="text" name="text2" />
        <input type="text" name="text3" />
        <input type="text" name="text4" />
      </li>
    </ul>
  );
};

export default Handleinput;

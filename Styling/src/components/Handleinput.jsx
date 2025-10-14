import React from "react";
import { useState } from "react";

const Handleinput = () => {
  const [handleInput, setHandleInput] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
  });

  function Changing(name, value) {
    setHandleInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <ul>
      <li>
        <input
          type="text"
          name="text5"
          value={handleInput.text5}
          onChange={(e) => Changing("text 5", e.target.value)}
        />
        <p>{handleInput.text5}</p>

        <input type="text" name="text1" />
        <input type="text" name="text2" />
        <input type="text" name="text3" />
        <input type="text" name="text4" />
      </li>
    </ul>
  );
};

export default Handleinput;

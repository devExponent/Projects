import { useState } from "react";

const userInput = ({ namer, onUserInput, text, check }) => {
  return (
    <>
      <div id="user-input">
        <input type="text" value={namer} onChange={onUserInput} name={check} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default userInput;

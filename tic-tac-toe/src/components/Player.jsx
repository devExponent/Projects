import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEdit() {
    setIsEditing((editing) => !editing);
  }
  function handleInput(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" onChange={handleInput} required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;

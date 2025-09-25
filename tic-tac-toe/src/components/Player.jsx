import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((editing) => !editing);
  }
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" value="fggf" required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;

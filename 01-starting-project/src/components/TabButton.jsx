import React from "react";

const TabButton = ({ children, onSelect }) => {
  return (
    <div>
      <li style={{ listStyleType: "none" }}>
        <button onClick={onSelect}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;

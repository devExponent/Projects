import React from "react";

const TabButton = ({ children, onSelect, selected }) => {
  return (
    <div>
      <li>
        <button className={selected ? "active" : null} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;

import React from "react";

const TabButton = ({ children }) => {
  return (
    <div>
      <li>
        <button>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;

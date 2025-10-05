import React from "react";

const UserInputs = () => {
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number" />
          </p>
          <p>
            <label>ANnual Investment</label>
            <input type="number" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected return</label>
            <input type="number" />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInputs;

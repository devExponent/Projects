import { useState } from "react";

const UserInputs = ({ userInput, setUserInput }) => {
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              name="initialInvestment"
              value={userInput.initialInvestment}
              onChange={setUserInput}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              name="annualInvestment"
              value={userInput.annualInvestment}
              onChange={setUserInput}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected return</label>
            <input
              type="number"
              required
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={setUserInput}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              name="duration"
              value={userInput.duration}
              onChange={setUserInput}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInputs;

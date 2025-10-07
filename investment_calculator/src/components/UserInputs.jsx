import { useState } from "react";

const UserInputs = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedHours: "",
    Duration: "",
  });

  function manageInput(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

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
              value={inputs.initialInvestment}
              onChange={manageInput}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected return</label>
            <input type="number" required />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" required />
          </p>
        </div>
      </div>
      <p></p>
      <h1>{inputs.initialInvestment}</h1>
    </section>
  );
};

export default UserInputs;

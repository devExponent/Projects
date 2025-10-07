import { useState } from "react";

const UserInputs = ({ inputs, dynamiChange }) => {
  // const [inputs, setInputs] = useState({
  //   initialInvestment: "",
  //   annualInvestment: "",
  //   expectedHours: "",
  //   Duration: "",
  // });

  // function manageInput(e) {
  //   const { name, value } = e.target;
  //   setInputs((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

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
              onChange={dynamiChange}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              name="annualInvestment"
              value={inputs.annualInvestment}
              onChange={dynamiChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected return</label>
            <input
              type="number"
              required
              name="expectedHours"
              value={inputs.expectedHours}
              onChange={dynamiChange}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              name="duration"
              value={inputs.duration}
              onChange={dynamiChange}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInputs;

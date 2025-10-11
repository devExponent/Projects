import { useState } from "react";

const userInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleUserInput = (name, value) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleUserInput("initialInvestment", e.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>initial Investment</label>
            <input type="number" />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" />
          </p>
        </div>
        <p>{userInput.initialInvestment}</p>
      </section>
    </>
  );
};

export default userInput;

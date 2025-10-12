const userInput = ({ onHandleInput, inputs }) => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={inputs.initialInvestment}
              onChange={(e) =>
                onHandleInput("initialInvestment", e.target.value)
              }
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={inputs.annualInvestment}
              onChange={(e) =>
                onHandleInput("annualInvestment", e.target.value)
              }
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={inputs.expectedReturn}
              onChange={(e) => onHandleInput("expectedReturn", e.target.value)}
              required
            />
          </p>

          <p>
            <label>Duration</label>
            <input
              type="number"
              value={inputs.duration}
              onChange={(e) => onHandleInput("duration", e.target.value)}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default userInput;

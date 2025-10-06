const UserInputs = ({ amount, dynamicChange }) => {
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={amount}
              onChange={dynamicChange}
            />
          </p>
          <p>
            <label>ANnual Investment</label>
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
    </section>
  );
};

export default UserInputs;

const userInput = ({ onHandleInput, inputValue, placeholder }) => {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={inputValue}
              onChange={onHandleInput}
              placeholder={placeholder}
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
      </section>
    </>
  );
};

export default userInput;

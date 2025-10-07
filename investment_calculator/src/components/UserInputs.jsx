import { useState } from "react";

const UserInputs = () => {
  const [change, setHandleChange] = useState("");
  const [chy, setChy] = useState("44");
  function changing(e) {
    setHandleChange(e.target.value);
    setChy(e.target.value);
  }
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number" required value={change} onChange={changing} />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" required value={chy} onChange={changing} />
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
      <p>{change}</p>
      <p>{chy}</p>
    </section>
  );
};

export default UserInputs;

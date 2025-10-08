import { useState } from "react";
import UserInputs from "./components/UserInputs";
import UserTable from "./components/UserTable";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 122,
    expectedReturn: 6,
    duration: 11,
  });

  function handleInvestment(e) {
    const { name, value } = e.target;
    setInvestment((prev) => ({
      ...prev,
      [name]: +value,
    }));
  }
  return (
    <>
      <UserInputs userInput={investment} setUserInput={handleInvestment} />
      <UserTable inputs={investment} />
    </>
  );
}

export default App;

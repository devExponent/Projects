import { useState } from "react";
import UserInputs from "./components/UserInputs";
import UserTable from "./components/UserTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 122,
    expectedHours: 6,
    duration: 10,
  });

  function handleInvestment(e) {
    const { name, value } = e.target;
    setInvestment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <UserInputs userInput={investment} setUserInut={handleInvestment} />
      <UserTable />
    </>
  );
}

export default App;

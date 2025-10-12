import { useState } from "react";
import UserInputs from "../src/components/userInput";
import InvestmentTable from "./components/InvestmentTable";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "11",
    annualInvestment: "13",
    expectedReturn: "14",
    duration: "17",
  });

  const handleUserInput = (name, value) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <UserInputs inputs={userInput} onHandleInput={handleUserInput} />
      <InvestmentTable input={userInput} />
    </>
  );
}

export default App;

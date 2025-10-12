import { useState } from "react";
import UserInputs from "../src/components/userInput";
import InvestmentTable from "./components/InvestmentTable";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  let validInput = userInput.duration >= 1;

  const handleUserInput = (name, value) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: +value,
    }));
  };

  return (
    <>
      <UserInputs inputs={userInput} onHandleInput={handleUserInput} />

      {validInput ? (
        <InvestmentTable input={userInput} />
      ) : (
        <p className="center">Duaration should be greater than 0</p>
      )}
    </>
  );
}

export default App;

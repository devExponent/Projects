import { useState } from "react";
import UserInputs from "../src/components/userInput";
import InvestmentTable from "./components/InvestmentTable";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "11",
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
      <UserInputs
        inputValue={userInput.initialInvestment}
        onHandleInput={(e) =>
          handleUserInput("initialInvestment", e.target.value)
        }
      />
      <InvestmentTable />
      <p>{userInput.initialInvestment}</p>
    </>
  );
}

export default App;

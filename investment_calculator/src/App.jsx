import { useState } from "react";
import UserInputs from "./components/UserInputs";
import UserTable from "./components/UserTable";

function findFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    console.log((factorial *= i));
    // console.log(i);
    // console.log(factorial);
  }

  // return factorial;
}

findFactorial(6); // 120

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 122,
    expectedReturn: 6,
    duration: 10,
  });

  let validInput = investment.duration >= 1;

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
      {validInput ? (
        <UserTable inputs={investment} />
      ) : (
        <p className="center">please enter a number greater than 0</p>
      )}
    </>
  );
}

export default App;

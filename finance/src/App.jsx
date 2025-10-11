import { useState } from "react";
import UserInput from "./components/userInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "10",
    annualInvestment: "11",
    expectedReturn: "26",
    duration: "100",
  });

  function handleUserInput(name, value) {
    // const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <UserInput
        namer={userInput.initialInvestment}
        check="initialInvestment"
        onUserInput={(e) =>
          handleUserInput("initialInvestment", e.target.value)
        }
        text={userInput.initialInvestment}
      />
      <UserInput />
      <UserInput />
      <UserInput />
      <button onClick={() => alert("hello")}>Hello</button>
    </>
  );
}

export default App;

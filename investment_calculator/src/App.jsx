import { useState } from "react";
import UserInputs from "./components/UserInputs";
import UserTable from "./components/UserTable";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedHours: "",
    Duration: "",
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
      <UserInputs inputs={investment} dynamiChange={handleInvestment} />

      <UserTable inputs={investment} />
    </>
  );
}

export default App;

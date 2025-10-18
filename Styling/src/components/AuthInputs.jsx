import { useState } from "react";
import Inputs from "./Inputs";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-full max-w-sm mx-auto p-8 bg-gradient-to-b from-stone-700 to-stone-800 rounded shadow-md">
      <div className="flex flex-col gap-4 mb-6">
        <Inputs
          label="Email"
          invalid={emailNotValid}
          // className={emailNotValid ? "invalid" : undefined}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Inputs
          label="Password"
          invalid={passwordNotValid}
          // className={passwordNotValid ? "invalid" : undefined}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>

      <div className="flex  justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

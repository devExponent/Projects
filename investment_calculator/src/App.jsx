import { useState } from "react";
// import Inputs from "./components/Inputs";
function App() {
  // return <Inputs />;
  const [data, setData] = useState("");
  function handleChange(event) {
    setData(event.target.value);
  }

  return (
    <>
      <input type="text" value={data} onChange={handleChange} />
      <h2>{data}</h2>
    </>
  );
}

export default App;

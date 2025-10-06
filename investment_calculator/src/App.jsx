import { useState } from "react";
function App() {
  const [item, setItems] = useState("");
  const [todo, setTodo] = useState([]);
  function handleChange(e) {
    setItems(e.target.value);
    console.log(item);
  }

  function Add() {
    setTodo((prev) => [...prev, item]);
    setItems("");
  }

  return (
    <>
      <div>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={Add}>Add to do</button>
        <h2>
          {todo.map((items, index) => (
            <li key={index}>{items}</li>
          ))}{" "}
        </h2>
      </div>
    </>
  );
}

export default App;

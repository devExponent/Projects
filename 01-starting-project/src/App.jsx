import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [dynamic, setDynamic] = useState("Please click a button");

  function handleClick(selectedButton) {
    setDynamic(selectedButton);
  }

  return (
    <main>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <div style={{ display: "flex" }}>
          <TabButton
            onSelect={() => {
              handleClick("Components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("JSX");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("Props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            onSelect={() => {
              handleClick("State");
            }}
          >
            State
          </TabButton>
        </div>
      </section>
      {dynamic}
    </main>
  );
}

export default App;

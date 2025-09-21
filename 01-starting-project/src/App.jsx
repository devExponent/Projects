import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
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
        <menu>
          <TabButton
            selected={selectedTopic === "components"}
            onSelect={() => {
              handleClick("components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            selected={selectedTopic === "jsx"}
            onSelect={() => {
              handleClick("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            selected={selectedTopic === "props"}
            onSelect={() => {
              handleClick("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            selected={selectedTopic === "state"}
            onSelect={() => {
              handleClick("state");
            }}
          >
            State
          </TabButton>
        </menu>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code} </code>
            </pre>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Section title="Examples" Styling={"examples"}>
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
      </Section>
    </>
  );
};

export default Examples;

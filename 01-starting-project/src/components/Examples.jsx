import React from "react";
import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  }

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs></Tabs>
        <menu>
          <TabButton
            selected={selectedTopic === "components"}
            onClick={() => {
              handleClick("components");
            }}
          >
            Components
          </TabButton>
          <TabButton
            selected={selectedTopic === "jsx"}
            onClick={() => {
              handleClick("jsx");
            }}
          >
            JSX
          </TabButton>
          <TabButton
            selected={selectedTopic === "props"}
            onClick={() => {
              handleClick("props");
            }}
          >
            Props
          </TabButton>
          <TabButton
            selected={selectedTopic === "state"}
            onClick={() => {
              handleClick("state");
            }}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </Section>
    </>
  );
};

export default Examples;

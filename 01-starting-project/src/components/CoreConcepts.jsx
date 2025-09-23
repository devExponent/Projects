import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => (
            <CoreConcept {...conceptItems} key={conceptItems.title} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CoreConcepts;

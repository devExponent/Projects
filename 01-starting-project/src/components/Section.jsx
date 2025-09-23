import React from "react";

const Section = ({ title, children, Styling }) => {
  return (
    <>
      <section id={Styling}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;

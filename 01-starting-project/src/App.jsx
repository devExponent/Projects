import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function CoreConcept({ image, title, textDescription }) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{textDescription}</p>
      </li>
    </>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

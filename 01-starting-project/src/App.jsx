import reactImage from "./assets/react-core-concepts.png";
import componentImg from "./assets/config.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function CoreConcept(props) {
  return (
    <>
      <li>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <p>{props.textDescription}</p>
      </li>
    </>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <>
      <header>
        <img src={reactImage} alt="React Logo" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
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
          <CoreConcept
            title="Components"
            textDescription="The core UI building block"
            image={componentImg}
          />
          <CoreConcept title="" tecxtDescription="" image={componentImg} />
          <CoreConcept title="" tecxtDescription="" image={componentImg} />
        </ul>
      </section>
    </div>
  );
}

export default App;

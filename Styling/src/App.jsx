import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import Handleinput from "./components/Handleinput.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>

      <Handleinput />
    </>
  );
}

import Inputs from "./components/Inputs";
function App() {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <div>
            <p></p>
            <Inputs />
          </div>
          <Inputs />
        </div>
        <div className="input-group">
          <Inputs />
          <Inputs />
        </div>
      </div>
    </>
  );
}

export default App;

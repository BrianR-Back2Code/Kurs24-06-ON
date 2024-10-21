import "./App.css";
import "./component/functions.js";

function App() {
  let myname = "Brian";
  return (
    <>
      <div>
        <h1>Willkommen bei meiner React App</h1>
        <h2>Hallo {myname}</h2>
        <h3 style={{ color: "red" }}>Rechnung 2 + 2 = {2 + 2}</h3>
        <button id="clickme">Click me</button>
        <button onClick={() => alert("You clicked the button")}>
          Show alert
        </button>
      </div>
    </>
  );
}

export default App;

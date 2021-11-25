import logo from "./logo.svg";
import "./App.css";

function App() {
  // let firstValue: string = "Many";
  // let firstValue: number = 5;
  let firstValue: boolean = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;

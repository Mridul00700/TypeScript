import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  // let firstValue: string = "Many";
  // let firstValue: number = 5;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3];
  // let firstValue: Array<string> = ["232", "23232", "sfasf"];

  // Tuple
  // let aTuple: [string, number] = ["dwd", 23];

  // enum Codes {
  //   first = 1,
  //   second = 2,
  // }

  // let firstName: any = "Manny";
  // // Void

  // const warnings = (): void => {
  //   console.log("warning");
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name="mridul" message="This is a simple message" />
      </header>
    </div>
  );
}

export default App;

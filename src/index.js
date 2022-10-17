import React from "react";
import ReactDOM from "react-dom";
import Histogram from "./Histogram";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Histogram />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

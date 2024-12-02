import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };
  return (
    <div>
      <h1>Kalkulator Sederhana</h1>

      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "C",
            "+",
          ].map((btn, i) => (
            <button
              key={i}
              className="button"
              onClick={() => (btn === "C" ? handleClear() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button className="button equal" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
      <p>@PRAKOM PERTAMA_WARDIMAN PERDIAN</p>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [input1, setInput1] = useState(""); // Operand pertama
  const [input2, setInput2] = useState(""); // Operand kedua
  const [operator, setOperator] = useState(""); // Operator yang dipilih
  const [result, setResult] = useState(""); // Hasil perhitungan

  const handleNumberClick = (value) => {
    if (operator) {
      // Jika operator sudah dipilih, tambahkan angka ke input2
      setInput2((prev) => prev + value);
    } else {
      // Jika belum ada operator, tambahkan angka ke input1
      setInput1((prev) => prev + value);
    }
  };

  const handleOperatorClick = (op) => {
    if (input1) setOperator(op); // Tetapkan operator jika input1 sudah ada
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setOperator("");
    setResult("");
  };

  const handleBackspace = () => {
    if (result) {
      setResult("");
    } else if (input2) {
      setInput2((prev) => prev.slice(0, -1));
    } else if (operator) {
      setOperator("");
    } else if (input1) {
      setInput1((prev) => prev.slice(0, -1));
    }
  };

  const handleEquals = () => {
    if (input1 && operator && input2) {
      try {
        const calculation = eval(`${input1}${operator}${input2}`);
        setResult(calculation.toString());
      } catch {
        setResult("Error");
      }
    }
  };
  return (
    <div>
      <h1>Kalkulator Sederhana</h1>

      <div className="calculator">
        <div className="display">{input1}</div>
        <div className="display">{operator}</div>
        <div className="display">{input2}</div>
        <div className="display" style={{ width: "100%" }}>
          {result ? `Result ${result}` : "Result 0"}
        </div>
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
            "+",
          ].map((btn, i) => (
            <button
              key={i}
              className="button"
              onClick={() =>
                isNaN(btn) ? handleOperatorClick(btn) : handleNumberClick(btn)
              }
            >
              {btn}
            </button>
          ))}
          <button className="button" onClick={handleBackspace}>
            ⌫
          </button>
          <button className="button" onClick={handleClear}>
            C
          </button>
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

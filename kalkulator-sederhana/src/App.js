import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  };

  const handleDivision = () => {
    if (parseFloat(input2) !== 0) {
      setResult(parseFloat(input1) / parseFloat(input2));
    } else {
      setResult("Error: Division by zero");
    }
  };

  const handleReset = () => {
    setInput1("");
    setInput2("");
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <h1>Kalkulator Sederhana</h1>
      <div className="input-container">
        <input
          type="number"
          placeholder="Masukkan angka pertama"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Masukkan angka kedua"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleAddition}>Tambah</button>
        <button onClick={handleSubtraction}>Kurang</button>
        <button onClick={handleMultiplication}>Kali</button>
        <button onClick={handleDivision}>Bagi</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {result !== null && (
        <div className="result-container">
          <h2>Hasil: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

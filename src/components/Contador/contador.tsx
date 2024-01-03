import React from "react";
import { useState } from "react";
import "./contador.css";

const Contador: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  let incrementar = () => {
    setCount((count) => count + 1);
  };
  let decrementar = () => {
    setCount((count) => count - 1);
  };

  let resetear = () => {
    setCount((count) => (count = 0));
  };
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="container-buttons">
          <button onClick={incrementar}>+</button>
          <button onClick={decrementar}>-</button>
          <button onClick={resetear}>Borrar</button>
        </div>
      </div>
    </>
  );
};

export default Contador;

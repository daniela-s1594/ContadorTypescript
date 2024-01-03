import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="container-buttons">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => setCount((count) => count - 1)}>-</button>

          <button onClick={() => setCount((count) => (count = 0))}>
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

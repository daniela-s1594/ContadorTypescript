import { useState, FC } from "react";
import { ToastContainer, toast } from "react-toastify";

const Calculadora: FC = () => {
  const [primerNumero, setPrimerNumero] = useState<number | "" | null>(null);
  const [segundoNumero, setSegundoNumero] = useState<number | "" | null>(null);
  const [resultado, setResultado] = useState<number | null>(null);
  const [numeroSelecionado, setNumeroSelecionado] = useState<number | null>(
    null
  );

  const numeros = Array.from({ length: 10 }, (_, i) => i);

  const handleNumeroClick = (number: number) => {
    if (numeroSelecionado === 1) {
      setPrimerNumero(number);
    } else if (numeroSelecionado === 2) {
      setSegundoNumero(number);
    }
  };

  const handleOperacion = (op: string) => {
    switch (op) {
      case "+":
        setResultado(primerNumero + segundoNumero);
        break;
      case "-":
        setResultado(primerNumero - segundoNumero);
        break;
      case "*":
        setResultado(primerNumero * segundoNumero);
        break;
      case "/":
        if (segundoNumero != 0) {
          setResultado(primerNumero / segundoNumero);
        } else {
          toast.error("División por cero");
        }
        break;
      case "%":
        setResultado(primerNumero % segundoNumero);
        break;
      case "^":
        setResultado(primerNumero ** segundoNumero);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <input
        type="number"
        placeholder="Primer número"
        value={primerNumero}
        readOnly
      />
      <input
        type="number"
        placeholder="Segundo número"
        value={segundoNumero}
        readOnly
      />
      <button onClick={() => handleOperacion("+")}>+</button>
      <button onClick={() => handleOperacion("-")}>-</button>
      <button onClick={() => handleOperacion("*")}>*</button>
      <button onClick={() => handleOperacion("/")}>/</button>
      <button onClick={() => handleOperacion("%")}>%</button>
      <button onClick={() => handleOperacion("^")}>^</button>
      {numeros.map((number) => (
        <button key={number} onClick={() => handleNumeroClick(number)}>
          {number}
        </button>
      ))}
      <p>{resultado}</p>
    </div>
  );
};

export default Calculadora;

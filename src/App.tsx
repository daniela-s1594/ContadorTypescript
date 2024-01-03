import { useState, FC } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Contador from "./components/Contador/contador.tsx";
import "./App.css";
import Calculadora from "./components/Calculadora/Calculadora.tsx";

const App: FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/Contador" element={<Contador />} />
      </Routes>
    </Router>
  );
};

export default App;

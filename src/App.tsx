import { FC } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contador from "./components/Contador/contador.tsx";
import "./App.css";
import MusicPlayer from "./components/musicPlayer/musicPlayer.tsx";

const App: FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Contador />} />
        <Route path="/musicPlayer" element={<MusicPlayer/>} />
      </Routes>
    </Router>
  );
};

export default App;

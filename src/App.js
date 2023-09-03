import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

import HistoryWord from "./components/HistoryWord";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/word/:w" element={<HistoryWord />} />
      </Routes>
    </div>
  );
};

export default App;

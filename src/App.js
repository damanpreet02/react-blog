import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import Food from "./components/Navbar/Food";
import Cars from "./components/Navbar/Cars";
// REACT PROJECT
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/food" element={<Food/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

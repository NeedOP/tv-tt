import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om" element={<About />} />
          <Route path="/pris" element={<Pricing />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

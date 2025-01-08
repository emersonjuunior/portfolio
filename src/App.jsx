import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

// components
import Header from "./components/Header.jsx";
import StarsParticles from "./components/StarParticles.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <StarsParticles id="particles"/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

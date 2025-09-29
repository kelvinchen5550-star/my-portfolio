import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

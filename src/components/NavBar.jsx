import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <Logo />
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}



export default NavBar;

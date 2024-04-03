import { Link } from "react-router-dom";
import { useRef } from "react";
const Navbar = () => {
  const navRef = useRef();

  return (
    <nav ref={navRef}>
      <Link to="/mapa" className="nav-bar">
        Mapa
      </Link>
      <Link to="/galeria-obiektow" className="nav-bar">
        Galeria obiektów
      </Link>
      <Link to="/ciekawostki" className="nav-bar">
        Ciekawostki
      </Link>
      <Link to="/dodaj-swoj-obiekt" className="nav-bar">
        Dodaj swój obiekt
      </Link>
      <Link to="/idea-projektu" className="nav-bar-last">
        Idea projektu
      </Link>
    </nav>
  );
};

export default Navbar;

import NewPlace from "./icons/NewPlace";
import AbadonPlace from "./icons/AbadonPlace";
import Bike from "./icons/Bike";
import AbadonCars from "./icons/AbadonCars";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Legenda = () => {
  const navRef = useRef();
  return (
    <div className="legenda" ref={navRef}>
      <p className="legenda-title">Oznaczenia</p>
      <div className="legenda-sekcja">
        <Bike />
        <p className="legenda-p">Zapomniane rowery</p>
      </div>
      <div className="legenda-sekcja">
        <AbadonPlace />
        <p className="legenda-p">Zapomniane miejsca</p>
      </div>
      <div className="legenda-sekcja">
        <AbadonCars />
        <p className="legenda-p">Zapomniane samochody</p>
      </div>
      <div className="legenda-sekcja">
        <NewPlace />
        <p className="legenda-p">Nowy obiekt</p>
      </div>
      <ul className="legenda-linki">
        <li>
          <Link to="/mapa" className="nav-bar">
            Mapa
          </Link>
        </li>
        <li>
          <Link to="/galeria-obiektow" className="nav-bar">
            Galeria obiektów
          </Link>
        </li>
        <li>
          <Link to="/ciekawostki" className="nav-bar">
            Ciekawostki
          </Link>
        </li>
        <li>
          <Link to="/dodaj-swoj-obiekt" className="nav-bar">
            Dodaj swój obiekt
          </Link>
        </li>
        <li>
          <Link to="/idea-projektu" className="nav-bar-last">
            Idea projektu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Legenda;

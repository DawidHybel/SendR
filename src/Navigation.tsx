import NewPlace from "./icons/NewPlace";
import AbadonPlace from "./icons/AbadonPlace";
import Bike from "./icons/Bike";
import AbadonCars from "./icons/AbadonCars";
import { useRef, RefObject } from "react";
import { Link } from "react-router-dom";
type NavigationProps = {};
const Navigation: React.FC<NavigationProps> = () => {
  const navRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  return (
    <div className="navigation" ref={navRef}>
      <p className="navigation-title">Oznaczenia</p>
      <div className="navigation-section">
        <Bike />
        <p className="navigation-p">Zapomniane rowery</p>
      </div>
      <div className="navigation-section">
        <AbadonPlace />
        <p className="navigation-p">Zapomniane miejsca</p>
      </div>
      <div className="navigation-section">
        <AbadonCars />
        <p className="navigation-p">Zapomniane samochody</p>
      </div>
      <div className="navigation-section">
        <NewPlace />
        <p className="navigation-p">Nowy obiekt</p>
      </div>
      <ul className="navigation-links">
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

export default Navigation;

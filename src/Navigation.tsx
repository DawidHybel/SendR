import NewPlace from "./icons/NewPlace";
import AbadonPlace from "./icons/AbadonPlace";
import Bike from "./icons/Bike";
import AbadonCars from "./icons/AbadonCars";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <aside ref={navRef}>
      <section>
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
      </section>
      <nav>
        <ul>
          <li>
            <Link to="/mapa">Mapa</Link>
          </li>
          <li>
            <Link to="/galeria-obiektow">Galeria obiektów</Link>
          </li>
          <li>
            <Link to="/ciekawostki">Ciekawostki</Link>
          </li>
          <li>
            <Link to="/dodaj-swoj-obiekt">Dodaj swój obiekt</Link>
          </li>
          <li>
            <Link to="/idea-projektu">Idea projektu</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;

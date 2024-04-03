import React from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Dodany import
import "./App.css";
import Mapa from "./Mapa";
import Test from "./Test";
import Obiekt from "./Obiekt";
import GaleriaObiektow from "./GaleriaObiektow";
import Ciekawostki from "./ciekawostki";
import Formularz from "./Dodajswojobiekt";

function Home() {
  return (
    <div>
      <Link to="/mapa">
        <div className="home-tlo">
          <div className="home-block">
            <svg
              className="home-ikona-x"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M10 10H14V14H10V10ZM18 18H14V14H18V18ZM22 22H18V18H22V22ZM26 22H22V26H18V30H14V34H10V38H14V34H18V30H22V26H26V30H30V34H34V38H38V34H34V30H30V26H26V22ZM30 18V22H26V18H30ZM34 14V18H30V14H34ZM34 14V10H38V14H34Z"
                fill="white"
              />
            </svg>

            <h1 className="h1-test">Czym jest ta strona</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mapa" element={<Mapa />} />
        <Route path="Test" element={<Test />} />
        <Route path="galeria-obiektow" element={<GaleriaObiektow />} />
        <Route path="galeria-obiektow/:id" element={<Obiekt />} />
        <Route path="ciekawostki" element={<Ciekawostki />} />
        <Route path="dodaj-swoj-obiekt" element={<Formularz />} />
      </Routes>
    </Router>
  );
}

export default App;

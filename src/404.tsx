import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Nopage = () => {
  const location = useLocation();
  return (
    <main className="nopage">
      <h1>
        Niestety nie ma podstrony o adresie : {location.pathname.substring(1)}
      </h1>
      <Link className="group-objects-button" to={`/mapa/`}>
        Zacznij od nowa
      </Link>
    </main>
  );
};
export default Nopage;

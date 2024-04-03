import { Link } from "react-router-dom";
import objData from "./data.json";
import BackArrow from "./icons/BackArrow";
import LocationIcon from "./icons/LocationIcon";
const GaleriaObiektow = () => {
  return (
    <div>
      <BackArrow />
      <h1 className="galeria-tytul padding-lef">Galeria obiektów</h1>
      <div className="galeria-wszystkie">
        {objData.features.map((obj) => {
          return (
            <div className="galeria-single" key={obj.properties.ID}>
              <img
                className="img-sqr"
                src={obj.properties.ZDJECIE}
                alt={obj.properties.NAME}
              ></img>

              <p className="marker-p">{obj.properties.NAME} </p>
              <div className="galeria-wspol">
                <LocationIcon />
                <Link
                  className="goooglemaps-link"
                  to={obj.properties.CORDINATES}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="marker-pozycja">
                    {obj.geometry.coordinates[0]}
                    &nbsp; &nbsp;
                    {obj.geometry.coordinates[1]}
                  </p>
                </Link>
              </div>
              <Link
                className="galeria-button"
                to={`/galeria-obiektow/${obj.properties.ID}`}
              >
                Obejrzyj obiekt
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GaleriaObiektow;

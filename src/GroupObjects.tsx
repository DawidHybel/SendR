import { Link } from "react-router-dom";
import objData from "./data.json";
import BackArrow from "./icons/BackArrow";
import LocationIcon from "./icons/LocationIcon";
const GroupObjects = () => {
  return (
    <div>
      <BackArrow />
      <h1 className="padding-left-extra">Galeria obiektów</h1>
      <div className="group-objects">
        {objData.features.map((obj) => {
          return (
            <div className="single-object" key={obj.properties.ID}>
              <img
                className="img-sqr"
                src={obj.properties.PHOTO}
                alt={obj.properties.NAME}
              ></img>

              <p className="marker-p">{obj.properties.NAME} </p>
              <div className="group-objects-cordinates">
                <LocationIcon />
                <Link
                  className="goooglemaps-link"
                  to={obj.properties.CORDINATES}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="marker-cordinates">
                    {obj.geometry.CORDINATES[0]}
                    &nbsp; &nbsp;
                    {obj.geometry.CORDINATES[1]}
                  </p>
                </Link>
              </div>
              <Link
                className="group-objects-button"
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

export default GroupObjects;

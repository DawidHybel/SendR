import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import MapStyle from "./MapStyle";
import MobileMenu from "./MobileMenu";
import objData from "./data.json";
import { Link } from "react-router-dom";
import LocationIcon from "./icons/LocationIcon";
function Map() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const [activeMarker, setActiveMarker] = useState<null | number>(null);

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <main className="Map">
        <div className="full-width">
          <MobileMenu></MobileMenu>{" "}
        </div>
        {isLoaded ? (
          <GoogleMap
            center={{ lat: 50.064798843229305, lng: 19.935917076631288 }}
            zoom={13}
            options={{ styles: MapStyle }}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100%" }}
          >
            {objData.features.map((obj) => (
              <MarkerF
                key={obj.properties.ID}
                position={{
                  lat: obj.geometry.CORDINATES[0],
                  lng: obj.geometry.CORDINATES[1],
                }}
                icon={obj.properties.ICON}
                onClick={() => handleActiveMarker(obj.properties.ID)}
              >
                {activeMarker === obj.properties.ID ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <section className="location-marker">
                      <img
                        className="location-marker-photo"
                        src={obj.properties.MAINIMAGE}
                        alt={obj.properties.NAME}
                      ></img>
                      <div className="col-2">
                        <p className="marker-p">{`${obj.properties.NAME}`}</p>

                        <div className="marker-group">
                          <LocationIcon></LocationIcon>
                          <Link
                            className="goooglemaps-link"
                            to={obj.properties.CORDINATES}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="marker-cordinates">
                              {obj.geometry.CORDINATES[1]} <br />
                              {obj.geometry.CORDINATES[0]}
                            </p>{" "}
                          </Link>
                        </div>
                        <div className="marker-group">
                          <svg
                            className="avatar-icon"
                            width="32"
                            height="32"
                            viewBox="0 0 32 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 0H10V4H6V16H10V4H22V0ZM22 16H10V20H22V16ZM22 4H26V16H22V4ZM0 28H4V24H28V28H4V36H28V28H32V40H0V28Z"
                              fill="white"
                            />
                          </svg>

                          <p className="marker-nickname">
                            {" "}
                            {obj.properties.AUTOR}
                          </p>
                        </div>

                        <Link
                          className="marker-button"
                          to={`/galeria-obiektow/${obj.properties.ID}`}
                        >
                          Zobacz obiekt
                        </Link>
                      </div>
                    </section>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            ))}
          </GoogleMap>
        ) : null}
      </main>
    </Fragment>
  );
}
export default Map;
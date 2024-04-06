import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import objData from "./data.json";
import { Link } from "react-router-dom";
import BackArrow from "./icons/BackArrow";
import LocationIcon from "./icons/LocationIcon";
const SingleObject = () => {
  const { id } = useParams();
  const object = objData.features.find(
    (obj) => String(obj.properties.ID) === id
  );

  useEffect(() => {
    if (!object) {
      return;
    }

    const handleMouseDown = () => {
      const clickAlert = document.querySelector(".click-alert");
      if (clickAlert) {
        clickAlert.classList.add("hidden");
      }
    };

    const handleMouseUp = () => {
      const clickAlert = document.querySelector(".click-alert");
      if (clickAlert) {
        clickAlert.classList.remove("hidden");
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [object]);

  if (!object) {
    return <div>Nie znaleziono objectu o ID: {id}</div>;
  }

  function Model(props) {
    const { scene } = useGLTF(object.properties.MODEL);
    return <primitive object={scene} {...props}></primitive>;
  }

  function Loader() {
    return (
      <Html center>
        <span className="loader">🌀</span>
        <p>Wczytywanie</p>
      </Html>
    );
  }

  return (
    <div className="parent">
      <BackArrow />
      <div className="col-1">
        <div className="marker-group">
          <h1 className=" padding-left-extra padding-right-extra">
            {object.properties.NAME}
          </h1>
          <div className="icon-padding-left">
            <LocationIcon />
          </div>
          <Link
            to={object.properties.CORDINATES}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              {object.geometry.CORDINATES[0]} <br />
              {object.geometry.CORDINATES[1]}
            </p>
          </Link>
        </div>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 30 }}
          style={{
            height: "80vh",
            width: "auto",
            padding: "0px 20px 20px 20px",
          }}
        >
          <Suspense fallback={<Loader />}>
            <PresentationControls
              speed={1.5}
              global
              zoom={3}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage>
                <Model scale={0.12}></Model>
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
        <p className="click-alert">Naciśnij i przytrzymaj, aby przybliżyć</p>
        <p className="object-description"> {object.properties.INFO}</p>
      </div>
      <div className="photo-galery" key={object.properties.ID}>
        <img
          className="img-sqr small"
          src={object.properties.PHOTO1}
          alt="zdjecie"
        />
        <img
          className="img-sqr small"
          src={object.properties.PHOTO2}
          alt="zdjecie"
        />
        <img
          className="img-sqr small"
          src={object.properties.PHOTO3}
          alt="zdjecie"
        />
        <img
          className="img-sqr small"
          src={object.properties.PHOTO4}
          alt="zdjecie"
        />
        <img
          className="img-sqr small"
          src={object.properties.PHOTO5}
          alt="zdjecie"
        />
        <img
          className="img-sqr small"
          src={object.properties.PHOTO6}
          alt="zdjecie"
        />
      </div>
    </div>
  );
};

export default SingleObject;

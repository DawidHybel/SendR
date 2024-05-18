import React, { useEffect, useRef, WheelEvent, useState } from "react";
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
  const [scale, setScale] = useState(100);
  const object = objData.features.find(
    (obj) => String(obj.properties.ID) === id
  );

  const canvasRef = useRef(null);

  // useRef
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const handleMouseWheel = (event: WheelEvent<HTMLCanvasElement>) => {
      setScale((state) => {
        let newScale = state - event.deltaY;
        if (newScale <= 0) {
          newScale = 100;
        }
        return newScale;
      });
    };

    canvas.addEventListener("mousewheel", handleMouseWheel);

    return () => {
      canvas.removeEventListener("mousewheel", handleMouseWheel);
    };
  }, []);

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
    return (
      <div className="nopage">
        <h1>Nie znaleziono objectu o ID: {id}</h1>
        <Link className="group-objects-button" to={`/mapa/`}>
          Zacznij od nowa
        </Link>
      </div>
    );
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
  function handlemouseadd() {
    setScale((state) => {
      let newScale = state + 100;
      if (newScale <= 0) {
        newScale = 100;
      }
      return newScale;
    });
  }
  function handlemousesub() {
    setScale((state) => {
      let newScale = state - 100;
      if (newScale <= 0) {
        newScale = 100;
      }
      return newScale;
    });
  }

  return (
    <main className="parent">
      <BackArrow />
      <section className="col-1">
        <header className="marker-group">
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
        </header>
        <div>
          <Canvas
            onMouseOver={() => {
              document.body.style.overflow = "hidden";
            }}
            onMouseOut={() => {
              document.body.style.overflow = "";
            }}
            dpr={[1, 2]}
            shadows
            camera={{ fov: 30 }}
            style={{
              height: "80vh",
              width: "auto",
              padding: "0px 20px 20px 20px",
            }}
            ref={canvasRef}
          >
            <Suspense fallback={<Loader />}>
              <PresentationControls
                speed={1.5}
                global
                zoom={3}
                polar={[-0.1, Math.PI / 4]}
              >
                <Stage>
                  <Model scale={scale}></Model>
                </Stage>
              </PresentationControls>
            </Suspense>
          </Canvas>
          <div className="zoom-button-object-group">
            <button className="zoom-button-object" onClick={handlemouseadd}>
              +
            </button>
            <button className="zoom-button-object" onClick={handlemousesub}>
              {" "}
              -{" "}
            </button>
          </div>
        </div>
        <p className="click-alert">
          Naciśnij i przytrzymaj, aby przybliżyć lub użyj scrolla
        </p>
        <p className="object-description"> {object.properties.INFO}</p>
      </section>
      <figure className="photo-galery">
        {object.properties.PHOTOS.map((photo, index) => (
          <img
            key={index}
            className="img-sqr small"
            src={photo}
            alt="zdjecie"
          />
        ))}
      </figure>
    </main>
  );
};

export default SingleObject;

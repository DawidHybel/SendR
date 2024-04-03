import Legenda from "./Legenda";
import { useState } from "react";
const Test = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="side-nav">
      <div
        className={`hamburger-menu ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        {showMenu ? (
          <svg
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M6 34H42M6 24H42M6 14H42"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <Legenda></Legenda>
      </div>
    </div>
  );
};

export default Test;

import { useNavigate } from "react-router-dom";
const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="48"
      viewBox="0 0 36 64"
      fill="none"
      onClick={() => navigate(-1)}
      className="strzalka"
    >
      <path
        d="M36 0V9.14286H27V0H36ZM18 18.2857V9.14286H27V18.2857H18ZM9 27.4286V18.2857H18V27.4286H9ZM9 36.5714H0V27.4286H9V36.5714ZM18 45.7143V36.5714H9V45.7143H18ZM18 45.7143H27V54.8571H18V45.7143ZM36 64V54.8571H27V64H36Z"
        fill="white"
      />
    </svg>
  );
};
export default BackArrow;

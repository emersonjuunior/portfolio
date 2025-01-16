import "./NextButton.css";
import { Link } from "react-router-dom";

const NextButton = ({ name, link }) => {
  return (
    <div id="next-button-container">
      <Link to={link}>
        <button id="next-button">
          Ver {name} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default NextButton;

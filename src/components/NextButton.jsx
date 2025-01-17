import "./NextButton.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const NextButton = ({ name, link }) => {
  return (
    <div id="next-button-container">
      <motion.div 
      initial={{opacity: .5, x: -50}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: .8}}
      viewport={{once: true}}
      >
      <Link to={link}>
        <button id="next-button">
          Ver {name} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
      </motion.div>
    </div>
  );
};

export default NextButton;

import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Front-end.", "React."],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 150,
  });

  return (
    <section id="home">
      <div id="main-container">
        <div id="main-title-container">
          <p id="greetings">olá, o meu nome é</p>
          <h2>Emerson Junior</h2>
          <h1>
            Desenvolvedor <span>{text}</span>
            <Cursor />
          </h1>
        </div>
        <div id="main-description">
          <p>
            Eu sou um desenvolvedor front-end (e ocasionalmente back-end)
            especializado na construção e design de experiências digitais.
            Atualmente, busco novas oportunidades.
          </p>
          <button className="primary-button" id="main-button">
            Ver portfolio
          </button>
          <motion.img
            src="/rocket.gif"
            alt="Foguete"
            style={{
              width: "100px",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, 200, -200, 150, -100, 0], // Movimento horizontal irregular
              y: [0, -100, 150, -50, 100, 0], // Movimento vertical em arco
              rotate: [0, 360], // Rotação completa
            }}
            transition={{
              repeat: Infinity, // Loop infinito
              duration: 10, // Duração total do ciclo
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div id="decoration-container">
        <div className="binary-numbers-1">
          <div className="binary-1">
            <span className="b1">0</span>
            <span className="b2">0</span>
            <span className="b3">1</span>
          </div>
          <div className="binary-2">
            <span className="b4">1</span>
            <span className="b5">0</span>
            <span className="b6">1</span>
          </div>
        </div>
        <div className="binary-numbers-2">
          <div className="binary-3">
            <span className="b7">0</span>
            <span className="b8">1</span>
            <span className="b9">0</span>
          </div>
          <div className="binary-4">
            <span className="b10">1</span>
            <span className="b11">1</span>
            <span className="b12">0</span>
          </div>
        </div>
        <div className="binary-numbers-3">
          <div className="binary-5">
            <span className="b13">0</span>
            <span className="b14">1</span>
            <span className="b15">1</span>
          </div>
          <div className="binary-6">
            <span className="b16">1</span>
            <span className="b17">1</span>
            <span className="b18">0</span>
          </div>
        </div>
        <div className="moon">
          <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="300"
              cy="300"
              r="220"
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="16, 22"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;

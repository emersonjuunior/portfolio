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
            Eu sou um <span>desenvolvedor front-end</span> (com conhecimentos em
            back-end) apaixonado na construção de experiências digitais.
            Atualmente, busco <span>novas oportunidades</span>.
          </p>
          <button className="primary-button" id="main-button">
            Ver portfolio
          </button>
        </div>
      </div>
      <div id="decoration-container">
        <div className="moon-container">
          <img src="/moon.png" alt="Lua" id="moon" />
          <motion.img
            src="/rocket.gif"
            alt="Foguete"
            id="rocket-animation"
            animate={{
              x: [0, 100, 0, -150, -400, -350, -220, -100, 100, 0],
              y: [0, -150, -225, -170, -50, -100, 0, 30, 130, 200, 0],
              rotate: [0, -70, -130, -100, -200, -220, -260, -270, -350, -360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          />
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
              <span className="b17">0</span>
              <span className="b18">0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

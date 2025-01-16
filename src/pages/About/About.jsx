import "./About.css";
import { useTypeAnimation } from "../../hooks/useTypeAnimation";
import NextButton from "../../components/NextButton";

const About = () => {
  const text = useTypeAnimation("obre", "350");

  return (
    <section id="about">
      <div id="about-container">
        <div id="me-picture">
          <img src="/profile.jpg" alt="" />
          <div className="border-img" id="border-1"></div>
          <div className="border-img" id="border-2"></div>
        </div>
      </div>
      <div id="about-description">
        <div id="about-h1-container">
          <h1 className="section-h1">S{text}</h1>
        </div>
        <div id="about-text">
          <p className="about-p">
            <span className="first-letter">M</span>eu interesse por tecnologia
            sempre existiu desde a infância, quando passava horas refletindo
            sobre o que havia por trás dos softwares presentes no meu dia a dia.
            A ideia de buscar soluções inteligentes e inovadoras para problemas
            já existentes continua me motivando até hoje.
          </p>
          <p className="about-p">
            <span className="first-letter">A</span>tualmente, estou cursando
            Análise e Desenvolvimento de Sistemas na PUC Minas. Meu foco está no
            desenvolvimento front-end, criando componentes reutilizáveis e
            interfaces intuitivas e responsivas. Também possuo experiência em
            integração de APIs, metodologias ágeis (SCRUM), além de
            conhecimentos em banco de dados.
          </p>
          <p className="about-p" id="p-3">
            <span className="first-letter">M</span>eu objetivo é estar sempre em
            constante evolução, aprendendo novas habilidades e aprimorando as
            que possuo, para o desenvolvimento e eficiência de sistemas de
            qualidade e para uma melhor experiência do usuário.
          </p>
          <div id="about-btn-container">
            <button className="primary-button" id="about-button">
              <i className="download fa-solid fa-file-arrow-down"></i> Baixar
              Resumo
            </button>
            <NextButton name={"Habilidades"} link={"/skills"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

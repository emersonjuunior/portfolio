import "./Projects.css";
import NextButton from "../../components/NextButton";
import { useState, useEffect } from "react";
import { projects } from "../../data/projects";
import { useFilterTechnologies } from "../../hooks/useFilterTechnologies";
import { useTypeAnimation } from "../../hooks/useTypeAnimation";

const Projects = () => {
  const [category, setCategory] = useState("Todos");
  const [activeButton, setActiveButton] = useState("1");
  const [isVisible, setIsVisible] = useState(true);
  const text = useTypeAnimation("rojetos", "250");

  const changeCategory = (value) => {
    setIsVisible(false);

    setTimeout(() => {
      setCategory(value);
      setIsVisible(true);
    }, 600);
  };

  return (
    <section id="projects">
      <div className="section-title">
        <h1 className="section-h1">P{text}</h1>
      </div>
      <div id="category-buttons-container">
        <button
          className={
            activeButton === "1"
              ? "button-active primary-button"
              : "primary-button"
          }
          onClick={() => {
            changeCategory("Todos");
            setActiveButton("1");
          }}
        >
          Todos
        </button>
        <button
          className={
            activeButton === "2"
              ? "button-active primary-button"
              : "primary-button"
          }
          onClick={() => {
            changeCategory("Fullstack");
            setActiveButton("2");
          }}
        >
          Fullstack
        </button>
        <button
          className={
            activeButton === "3"
              ? "button-active primary-button"
              : "primary-button"
          }
          onClick={() => {
            changeCategory("Landing Page");
            setActiveButton("3");
          }}
        >
          Landing Page
        </button>
        <button
          className={
            activeButton === "4"
              ? "button-active primary-button"
              : "primary-button"
          }
          onClick={() => {
            changeCategory("Jogos");
            setActiveButton("4");
          }}
        >
          Jogos
        </button>
      </div>
      <div
        className="project-cards-container"
        id={isVisible ? "active-animation" : ""}
      >
        {projects.map((project, index) => {
          const arrCategories = useFilterTechnologies(project.technologies);
          if (!project.categories.includes(category)) {
            return;
          }
          return (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <div
                  className="project-image-background"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <a className="project-button" href={project.deploy} target="_blank">
                  Acessar
                </a>
              </div>
              <div className="project-info-container">
                <div className="card-top-container">
                  <div className="project-title-wrapper">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="acess-icons-container">
                    <a
                      href={`https://github.com/emersonjuunior/${project.github}`}
                      target="_blank"
                    >
                      <i className="acess-icon fa-brands fa-github"></i>
                    </a>
                    <a href={project.deploy} target="_blank">
                      <i className="acess-icon fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
                <div className="project-description">{project.description}</div>
              </div>
              <div className="line"></div>
              <div className="project-icons">
                {arrCategories.includes("1") && (
                  <i className="devicon-html5-plain"></i>
                )}
                {arrCategories.includes("2") && (
                  <i className="devicon-css3-plain"></i>
                )}
                {arrCategories.includes("3") && (
                  <i className="devicon-javascript-plain"></i>
                )}
                  {arrCategories.includes("4") && (
                  <i className="devicon-typescript-plain"></i>
                )}
                {arrCategories.includes("5") && (
                  <i className="devicon-csharp-plain"></i>
                )}
                {arrCategories.includes("6") && (
                  <i className="devicon-dotnetcore-plain"></i>
                )}
                {arrCategories.includes("7") && (
                  <i className="devicon-react-original"></i>
                )}
                {arrCategories.includes("8") && (
                  <i className="devicon-firebase-plain"></i>
                )}
                {arrCategories.includes("9") && (
                  <i className="devicon-tailwindcss-plain"></i>
                )}
              
              </div>
            </div>
          );
        })}
      </div>
      <NextButton name={"Contatos"} link={"/contacts"} />
    </section>
  );
};

export default Projects;

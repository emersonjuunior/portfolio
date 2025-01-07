import "./Projects.css";
import { useState } from "react";
import { projects } from "../data/projects";
import { useFilterTechnologies } from "../hooks/useFilterTechnologies";

const Projects = () => {
  const [category, setCategory] = useState("Todos");

  return (
    <section>
      <h2>Projetos</h2>

      <button onClick={() => setCategory("Todos")}>Todos</button>
      <button onClick={() => setCategory("Fullstack")}>Fullstack</button>
      <button onClick={() => setCategory("Landing Page")}>Landing Page</button>
      <button onClick={() => setCategory("Jogos")}>Jogos</button>

      <div id="project-cards-container">
        {projects.map((project, index) => {
          const arrCategories = useFilterTechnologies(project.technologies);
          if(!project.categories.includes(category)){
            return;
          }
          return (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <div
                  className="project-image-background"
                  style={{ backgroundImage: `url(${projects[0].image})` }}
                ></div>
                <button className="project-button">Acessar</button>
              </div>
              <div className="project-info-container">
                <div className="project-title-wrapper">
                  <h3>{project.name}</h3>
                </div>
                <div className="project-description">{project.description}</div>
              </div>
              <div className="line"></div>
              <div className="project-icons">
                {arrCategories.includes("1") && (
                  <i className="icon devicon-html5-plain"></i>
                )}
                {arrCategories.includes("2") && (
                  <i className="icon devicon-css3-plain"></i>
                )}
                {arrCategories.includes("3") && (
                  <i className="icon devicon-javascript-plain"></i>
                )}
                {arrCategories.includes("4") && (
                  <i className="icon devicon-csharp-plain"></i>
                )}
                {arrCategories.includes("5") && (
                  <i className="icon devicon-dotnetcore-plain"></i>
                )}
                {arrCategories.includes("6") && (
                  <i className="icon devicon-react-original"></i>
                )}
                {arrCategories.includes("7") && (
                  <i className="icon devicon-firebase-plain"></i>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

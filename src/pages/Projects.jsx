import "./Projects.css";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div className="project-card">
        <div className="project-image-container">
          <div
            className="project-image-background"
            style={{ backgroundImage: `url(${projects[0].image})` }}
          ></div>
          <button className="project-button">Acessar</button>
        </div>
        <div className="project-title-wrapper">
          <h3>Psiconexão</h3>
        </div>
        <div className="project-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam
          quam eaque commodi placeat dolore maxime similique impedit illo soluta
          a tempore vero magnam doloremque fugiat repudiandae alias deleniti
          obcaecati, quos harum.
        </div>
        <div className="line"></div>
        <div className="project-icons">
          <i className="icon devicon-html5-plain"></i>
          <i className="icon devicon-css3-plain"></i>
          <i className="icon devicon-javascript-plain"></i>
          <i className="icon devicon-csharp-plain"></i>
          <i className="icon devicon-dotnetcore-plain"></i>
        </div>
      </div>
    </section>
  );
};

export default Projects;

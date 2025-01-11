import "./Languages.css";
import { languages } from "../data/languages";

const Languages = () => {
  return (
    <section id="languages">
      <h2>Tecnologias</h2>
      <div id="languages-container">
        {languages.map((language) => (
          <div className="languages-card">
            <div className="bg"></div>
            <div className="blob"></div>
            <div className="card-icon-wrapper">
            <i className={language.icon}></i>
            </div>
            <p className="tech-name">{language.name}</p>

            <div className="hidden-card">
              <div className="back-icon"><i className={language.backIcon}></i></div>
              <div className="tech-back-name">{language.name}</div>
              <div className="tech-description">{language.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

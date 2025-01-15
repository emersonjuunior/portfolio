import "./Languages.css";
import { languages } from "../data/languages";

const Languages = () => {
  return (
    <div id="languages">
        <h3 className="subtitle">
          Aqui estão algumas <span>tecnologias</span> que utilizo durante o{" "}
          <span>desenvolvimento</span> de aplicações:
        </h3>
      
      <div id="languages-container">
        {languages.map((language, index) => (
          <div key={index} className="languages-card">
            <div className="bg"></div>
            <div className="card-icon-wrapper">
              <i className={language.icon}></i>
            </div>
            <p className="tech-name">{language.name}</p>

            <div className="hidden-card">
              <div className="back-icon">
                <i className={language.backIcon}></i>
              </div>
              <div className="tech-back-name">{language.name}</div>
              <div className="tech-description">{language.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;

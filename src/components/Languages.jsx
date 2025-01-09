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

            <i className={language.icon}></i>
            <p className="tech-name">{language.name}</p>

            <div className="hidden">{language.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

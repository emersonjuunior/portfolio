import "./Skills.css";
import Languages from "../../components/Languages";
import Slider from "../../components/Slider";

const Skills = () => {
  return (
    <section>
      <div className="section-title">
        <h1 className="section-h1">Habilidades</h1>
      </div>
      <Languages />
      <Slider />
    </section>
  );
};

export default Skills;

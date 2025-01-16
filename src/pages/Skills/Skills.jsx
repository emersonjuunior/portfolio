import Languages from "../../components/Languages";
import Slider from "../../components/Slider";
import NextButton from "../../components/NextButton";
import { useTypeAnimation } from "../../hooks/useTypeAnimation";

const Skills = () => {
  const text = useTypeAnimation("abilidades", "140");
  return (
    <section id="skills">
      <div className="section-title">
        <h1 className="section-h1">H{text}</h1>
      </div>
      <Languages />
      <Slider />
      <NextButton name={"Projetos"} link={"/projects"} />
    </section>
  );
};

export default Skills;

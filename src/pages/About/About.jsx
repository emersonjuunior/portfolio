import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div id="about-container">
        <div id="me-picture">
          <img src="/javascript.jpg" alt="" />
          <div className="border-img" id="border-1"></div>
          <div className="border-img" id="border-2"></div>
        </div>
      </div>
      <div id="about-description">
        <div id="about-h1-container">
          <h1 className="section-h1">Sobre</h1>
        </div>
        <div id="about-text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            assumenda aperiam explicabo voluptates repellendus delectus qui
            facere blanditiis distinctio, vitae nobis magnam ipsa totam placeat
            aspernatur consequatur quasi eius sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rem
            blanditiis ab, autem nesciunt, minus eaque animi nemo optio sunt
            reprehenderit? Rem eius in cumque odit autem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            exercitationem impedit, nostrum nihil velit iste voluptatibus
            necessitatibus doloremque numquam. Est, cupiditate, minima aut
            facilis quos iusto doloribus eligendi ipsam error officiis quibusdam
            fuga adipisci!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

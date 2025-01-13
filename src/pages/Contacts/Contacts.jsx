import "./Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts">
      <div id="rocket-animation-container">
        <div id="contacts-title-container">
          <h1 className="section-h1">Contatos</h1>
        </div>
        <div id="contacts-subtitle-container">
          <h2>
            Atualmente estou em busca de <span>novas oportunidades</span>! Ficarei muito
            feliz em <span>receber seu contato</span>, seja para dúvidas, feedbacks ou até
            mesmo para conversar :)
          </h2>
        </div>
        <div id="rocket-container">
          <img id="rocket-gif" src="/rocket.gif" alt="Foguete" />
        </div>
      </div>
      <div id="solar-system-container">
        <div id="planets-container-1">
          <div className="planet planet-1">
            <div className="planet-wrapper-1">
              <img src="/mercury.png" alt="Mercúrio" />
              <div className="social-media-container">
                <i className="footer-icon acess-icon fa-brands fa-github"></i>
                <span className="social-media">@emersonjuunior</span>
              </div>
            </div>
          </div>
          <div className="planet planet-2">
            <div className="planet-wrapper-2">
              <img src="/earth.png" alt="Terra" />
              <div className="social-media-container">
                <i className="footer-icon acess-icon fa-brands fa-linkedin"></i>
                <span className="social-media">Emerson Junior</span>
              </div>
            </div>
          </div>
        </div>
        <div id="sun-container">
          <img id="sun-img" src="/sun.png" alt="Sol" />
          <div id="radiant-animation"></div>
        </div>
        <div id="planets-container-2">
          <div className="planet planet-3">
            <div className="planet-wrapper-3">
              <img src="/saturn.png" alt="Saturno" />
              <div className="social-media-container">
                <i className="footer-icon acess-icon fa-brands fa-whatsapp"></i>
                <span className="social-media">(33) 99850-7083</span>
              </div>
            </div>
          </div>
          <div className="planet planet-4">
            <div className="planet-wrapper-4">
              <img src="/jupiter.png" alt="Jupiter" />

              <div className="social-media-container">
                <i class="fa-regular fa-envelope"></i>
                <span className="social-media">
                  emerson.c.junior.115@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

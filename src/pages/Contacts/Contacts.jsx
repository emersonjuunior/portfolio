import "./Contacts.css";
import { useLike } from "../../hooks/useLike";
import { useState, useEffect } from "react";
import Notification from "../../components/Notification";

const Contacts = () => {
  const { addLike, removeLike, getLike, likes, error } = useLike();
  const [activeLike, setActiveLike] = useState(false);
  const [notification, setNotification] = useState(false);
  const [copyNotification, setCopyNotification] = useState(false)

  const closeNotification = () => {
    setNotification(false);
  };

  useEffect(() => {
    getLike("portfolio");
  }, []);

  const handleLike = async () => {
    setActiveLike((prev) => !prev);
    if (activeLike) {
      await removeLike("portfolio", likes - 1);
    } else {
      await addLike("portfolio", likes + 1);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 5000);
    }
  };

  const handleCopy = () => {
    const textToCopy = "emerson.c.junior.115@gmail.com";

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyNotification(true)
    });
  };

  return (
    <section id="contacts">
      <div id="rocket-animation-container">
        <div id="contacts-title-container">
          <h1 className="section-h1">Contatos</h1>
        </div>
        <div id="contacts-subtitle-container">
          <h3 className="subtitle">
            Atualmente estou em busca de <span>novas oportunidades</span>!
            Ficarei muito feliz em <span>receber seu contato</span>, seja para
            dúvidas, feedbacks ou até mesmo para conversar :)
          </h3>
        </div>
        <div id="rocket-container">
          <button
            className="primary-button"
            id="like-portfolio-btn"
            onClick={handleLike}
          >
            Curtir Portfolio
            <i
              className={
                activeLike
                  ? "fa-solid fa-heart like-heart"
                  : "fa-regular fa-heart like-heart"
              }
            ></i>
            <span>{likes}</span>
          </button>
          <img id="rocket-gif" src="/rocket.gif" alt="Foguete" />
        </div>
      </div>
      <div id="solar-system-container">
        <div id="planets-container-1">
          <div className="planet planet-1">
            <a href="https://github.com/emersonjuunior" target="_blank">
              <div className="planet-wrapper planet-wrapper-1">
                <img src="/mercury.png" alt="Mercúrio" className="planet-img" />
                <div className="social-media-container">
                  <i className="footer-icon acess-icon fa-brands fa-github"></i>
                  <span className="social-media">@emersonjuunior</span>
                </div>
              </div>
            </a>
          </div>
          <div className="planet planet-2">
            <a
              href="https://www.linkedin.com/in/emerson-jrr/"
              target="_blank"
            >
              <div className="planet-wrapper planet-wrapper-2">
                <img src="/earth.png" alt="Terra" className="planet-img" />
                <div className="social-media-container">
                  <i className="footer-icon acess-icon fa-brands fa-linkedin"></i>
                  <span className="social-media">Emerson Junior</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="sun-container">
          <img id="sun-img" src="/sun.png" alt="Sol" />
          <div id="radiant-animation"></div>
        </div>
        <div id="planets-container-2">
          <div className="planet planet-3">
            <a
              href="https://api.whatsapp.com/send/?phone=553398507083&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <div className="planet-wrapper planet-wrapper-3">
                <img src="/saturn.png" alt="Saturno" className="planet-img" />
                <div className="social-media-container">
                  <i className="footer-icon acess-icon fa-brands fa-whatsapp"></i>
                  <span className="social-media">(33) 99850-7083</span>
                </div>
              </div>
            </a>
          </div>
          <div className="planet planet-4">
            <div
              className="planet-wrapper planet-wrapper-4"
              onClick={handleCopy}
            >
              <img src="/jupiter.png" alt="Jupiter" className="planet-img" />
              <div className="social-media-container">
                <i className="fa-regular fa-envelope"></i>
                <span className="social-media">
                  emerson.c.junior.115@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notification && (
        <Notification
          msg={"Obrigado pelo like :)"}
          closeNotification={closeNotification}
        />
      )}
      {copyNotification && (
        <Notification
          msg={"Email copiado!"}
          closeNotification={closeNotification}
        />
      )}
    </section>
  );
};

export default Contacts;

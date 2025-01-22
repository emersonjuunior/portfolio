import "./SocialFooter.css";

const SocialFooter = () => {
  return (
    <div id="social-footer">
      <a
        href="https://api.whatsapp.com/send/?phone=553398507083&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <i className="footer-icon acess-icon fa-brands fa-whatsapp"></i>
      </a>
      <a href="https://github.com/emersonjuunior" target="_blank">
        <i className="footer-icon acess-icon fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/emerson-jrr/" target="_blank">
        <i className="footer-icon acess-icon fa-brands fa-linkedin"></i>
      </a>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialFooter;

import {} from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">
          <img src={logo} alt="Rawash logo image" />
        </h2>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/rawashmohamed2/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/mohamed-rawash"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohamed-rawash-61b30a217/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <p className="footer__copy">
          <span>&#169;</span> RawashPortfolio. All rigths reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

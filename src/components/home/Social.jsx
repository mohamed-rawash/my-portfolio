import {} from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        rel="noreferrer"
        href="https://www.instagram.com/_mohamed_rawash/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/mohamed-rawash"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/mohamed-rawash-61b30a217/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;

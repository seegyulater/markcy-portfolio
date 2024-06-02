import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/PETRAS_RESUME2024.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {/* for user, to choose if dark mode or white mode */}
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile Picture of Markcy Petras"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Markcy
          <br />
          Petras
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://x.com/encyklopedyuh" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/seegyulater" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-cristopher-petras-4b2b2721a/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover" >
            CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

/*Hero jsx file*/
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import RESUME from "../../assets/PETRAS_CV2025.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        {" "}
        {/* information template for markcy */}
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Markcy Petras"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
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
            href="https://www.linkedin.com/in/mark-cristopher-petras-4b2b2721a/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          A Computer Science Student at Pamantasan ng Lungsod ng Maynila.
        </p>
        <a href={RESUME} download>
          <button className="hover">RESUME</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

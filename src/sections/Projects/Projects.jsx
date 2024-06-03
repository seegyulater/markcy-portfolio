// deploy of project
import styles from "../Projects/ProjectsStyles.module.css";
import cosmic from "../../assets/cosmic.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://github.com/dssrts/COSMIC_SCRIPT" target="_blank">
          <img className="hover" src={cosmic} alt="Cosmic Logo" />
          <h3>Cosmic Script</h3>
          <p>A Compiler Project on PLM</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;

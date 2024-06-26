// deploy of project
import styles from "../Projects/ProjectsStyles.module.css";
import cosmic from "../../assets/cosmic.png";
import Voxify from '../../assets/voxify.png'
import PLMapp from "../../assets/plmapp.png";
import ams from "../../assets/ams.png";
import enjoyce from "../../assets/enjoyce-logo.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cosmic}
          link="https://github.com/dssrts/COSMIC_SCRIPT"
          h3="Cosmic Script"
          p="A Compiler Project on PLM"
        />
        <ProjectCard
          src={Voxify}
          link="https://github.com/seegyulater/voxify-workshop"
          h3="Voxify"
          p="A Voice Generator on Voxify"
        />
        <ProjectCard
          src={PLMapp}
          link="https://github.com/plmmobileapp-v2/plmappv2"
          h3="PLM App"
          p="A Mobile Development Project on PLM"
        />
        <ProjectCard
          src={ams}
          link="https://github.com/dssrts/Academic-Management-System"
          h3="Academic Management System"
          p="A Software Engineering Project on PLM"
        />
        <ProjectCard
          src={enjoyce}
          link="https://github.com/HolyShaq/Enjoyce"
          h3="Enjoyce Travel and Tours"
          p="A Mobile Development on Enjoyce Travel and Tours"
        />
      </div>
    </section>
  );
}

export default Projects;

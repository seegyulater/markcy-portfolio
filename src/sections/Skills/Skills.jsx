import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='Node' />
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Angular' />
        <SkillList src={checkMarkIcon} skill='Vue' />
        <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
        <SkillList src={checkMarkIcon} skill='Python' />
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='Github' />
        <SkillList src={checkMarkIcon} skill='Firebase' />
        <SkillList src={checkMarkIcon} skill='MariaDB' />
        <SkillList src={checkMarkIcon} skill='MySQL' />
      </div>
    </section>
  );
}

export default Skills;

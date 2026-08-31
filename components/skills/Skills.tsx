import Reveal from "../utils/Reveal";
import SectionHeader from "../utils/SectionHeader";
import styles from "./skills.module.scss";
import { FaCode, FaBook } from "react-icons/fa6";
import { skills } from "@/constants";
import { useState } from "react";
import Image from "next/image";

interface PropsIcon {
  name: string;
  icon: string;
  handleClick: () => void;
  isActive: boolean;
}
interface PropsInfo {
  title: string;
  image: string;
  description: string;
}
const SvgSkills = ({ name, icon, handleClick, isActive }: PropsIcon) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${styles.skillButton} cursor-pointer`}
    aria-label={`Show ${name} skill details`}
    aria-pressed={isActive}
  >
    <span
      className={`${styles.skillChip} chip ${isActive ? styles.activeSkill : ""}`}
    >
      <Image src={icon} alt="" width={32} height={32} sizes="32px" />
    </span>
  </button>
);
const InfoSkills = ({ description, image, title }: PropsInfo) => {
  return (
    <>
      <div className={styles.info}>
        <Reveal>
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className={styles.image}
            sizes="(max-width: 480px) 96px, 150px"
          />
        </Reveal>
      </div>
      <Reveal width="100%">
        <p className={styles.infoText}>
          <span>{title}</span> - {description}
        </p>
      </Reveal>
    </>
  );
};
const Skills = () => {
  const [stackInfo, setStackInfo] = useState({
    icon: skills[0].icon,
    title: skills[0].title,
    description: skills[0].description,
  });
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader title="Skills" dir="r" />
      <div className={styles.skills}>
        <div className={styles.infoTitle}>
          <Reveal>
            <h4>
              <FaBook size="2.2rem" color="var(--brand)" />
              <span>What i use</span>
            </h4>
          </Reveal>
          <div className={styles.infoContent}>
            <InfoSkills
              key={stackInfo.title}
              description={stackInfo.description}
              image={stackInfo.icon}
              title={stackInfo.title}
            />
          </div>
        </div>
        <div className={styles.stats}>
          <Reveal>
            <div className={styles.statColumn}>
              <h4>
                <FaCode size="2.2rem" color="var(--brand)" />
                <span>Stack</span>
              </h4>
              <div className={styles.statGrid}>
                {skills.map(({ id, name, icon, description, title }) => (
                  <SvgSkills
                    key={id}
                    name={name}
                    icon={icon}
                    handleClick={() =>
                      setStackInfo({ icon, title, description })
                    }
                    isActive={title === stackInfo.title}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
}

interface PropsInfo {
  title: string;
  image: string;
  description: string;
}

const SvgSkills = ({ name, icon }: PropsIcon) => (
  <span className={`${styles.skillChip} chip`}>
    <img src={icon} alt={name} width={32} height={32} loading="lazy" />
  </span>
);

const InfoSkills = ({ description, image, title }: PropsInfo) => {
  return (
    <>
      <div className={`${styles.info}`}>
        <Reveal>
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className={styles.image}
            loading="eager"
          />
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.infoText}>{description}</p>
      </Reveal>
    </>
  );
};

const Skills = () => {
  const [stackInfo, setStackInfo] = useState({
    icon: "",
    title: "",
    description: "",
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
          <div className="flex gap-2">
            <InfoSkills
              description={skills[0].description}
              image={skills[0].icon}
              title={skills[0].title}
              key={1}
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
                {skills.map(({ id, name, icon }) => (
                  <SvgSkills key={id} name={name} icon={icon} />
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

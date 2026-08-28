import React from "react";
import SectionHeader from "../utils/SectionHeader";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./about.module.scss";
import Reveal from "../utils/Reveal";
import Socials from "../navigations/Socials";
import ProfileCard from "../ProfileCard";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I am a Full-Stack Developer passionate about building modern web,
              mobile, and AI-powered applications. I create responsive and
              scalable digital experiences using React, Next.js, React Native,
              and Expo, with a focus on clean design, performance, and
              usability.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              My expertise covers both frontend and backend development,
              allowing me to build complete applications from intuitive
              interfaces to robust APIs and databases. I work with Node.js,
              PostgreSQL, and MongoDB to develop reliable and maintainable
              solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I also have a strong interest in Artificial Intelligence, Computer
              Vision, and interactive 3D experiences. I explore technologies
              like Three.js, Blender and modern AI tools to create innovative
              applications that solve real-world problems and deliver engaging
              user experiences.
            </p>
          </Reveal>

          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Links</span>
                <FaArrowRight />
              </div>
              <Socials />
            </div>
          </Reveal>
        </div>
        <div className={styles.profileCardSlot}>
          <Reveal width="100%" overflow="visible">
            <div className={styles.profileCardReveal}>
              <ProfileCard
                className={styles.profileCard}
                name="Abu Solihin Alhakim"
                title="Full-Stack Developer"
                handle="fhkimm_"
                status="Available"
                avatarUrl="/assets/card-profile.png"
                showUserInfo
                enableTilt={false}
                enableMobileTilt={false}
                details={[
                  { label: "Nama", value: "Abu Solihin Alhakim" },
                  { label: "Profesi", value: "Full-Stack Developer" },
                  { label: "Stack", value: "Next.js, React Native, NestJS" },
                  { label: "Lokasi", value: "Indonesia" },
                ]}
                iconUrl="/assets/iconpattern.svg"
                behindGlowEnabled={false}
                innerGradient="radial-gradient(circle at 50% 0%, rgba(190, 99, 249, 0.34), transparent 34%), linear-gradient(145deg, rgba(35, 35, 35, 0.96) 0%, rgba(17, 17, 17, 0.98) 48%, rgba(8, 8, 8, 1) 100%)"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

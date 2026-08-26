import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Profile from "./Profile";

const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`} id="hero">
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Hakim
              <span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <span>Web</span> & <span>Mobile Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              Full-Stack Developer passionate about building modern web, mobile,
              and 3D experiences with <span>Next.js</span>, <span>React</span>,{" "}
              <span>React Native</span>(Expo), <span>NestJS</span>/
              <span>Express</span>, <span>Blender</span> and more. Always
              learning new technologies and turning ideas into meaningful
              digital experiences. Looking for a developer to build your
              project?
            </p>
          </Reveal>
          <Reveal>
            <Link href="#contact" aria-label="Go to contact">
              <button className={styles.contactButton}>Contact</button>
            </Link>
          </Reveal>
        </div>
      </div>

      <Profile />
    </section>
  );
};

export default Hero;

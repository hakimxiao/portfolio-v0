"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [selected, setSelected] = useState("hero");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-wrapper[id]"),
    );

    if (!sections.length) {
      return;
    }

    let animationFrame: number | null = null;

    const updateSelectedSection = () => {
      animationFrame = null;

      const hashSectionId = window.location.hash.slice(1);
      const hashSection = sections.find((section) => section.id === hashSectionId);

      if (hashSection && Math.abs(hashSection.getBoundingClientRect().top) < 2) {
        setSelected(hashSection.id);
        return;
      }

      const viewportFocusPoint = window.innerHeight * 0.45;
      let activeSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= viewportFocusPoint) {
          activeSection = section.id;
        } else {
          break;
        }
      }

      setSelected(activeSection);
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateSelectedSection);
      }
    };

    updateSelectedSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleLogoClick = () => {
    setSelected("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.sideBar}
      >
        <Link href="/#hero" className={styles.logo} onClick={handleLogoClick}>
          AS<span>.</span>
        </Link>

        <SideBarLink
          href="/#about"
          label="About"
          ariaLabel="About me"
          onClick={() => setSelected("about")}
          selected={selected}
          delay={0.1}
          key={1}
        />

        <SideBarLink
          href="/#skills"
          label="Skills"
          ariaLabel="My tech stacks"
          onClick={() => setSelected("skills")}
          selected={selected}
          key={2}
          delay={0.2}
        />

        <SideBarLink
          href="/#projects"
          label="Projects"
          ariaLabel="My projects"
          onClick={() => setSelected("projects")}
          selected={selected}
          key={3}
          delay={0.3}
        />

        <SideBarLink
          href="/#experience"
          label="Exp."
          ariaLabel="My experience"
          onClick={() => setSelected("experience")}
          selected={selected}
          key={4}
          delay={0.4}
        />

        <SideBarLink
          href="/#certification"
          label="Certif."
          ariaLabel="My certifications"
          onClick={() => setSelected("certification")}
          selected={selected}
          key={5}
          delay={0.5}
        />

        <SideBarLink
          href="/#contact"
          label="Contact"
          ariaLabel="Let's contact me"
          onClick={() => setSelected("contact")}
          selected={selected}
          key={6}
          delay={0.6}
        />
      </motion.nav>
    </div>
  );
};

export default SideBar;

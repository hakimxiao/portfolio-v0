"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import SideBarLink from "./SideBarLink";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiBriefcase,
  FiAward,
  FiMail,
} from "react-icons/fi";

const SideBar = () => {
  const [selected, setSelected] = useState("hero");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-wrapper[id]"),
    );

    if (!sections.length) return;

    let animationFrame: number | null = null;

    const updateSelectedSection = () => {
      animationFrame = null;

      const hashSectionId = window.location.hash.slice(1);
      const hashSection = sections.find(
        (section) => section.id === hashSectionId,
      );

      if (
        hashSection &&
        Math.abs(hashSection.getBoundingClientRect().top) < 2
      ) {
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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.sideBar}
      >
        <Link
          href="/#hero"
          className={styles.logo}
          onClick={handleLogoClick}
          aria-label="Home"
        >
          <FiHome size={18} strokeWidth={2.2} />
        </Link>

        <SideBarLink
          href="/#about"
          icon={<FiUser size={18} strokeWidth={2.2} />}
          ariaLabel="About me"
          onClick={() => setSelected("about")}
          selected={selected}
          delay={0.1}
        />

        <SideBarLink
          href="/#skills"
          icon={<FiCode size={18} strokeWidth={2.2} />}
          ariaLabel="My tech stacks"
          onClick={() => setSelected("skills")}
          selected={selected}
          delay={0.2}
        />

        <SideBarLink
          href="/#projects"
          icon={<FiFolder size={18} strokeWidth={2.2} />}
          ariaLabel="My projects"
          onClick={() => setSelected("projects")}
          selected={selected}
          delay={0.3}
        />

        <SideBarLink
          href="/#experience"
          icon={<FiBriefcase size={18} strokeWidth={2.2} />}
          ariaLabel="My experience"
          onClick={() => setSelected("experience")}
          selected={selected}
          delay={0.4}
        />

        <SideBarLink
          href="/#certification"
          icon={<FiAward size={18} strokeWidth={2.2} />}
          ariaLabel="My certifications"
          onClick={() => setSelected("certification")}
          selected={selected}
          delay={0.5}
        />

        <SideBarLink
          href="/#contact"
          icon={<FiMail size={18} strokeWidth={2.2} />}
          ariaLabel="Contact me"
          onClick={() => setSelected("contact")}
          selected={selected}
          delay={0.6}
        />
      </motion.nav>
    </div>
  );
};

export default SideBar;

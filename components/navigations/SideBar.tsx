import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const option = {
      threshold: 0.3,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, option);
    sections.forEach((section: Element) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.sideBar}
      >
        <Link href="/" className={styles.logo}>
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
          href="/#certification"
          label="Certif."
          ariaLabel="My certifications"
          onClick={() => setSelected("certification")}
          selected={selected}
          key={4}
          delay={0.4}
        />

        <SideBarLink
          href="/#contact"
          label="Contact"
          ariaLabel="Let's contact me"
          onClick={() => setSelected("contact")}
          selected={selected}
          key={5}
          delay={0.5}
        />
      </motion.nav>
    </div>
  );
};

export default SideBar;

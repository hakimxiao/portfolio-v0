import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const option = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, option);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <Link href="/" className={styles.logo}>
          AS<span>.</span>
        </Link>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "about" ? styles.selected : ""}`}
            href="/#about"
            onClick={() => setSelected("about")}
            aria-label="About me"
          >
            About
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "experience" ? styles.selected : ""}`}
            href="/#experience"
            onClick={() => setSelected("experience")}
            aria-label="My experience"
          >
            Exp.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "stacks" ? styles.selected : ""}`}
            href="/#stacks"
            onClick={() => setSelected("stacks")}
            aria-label="My tech stacks"
          >
            Skills
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "projects" ? styles.selected : ""}`}
            href="/#projects"
            onClick={() => setSelected("projects")}
            aria-label="My projects"
          >
            Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "certification" ? styles.selected : ""}`}
            href="/#certification"
            onClick={() => setSelected("certification")}
            aria-label="My certifications"
          >
            Certif.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            className={`${styles.sideBarLink} ${selected === "contacts" ? styles.selected : ""}`}
            href="/#contacts"
            onClick={() => setSelected("contacts")}
            aria-label="My contacts"
          >
            Contacts
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default SideBar;

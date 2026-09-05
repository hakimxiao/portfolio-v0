import { motion } from "framer-motion";
import { TbFileCvFilled, TbDownload } from "react-icons/tb";
import styles from "./navbar.module.scss";
import Socials from "./Socials";

const NavBar = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.headingLeft}>
        <Socials />
      </div>

      <div className={styles.headingButtons}>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="https://cvdesignr.com/p/ENo6L3KKgxMMG5e"
            target="_blank"
            rel="nofollow"
            title="Resume"
          >
            <button className={styles.outlineButton} aria-label="View Resume">
              <p>CV</p>
              <TbFileCvFilled size="2.4rem" />
              <TbDownload size="2.4rem" />
            </button>
          </a>
        </motion.span>
      </div>
    </header>
  );
};

export default NavBar;

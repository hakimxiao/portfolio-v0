import styles from "./socials.module.scss";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a
          href="https://www.linkedin.com/in/abu-solihin-alhakim-1ba0152b0"
          target="_blank"
          rel="nofollow"
          title="LinkedIn"
          aria-label="Contact me on Linkedin"
        >
          <FaLinkedin size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://github.com/hakimxiao"
          target="_blank"
          rel="nofollow"
          title="Github"
          aria-label="See my Github Profile"
        >
          <FaGithub size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="https://wa.me/6285789110406"
          target="_blank"
          rel="nonfollow"
          title="WhatsApp"
          aria-label="Contact me on WhatsApp"
        >
          <FaWhatsapp size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="mailto:contactabusolihin@gmail.com"
          target="_blank"
          rel="nofollow"
          title="Gmail"
          aria-label="Contact me on G-Mail"
        >
          <FaEnvelope size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://www.instagram.com/fhkimm_?igsi=MXR3YWF6MHlpNHJhcQ=="
          target="_blank"
          rel="nofollow"
          title="Instagram"
          aria-label="Follow or meet me on instagram"
        >
          <FaInstagram size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://www.facebook.com/solihin.alhakim?mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          title="Facebook"
          rel="nofollow"
          aria-label="Let's be friend on facebook"
        >
          <FaFacebook size="2.4rem" />
        </a>
      </motion.span>
    </div>
  );
};

export default Socials;

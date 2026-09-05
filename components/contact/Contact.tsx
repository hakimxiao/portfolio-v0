import styles from "./contact.module.scss";
import { SiGmail } from "react-icons/si";

import React from "react";
import Reveal from "../utils/Reveal";
import Socials from "../navigations/Socials";

const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact
            <span>Me</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Interested in working together or discussing a project? Drop me an
            email. I&apos;m always excited to connect with fellow developers,
            teams, and innovators, and you can also reach out through{" "}
            <a
              href="https://www.linkedin.com/in/abu-solihin-alhakim-1ba0152b0"
              target="_blank"
              rel="nofollow"
              aria-label="Contact me on Linkedin"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/fhkimm_?igsi=MXR3YWF6MHlpNHJhcQ=="
              target="_blank"
              rel="nofollow"
              aria-label="Follow or meet me on instagram"
            >
              Instagram
            </a>{" "}
            if that&apos;s more convenient for you.
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactLink}>
            <a
              className={styles.contactLink}
              href="mailto:contactabusolihin@gmail.com"
              target="_blank"
              rel="nofollow"
              aria-label="Send me an email"
            >
              <SiGmail size="2.4rem" />
              <span>contactabusolihin@gmail.com</span>
            </a>
          </div>
        </Reveal>
        <Reveal width="100%">
          <Socials />
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

import { AiOutlineArrowRight } from "react-icons/ai";
import SectionHeader from "@/components/utils/SectionHeader";
import ShowcaseItem from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";
import { projects } from "@/constants";

const Showcase = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {"Full Gallery"}
        </TransitionLink>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {"Full Gallery"}
        </TransitionLink>
      </div>
    </section>
  );
};

export default Showcase;

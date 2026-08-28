import Reveal from "./Reveal";
import styles from "./sectionHeader.module.scss";

interface Props {
  title: string;
  dir?: "l" | "r";
}

const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};

export default SectionHeader;

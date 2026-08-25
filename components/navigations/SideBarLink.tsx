import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";

const SideBarLink = ({
  selected,
  onClick,
  href,
  label,
  ariaLabel,
  delay,
}: {
  selected: string;
  onClick: () => void;
  href: string;
  label: string;
  ariaLabel: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <Link
        className={`${styles.sideBarLink} ${selected === href.split("#")[1] ? styles.selected : ""}`}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default SideBarLink;

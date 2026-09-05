import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import React from "react";

const SideBarLink = ({
  selected,
  onClick,
  href,
  icon,
  ariaLabel,
  delay,
}: {
  selected: string;
  onClick: () => void;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  delay: number;
}) => {
  const isSelected = selected === href.split("#")[1];

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <Link
        className={`${styles.sideBarLink} ${isSelected ? styles.selected : ""}`}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <motion.span
          animate={{
            scale: isSelected ? 1.12 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          {icon}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default SideBarLink;

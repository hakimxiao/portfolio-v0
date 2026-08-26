"use client";

import Hero from "@/components/hero/Hero";
import NavBar from "@/components/navigations/NavBar";
import SideBar from "@/components/navigations/SideBar";
import styles from "@/components/utils/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <NavBar />
          <Hero />
        </main>
      </div>
    </>
  );
}

"use client";

import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import NavBar from "@/components/navigations/NavBar";
import SideBar from "@/components/navigations/SideBar";
import Showcase from "@/components/showcase/Showcase";
import Skills from "@/components/skills/Skills";
import styles from "@/components/utils/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Showcase />
        </main>
      </div>
    </>
  );
}

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowUp } from "react-icons/ai";
import { TransitionLink } from "../utils/TransitionLink";
import GalleryItem from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";
import Filter from "./Filter";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("💌");
  const [goUpBtn, setGoUpBtn] = useState(false);

  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.cat.includes("💌")),
  );

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setFilteredProjects(
      projects.filter((project) => project.cat.includes(filter)),
    );
  };

  const handleScroll = () => {
    setGoUpBtn(window.scrollY >= 350);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <main className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink
          className={styles.goBackBtn}
          href="/#projects"
          aria-label="Back to Homepage"
        >
          <AiOutlineArrowLeft size="2.4rem" />
        </TransitionLink>

        {/* Filter */}
        <Filter activeFilter={activeFilter} handleFilter={handleFilter} />

        {/* Gallery */}
        <section className={styles.galleryItem}>
          {filteredProjects.map((project) => (
            <GalleryItem
              key={`${project.title}-${activeFilter}`}
              {...project}
            />
          ))}
        </section>

        {/* Up Button */}
        <button
          className={styles.goUpBtn}
          style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <AiOutlineArrowUp size="2.4rem" />
        </button>
      </main>
    </>
  );
};

const projects = [
  {
    cat: "💌, App, Next",
    title: "Meteosphere",
    img: "/assets/gallery/meteosphere.webp",
    code: "https://github.com/hakimxiao/magang-web-analisis-cuaca",
    link: "https://web-analisis-cuaca-xy5f.vercel.app",
    tech: ["Next.js", "OpenStreetMap", "Tailwind", "11labs", "BMKG API"],
    modal: (
      <>
        🍵 Developed during my internship at BMKG South Sumatra, Meteosphere is
        a weather visualization platform designed to provide real-time weather
        and disaster information for Palembang. Built with Next.js,
        OpenStreetMap, BMKG APIs, and modern frontend technologies, the platform
        allows users to explore weather conditions through interactive map
        layers and data-driven visualizations.
        <br />
        <br />
        🍵 Users can monitor rainfall intensity, wind movement, temperature
        distribution, and earthquake activity directly on the map. The platform
        also includes weather forecasts, atmospheric analysis, and AI-powered
        voice presentations using ElevenLabs, creating a more accessible and
        engaging experience for understanding weather information.
      </>
    ),
  },

  {
    cat: "💌, App, Next",
    title: "Mimotel",
    img: "/assets/gallery/mimotel.webp",
    code: "https://github.com/hakimxiao/booking-hotel",
    link: "https://booking-hotel-rho-ashy.vercel.app",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Midtrans",
    ],
    modal: (
      <>
        🍵 Mimotel is a full-stack hotel booking platform built with Next.js,
        Prisma, PostgreSQL, and Auth.js. The application allows users to browse
        hotel rooms, manage reservations, and complete secure online bookings
        through Midtrans payment integration while maintaining a responsive user
        experience across devices.
        <br />
        <br />
        🍵 The project demonstrates modern full-stack development practices by
        combining authentication, database management, booking workflows, and
        payment processing into a scalable architecture. Features such as room
        availability management, reservation tracking, and secure user sessions
        provide a complete hotel booking experience.
      </>
    ),
  },

  {
    cat: "💌, App, Mobile",
    title: "Expo-Ecommerce",
    img: "/assets/gallery/expoecommerce.webp",
    code: "https://github.com/hakimxiao/fullstack-ecommerce-rn-expo",
    link: "https://github.com/hakimxiao/fullstack-ecommerce-rn-expo",
    tech: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Stripe",
      "Cloudinary",
      "React Query",
      "Tailwind CSS",
    ],
    modal: (
      <>
        🍵 Expo Ecommerce is a full-stack e-commerce monorepo consisting of a
        React Native mobile application, a Vite-based administration dashboard,
        and a Node.js backend powered by Express. The platform is designed to
        provide a complete online shopping ecosystem for both customers and
        administrators.
        <br />
        <br />
        🍵 MongoDB and Mongoose handle data storage, Clerk provides secure
        authentication, Cloudinary manages media uploads, and Stripe powers
        payment processing. React Query enables efficient API communication,
        creating a scalable architecture that seamlessly connects mobile,
        dashboard, and backend applications.
      </>
    ),
  },

  {
    cat: "💌, Design, React",
    title: "Cocktail",
    img: "/assets/gallery/cocktail.webp",
    code: "https://github.com/hakimxiao/cocktail-drink",
    link: "https://cocktail-drink-sigma.vercel.app",
    tech: ["React", "Vite", "Tailwind CSS", "GSAP", "React Responsive"],
    modal: (
      <>
        🍵 Cocktail is a modern landing page built with React, Vite, Tailwind
        CSS, and GSAP. The project focuses on creating a visually immersive
        experience through advanced animations, smooth scrolling effects, and
        responsive layouts that adapt beautifully across different screen sizes.
        <br />
        <br />
        🍵 By combining modern frontend technologies with motion design
        principles, the project showcases interactive sections, elegant
        transitions, and engaging storytelling elements. It demonstrates how
        animation can transform a traditional landing page into a memorable user
        experience.
      </>
    ),
  },

  {
    cat: "💌, App, Flutter",
    title: "Amazon Clone",
    img: "/assets/gallery/amazon-clone.webp",
    code: "https://github.com/hakimxiao/amazon-clone-flutter",
    link: "https://github.com/hakimxiao/amazon-clone-flutter",
    tech: [
      "Flutter",
      "Dart",
      "Provider",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Google Pay",
      "Apple Pay",
    ],
    modal: (
      <>
        🍵 Amazon Clone is a full-stack e-commerce mobile application built with
        Flutter and powered by a Node.js and Express backend. The project
        recreates many of the essential features found in modern online shopping
        platforms while maintaining a scalable and modular architecture.
        <br />
        <br />
        🍵 MongoDB manages product and user data, JWT secures authentication,
        Cloudinary handles image storage, and Google Pay and Apple Pay enable
        online transactions. Provider is used for state management, creating a
        smooth and responsive shopping experience throughout the application.
      </>
    ),
  },

  {
    cat: "💌, Design, React",
    title: "Game Landing Page",
    img: "/assets/gallery/game-landing.webp",
    code: "https://github.com/hakimxiao/awward-web",
    link: "https://awward-web-zeta.vercel.app",
    tech: ["React", "Vite", "GSAP", "Tailwind CSS"],
    modal: (
      <>
        🍵 Inspired by award-winning web experiences, Game Landing Page is a
        modern frontend project built with React, Vite, and GSAP. The website
        focuses on delivering an immersive experience through cinematic
        animations, smooth transitions, and interactive visual storytelling.
        <br />
        <br />
        🍵 Tailwind CSS provides responsive layouts while React enables a
        component-based architecture. Combined with advanced animation
        techniques, the project demonstrates how modern frontend development can
        create engaging digital experiences tailored for gaming and
        entertainment brands.
      </>
    ),
  },

  {
    cat: "💌, App, Mobile",
    title: "GoWez",
    img: "/assets/gallery/gowez.webp",
    code: "https://github.com/hakimxiao/expo-gowez-app",
    link: "https://github.com/hakimxiao/expo-gowez-app",
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "Zustand",
      "Google Maps",
      "Midtrans",
    ],
    modal: (
      <>
        🍵 GoWez is a transportation and navigation application built with React
        Native and Expo. Designed to provide a modern ride-booking experience,
        the application integrates Google Maps for route visualization,
        navigation, and location-based services.
        <br />
        <br />
        🍵 Expo Router handles navigation, Zustand manages global application
        state, and NativeWind provides a scalable styling solution. Midtrans is
        integrated for payment processing, while additional native features such
        as secure storage, bottom sheets, and WebViews create a complete mobile
        ecosystem similar to modern transportation platforms.
      </>
    ),
  },

  {
    cat: "💌, Design, React",
    title: "iPhone 3D Website",
    img: "/assets/gallery/iphone.webp",
    code: "https://github.com/hakimxiao/iPhone-3d/",
    link: "https://i-phone-3d.vercel.app/",
    tech: ["React", "Vite", "Three.js", "GSAP", "Tailwind CSS"],
    modal: (
      <>
        🍵 Inspired by Apple product presentation experience, iPhone 3D Website
        combines React, Three.js, and GSAP to create an immersive product
        showcase directly in the browser. Users can interact with 3D iPhone
        models while exploring smooth transitions and modern visual effects.
        <br />
        <br />
        🍵 React Three Fiber and Drei simplify the WebGL implementation, while
        GSAP powers cinematic animations throughout the experience. Built with
        Vite and Tailwind CSS, the project demonstrates how modern frontend
        technologies and real-time 3D rendering can be combined to create a
        premium product-focused website.
      </>
    ),
  },
];
export default Gallery;

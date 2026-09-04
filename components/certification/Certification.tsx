import SectionHeader from "../utils/SectionHeader";
import CertificationItem from "./CertificationItem";

const Certification = () => {
  const certification = [
    {
      title: "MongoDB Developer (MERN)",
      school: "SmartBridge — LastMile Indonesia 2026",
      date: "March 6 – June 17, 2026",
      link: "https://github.com/hakimxiao/Id_LM26-1_MERN",
      description:
        "Completed an international, project-based program focused on full-stack development with the MERN stack, combining technical training, hands-on projects, and industry-oriented learning.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Git"],
    },
    {
      title: "Web Developer Intern",
      school: "BMKG South Sumatra — IT Division",
      date: "August 11 – September 13, 2025",
      link: "https://github.com/hakimxiao/magang-web-analisis-cuaca",
      description:
        "Completed an internship focused on developing Meteosphere, a weather visualization platform that integrates meteorological data, interactive maps, and AI-powered voice presentation.",
      tech: [
        "Next.js",
        "OpenStreetMap",
        "Tailwind CSS",
        "BMKG API",
        "ElevenLabs",
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title="Certification" dir="l" />
      {certification.map((item) => (
        <CertificationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

export default Certification;

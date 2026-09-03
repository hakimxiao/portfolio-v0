import SectionHeader from "@/components/utils/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      role: "IT Division",
      date: "Aug 11, 2025",
      location: "BMKG SMB II, Palembang",
      description:
        "During my internship at BMKG, I focused on improving and modernizing the existing weather information website for Palembang. The previous website had a complex structure that made weather information difficult to understand and lacked a clear way to access data for different areas. I redesigned the system with a dropdown containing the administrative area codes for all districts in Palembang, allowing users to select a specific area and dynamically fetch the corresponding weather data from the API. The project also integrated an interactive map using OpenStreetMap and OpenWeather data, an earthquake map powered by the BMKG API, and a three-day weather forecast based on current BMKG data. In addition, I integrated AI as a virtual weather presenter by generating weather scripts with the Gemini API using parameters such as humidity, cloud conditions, wind, temperature, and weather analysis. The generated scripts were then converted into speech using ElevenLabs to provide an interactive weather presentation feature. The presenter is currently inactive because the free ElevenLabs API quota has been exhausted.",
      tech: [
        "Next.js",
        "OpenStreetMap",
        "Tailwind CSS",
        "ElevenLabs",
        "BMKG API",
        "OpenWeather",
        "Gemini API",
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};

export default Experience;

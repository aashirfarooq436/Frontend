import AboutCard from "../components/AboutCard";
import ProjectOverview from "../components/ProjectOverview";

const About = () => {
  const developers = [
    {
      name: "Developer 1",
      role: "Full Stack Developer",
      description:
        "Passionate about creating efficient and scalable web applications.",
      email: "developer1@example.com",
      github: "https://github.com/developer1",
      linkedin: "https://linkedin.com/in/developer1",
    },
    {
      name: "Developer 1",
      role: "Full Stack Developer",
      description:
        "Passionate about creating efficient and scalable web applications.",
      email: "developer1@example.com",
      github: "https://github.com/developer1",
      linkedin: "https://linkedin.com/in/developer1",
    },
    {
      name: "Developer 1",
      role: "Full Stack Developer",
      description:
        "Passionate about creating efficient and scalable web applications.",
      email: "developer1@example.com",
      github: "https://github.com/developer1",
      linkedin: "https://linkedin.com/in/developer1",
    },
  ];

  return (
    <div className="container mx-auto mt-8 px-16">
      <ProjectOverview />
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Meet the Developers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {developers.map((developer, index) => (
          <AboutCard key={index} {...developer} />
        ))}
      </div>
    </div>
  );
};

export default About;

import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import ProjectCard from "./project-card";
import GlowWrapper from "@/components/custom/navbar/glow-wrapper";
import projectsData from "./projects-data-en-fr.json";
import { useTheme } from "@/components/theme-provider";
const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  return (
    <div
      id="projects"
      className="flex flex-col w-full px-4 gap-8 tracked-section "
    >
      <span className=" flex text-start  text-3xl">
        {language === "EN" ? "Projects" : "Projet"}
      </span>
      <div className="flex justify-center ">
        <div className="flex grid grid-cols-3  gap-5">
          {projectsData.projects.map((project, index) => (
            <GlowWrapper
              key={index}
              className={`hover:scale-[1.03] hover:border-none hover:shadow-2xl rounded-lg hover:rounded-none ${
                theme === "light" ? "bg-muted/50" : ""
              }`}
              style={{
                borderRadius: "0px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ProjectCard project={project} />
            </GlowWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

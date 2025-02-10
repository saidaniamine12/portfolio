import { useSidebar } from "@/components/ui/sidebar";
import Education from "./education/education";
import Experience from "./experience/experience";
import About from "./about/about";
import Skills from "./skills/skills";
import { OpenedSkillIdProvider } from "./skills/opened-skill-provider";
import Projects from "./projects/projects";

const PageBody = () => {
  const { open } = useSidebar();
  return (
    <div className="flex  w-full mt-8 justify-center">
      <div
        className={`duration-500 ease-in-out pt-12 flex justify-center flex-1 flex-col gap-14 ${
          open ? "max-w-[95%]" : "max-w-7xl"
        }  `}
      >
        <About />
        <div className="w-full border-t"></div>
        <Education />
        <div className="w-full border-t"></div>
        <Experience />
        <div className="w-full border-t"></div>
        <OpenedSkillIdProvider>
          <Skills />
        </OpenedSkillIdProvider>
        <div className="w-full border-t"></div>
        <Projects />
        <div className="w-full border-t"></div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
      </div>
    </div>
  );
};

export default PageBody;

import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import Omnitrix from "./omnitrix/omnitrix";
import { useOpenedSkillId } from "./opened-skill-provider";
import skillsData from "./skills-data-en-fr.json";
const Skills = () => {
  const { language } = useLanguage();
  const { openedSkillId } = useOpenedSkillId();

  return (
    <div
      id="skills"
      className="flex flex-col w-full px-4 gap-6 tracked-section "
    >
      <span className=" flex text-start text-3xl">
        {language === "EN" ? "Skills" : "Compétences"}
      </span>
      <span
        data-aos="fade-up"
        className=" flex text-start text-3xl max-w-[50%]"
      >
        {language === "EN" ? (
          <span>
            <span className="text-spfg ">Full Stack </span>software developer
            with experience in
            <span className="text-spfg"> Front-End </span> and
            <span className="text-spfg"> Back-End </span>technologies
          </span>
        ) : (
          <span>
            <span className="text-spfg"></span> Développeur de logiciels
            <span className="text-spfg "> Full Stack </span>avec une expérience
            dans les technologies
            <span className="text-spfg"> Front-End </span>et
            <span className="text-spfg"> Back-End</span>
          </span>
        )}
      </span>
      <div id="skills" className="flex w-full flex-row pt-4 grid-cols-2 gap-4">
        <div
          data-aos="fade-right"
          className="flex flex-col w-2/5 items-center "
        >
          <Omnitrix />
        </div>
        <div data-aos="fade-left" className="flex flex-col  gap-10 pl-5">
          <span className="text-start pl-4 text-3xl">
            {
              skillsData.data.find((data) => data.id === openedSkillId)?.title[
                language
              ]
            }
          </span>
          <div className="flex grid h-56 grid-cols-5 content-start gap-y-4 ">
            {skillsData.data
              .find((data) => data.id === openedSkillId)
              ?.["skills"].map((skill, index) => (
                <div key={index} className="flex flex-col gap-2 items-center">
                  <img
                    src={skill.imgPath}
                    alt={skill.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "6px",
                    }}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

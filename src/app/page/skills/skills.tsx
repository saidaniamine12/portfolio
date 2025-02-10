import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import Omnitrix from "./omnitrix/omnitrix";
import { useOpenedSkillId } from "./opened-skill-provider";
import skillsData from "./skills-data-en-fr.json";
import { useEffect } from "react";
const Skills = () => {
  const { language } = useLanguage();
  const { openedSkillId } = useOpenedSkillId();

  useEffect(() => {
    console.log("openedSkillId", openedSkillId);
  }, [openedSkillId]);
  return (
    <div id="skills" className="flex w-full flex-row  tracked-section">
      <div className="flex flex-col w-2/5 items-center">
        <Omnitrix />
      </div>
      <div className="flex flex-col w-[40%] gap-10 ">
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
  );
};

export default Skills;

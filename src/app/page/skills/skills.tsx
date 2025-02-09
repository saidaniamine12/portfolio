import Omnitrix from "./omnitrix/omnitrix";
import { OpenedSkillIdProvider } from "./opened-skill-provider";
const Skills = () => {
  return (
    <OpenedSkillIdProvider>
      <div id="skills" className="flex w-full  tracked-section">
        <div className="flex">
          <Omnitrix />
        </div>
        <div className="flex flex-row w-3/5 gap-5"></div>
      </div>
    </OpenedSkillIdProvider>
  );
};

export default Skills;

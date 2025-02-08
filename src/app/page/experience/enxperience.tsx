import experienceData from "@/app/page/experience/experience-en-fr.json";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
const Experience = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-row w-full gap-4">
      {experienceData[language].map((experience, index) => (
        <div key={index} className="flex flex-col w-full">
          {/* date + company logo */}
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              {/* date*/}
              <span className="text-spfg font-semibold">
                {experience.date.start}
              </span>
              <span className="text-spfg">{experience.date.end}</span>
            </div>
            <div>
              <img src={`${experience.companyLogo}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

import experienceData from "@/app/page/experience/experience-en-fr.json";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
const Experience = () => {
  const { language } = useLanguage();
  const experienceDataLength = experienceData[language].length;
  return (
    <div
      id="experience"
      className="flex flex-col w-full px-4 gap-8 tracked-section "
    >
      <span className=" flex text-start text-3xl">
        {language === "EN" ? "Experience" : "Expérience"}
      </span>
      <div
        id="experience"
        className="flex flex-col w-full gap-14 tracked-section px-4"
      >
        {experienceData[language].map((experience, index) => (
          <div key={index} className={`flex flex-col w-full  gap-10 `}>
            <div className="flex flex-row gap-4 w-full  border-l">
              {/* date + company logo */}
              <div className="flex flex-col w-1/4 gap-4">
                <div className="flex flex-row gap-2 w-full justify-center text-[14px]">
                  {/* date*/}
                  <span className="flex ">{experience.date.start}</span>
                  <span className="text-spfg">-</span>
                  <span className="">{experience.date.end}</span>
                </div>
                <div className="flex justify-center w-full">
                  <img
                    className="flex max-w-[100px]  ratio-1:1"
                    src={`${experience.companyLogo}`}
                  />
                </div>
              </div>
              {/* job title  description*/}
              <div className="flex flex-col gap-2 w-3/5 ">
                <div className="flex flex-row gap-4">
                  <span className="  tracking-tight">
                    {experience.companyName}
                  </span>
                  <span className="color-spfg">|</span>
                  <span className="text-spfg font-semibold tracking-tight">
                    {experience.position}
                  </span>
                </div>
                <ul
                  role="list"
                  className={`flex flex-col pl-8 pt-4 list-disc marker:text-spfg gap-2 text-start`}
                >
                  {experience.description.map((desc, index) => (
                    <li key={index} className=" opacity-[0.85]">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {index === experienceDataLength - 1 ? (
              <></>
            ) : (
              <div className="flex w-full flex-row">
                <div className="w-1/4"></div>
                <div className="w-[70%]">
                  <div className="border-b"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

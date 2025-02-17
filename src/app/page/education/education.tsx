import InstituteCard from "./institute-card";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import instituesData from "./institues-data-en-fr..json";
import Certifications from "./certifications";
const languages = {
  EN: [
    {
      name: "Arabic",
      level: "Native",
    },
    {
      name: "French",
      level: "Advanced",
    },
    {
      name: "English",
      level: "Advanced",
    },
  ],
  FR: [
    {
      name: "Arabe",
      level: "Native",
    },
    {
      name: "Français",
      level: "Avancé",
    },
    {
      name: "Anglais",
      level: "Avancé",
    },
  ],
};

const Education = () => {
  const { language } = useLanguage();
  return (
    <div
      id="education"
      className="flex flex-col w-full px-4 gap-8 tracked-section "
    >
      <span className=" flex text-start text-3xl">
        {language === "EN" ? "Education" : "Éducation"}
      </span>
      <div className="flex flex-col gap-2 text-left  px-4">
        <div className="flex grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl ">
          {instituesData[language].map((institute, index) => (
            <InstituteCard
              key={index}
              name={institute.name}
              logoPath={institute.logoPath}
              degree={institute.degree}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-col border-l gap-2 text left gap-4 mt-4">
          <span className=" text-l font-semibold tracking-tight pl-2 text-spfg">
            {language === "EN" ? "Languages" : "Langues"}
          </span>
          <div data-aos="fade-right" className="flex flex-row gap-8 pl-4">
            {languages[language].map((lang, index) => (
              <span key={index}>
                {lang.name} <span className="text-spfg"> - </span>{" "}
                <span style={{ opacity: 0.8 }}>{lang.level}</span>
              </span>
            ))}
          </div>
        </div>
        <Certifications />
      </div>
    </div>
  );
};

export default Education;

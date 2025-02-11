import InstituteCard from "./institute-card";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";

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
      className="flex flex-col gap-2 text-left tracked-section px-4"
    >
      <div className="flex grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl ">
        <InstituteCard
          name="National Engineering School of Sousse"
          logoPath="logo_eniso.png"
          degree="Engineering Degree in ICT"
        />
        <InstituteCard
          name="El Manar Preparatory Engineering Institute"
          logoPath="logo-ipeiem.jpg"
          degree="Preparatory Engineering Studies"
        />
      </div>
      <div className="flex flex-col border-l gap-2 text left gap-4 mt-4">
        <span className=" text-l font-semibold tracking-tight pl-2 text-spfg">
          {language === "EN" ? "Languages" : "Langues"}
        </span>
        <div className="flex flex-row gap-8 pl-4">
          {languages[language].map((lang, index) => (
            <span key={index}>
              {lang.name} <span className="text-spfg"> - </span>{" "}
              <span style={{ opacity: 0.8 }}>{lang.level}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

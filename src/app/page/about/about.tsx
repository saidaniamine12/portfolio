import styles from "@/app/page/about/about.module.css";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";
import { useTheme } from "@/components/theme-provider";
import { Code, CodeXml } from "lucide-react";
const About = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      id="about"
      className={`flex grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl tracked-section px-4 ${
        theme === "light" ? "bg-muted/50" : ""
      }`}
    >
      <div className="flex flex-col gap-10 p-4">
        {/* hello */}
        <div className="flex flex-row gap-2 text-3xl ">
          <h2 className="font-semibold tracking-tight">
            {" "}
            {language === "EN" ? "Hello" : "Salut"}
          </h2>
          <span className={styles["wave"]}>👋</span>
        </div>
        {/* Introduction */}
        <div className="flex flex-col gap-2 text-3xl items-start">
          {language === "EN" ? (
            <>
              <h2 className=" whitespace-nowrap ">
                I'm an{" "}
                <span className="font-semibold tracking-tight text-spfg">
                  ICT Engineer{" "}
                </span>
                specialized in{" "}
              </h2>
              <span className="font-semibold tracking-tight text-spfg">
                Web Development
              </span>
            </>
          ) : (
            <>
              <h2 className=" whitespace-nowrap ">
                Je suis un{" "}
                <span className="font-semibold tracking-tight text-spfg">
                  Ingénieur en TIC
                </span>{" "}
                spécialisé en
              </h2>{" "}
              <span className="font-semibold tracking-tight text-spfg">
                Développement Web
              </span>
            </>
          )}
        </div>
        {/* Paragraph */}
        <div className="flex flex-col gap-2 text-left ">
          {language === "EN" ? (
            <>
              <span className="">
                I’m a solution-driven web developer and software enthusiast who
                thrives on tackling complex challenges through innovative code
                and creative problem-solving. My passion lies in designing
                intuitive systems, collaborating on meaningful projects, and
                pushing the boundaries of user-centric technology.
              </span>
              <span className="">
                {}
                Driven by curiosity and growth, I actively seek opportunities to
                refine my craft, develop meaningful digital solutions, and
                immerse myself in the ever-evolving frontiers of technology.
              </span>
            </>
          ) : (
            <>
              <span className="">
                {" "}
                Je suis un développeur web passionné par les solutions et un
                enthousiaste des logiciels qui prospère en relevant des défis
                complexes grâce à un code innovant et à une résolution créative
                des problèmes. Ma passion réside dans la conception de systèmes
                intuitifs, la collaboration sur des projets significatifs et la
                repousse des limites de la technologie centrée sur
                l'utilisateur.{" "}
              </span>{" "}
              <span className="">
                {" "}
                Animé par la curiosité et la croissance, je cherche activement
                des opportunités pour affiner mon métier, développer des
                solutions numériques significatives et m'immerger dans les
                frontières technologiques en constante évolution.{" "}
              </span>
            </>
          )}

          <blockquote className=" flex whitespace-nowrap flex-row mt-6  gap-x-2 border-l-2 pl-6 italic opacity-75">
            <Code />
            "Stay hungry, stay foolish." - Steve Jobs
            <CodeXml />
          </blockquote>
        </div>
      </div>
      {/* Image */}
      <div className="flex justify-center items-center">
        <div className={`${styles["card"]} rotate-[-10deg]  overflow-hidden `}>
          <img
            className="scale-[1.2] mr-4 object-cover  rotate-[10deg] overflow-hidden"
            src="mohamed-amine-saidani.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

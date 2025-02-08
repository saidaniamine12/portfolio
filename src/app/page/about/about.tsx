import styles from "@/app/page/about/about.module.css";
import { Code, CodeXml } from "lucide-react";
const About = () => {
  return (
    <div className="flex grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl ">
      <div className="flex flex-col gap-4 p-4">
        {/* hello */}
        <div className="flex flex-row gap-2 text-3xl">
          <h2 className="font-semibold tracking-tight">Hello</h2>
          <span className={styles["wave"]}>👋</span>
        </div>
        {/* Introduction */}
        <div className="flex flex-col gap-2 text-3xl items-start">
          <h2 className=" whitespace-nowrap ">
            I'm an{" "}
            <span
              style={{ color: "#00b4d8" }}
              className="font-semibold tracking-tight"
            >
              ICT Engineer
            </span>{" "}
            specialized in
          </h2>
          <span
            style={{ color: "#00b4d8" }}
            className="font-semibold tracking-tight"
          >
            Web Development
          </span>
        </div>
        {/* hello */}
        <div className="flex flex-col gap-2 text-left">
          <span className="">
            I’m a solution-driven web developer and software enthusiast who
            thrives on tackling complex challenges through innovative code and
            creative problem-solving. My passion lies in designing intuitive
            systems, collaborating on meaningful projects, and pushing the
            boundaries of user-centric technology.
          </span>
          <span className="">
            Driven by curiosity and growth, I actively seek opportunities to
            refine my craft, develop meaningful digital solutions, and immerse
            myself in the ever-evolving frontiers of technology.
          </span>
          <blockquote className=" flex whitespace-nowrap flex-row mt-6  gap-x-2 border-l-2 pl-6 italic opacity-75">
            <Code />
            "Stay hungry, stay foolish." - Steve Jobs
            <CodeXml />
          </blockquote>
        </div>
      </div>
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

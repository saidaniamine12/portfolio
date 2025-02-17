import { useTheme } from "@/components/theme-provider";
import EmailForm from "./email/email-form";
import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";

const Contact = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      id="contact"
      className="flex flex-col w-full items-center justify-center px-4 tracked-section gap-4"
    >
      <h1 className="flex text-3xl self-start">
        {language === "EN" ? "Contact" : "Contact"}
      </h1>
      <span data-aos="fade-right" className="flex text-3xl self-start">
        {language === "EN" ? (
          <span>
            Get in touch and let's
            <span className="text-spfg"> work together</span>
          </span>
        ) : (
          <span>
            Contactez-moi et{" "}
            <span className="text-spfg"> travaillons ensemble</span>
          </span>
        )}
      </span>

      <div
        data-aos="fade-left"
        className={`flex self-center w-3/5 flex-col ${
          theme === "light" ? "bg-muted/50" : ""
        }`}
      >
        <div className="flex flex-col w-full p-4 border rounded-md ">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useLanguage } from "@/components/custom/language-select.tsx/language-select-provider";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-row w-full justify-center px-4 mt-[-35px] pb-5">
      <div className="flex flex-row gap-2">
        <span className="text-spfg "> &copy;</span>
        {language === "EN" ? "Copyright" : "Droit d'auteur"} 2025{" "}
        <span className="hover:text-spfg">Mohamed Amine Saidani</span>
      </div>
      {/* <div className="flex flex-row gap-2 display-none">
        {language === "EN" ? "Privacy Policy" : "Politique de confidentialité"}
        <span className=" text-spfg">|</span>
        {language === "EN" ? "Terms Of Use" : "Conditions d'utilisation"}
      </div> */}
    </div>
  );
};

export default Footer;

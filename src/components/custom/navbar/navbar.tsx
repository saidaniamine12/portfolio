import { Navbar, Typography } from "@material-tailwind/react";
import DarkModeToggle from "../dark-mode-toggle.tsx/dark-mode-toggle";
import { none } from "@tsparticles/engine";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import LanguageSelectButton from "../language-select.tsx/language-select-button";
import navListEnFr from "./nav-list-en-fr.json";
import { useLanguage } from "../language-select.tsx/language-select-provider";
import { Cog, Send } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Pickaxe } from "lucide-react";
import { useCurrentSection } from "@/app/page/section-provider";
import { useEffect } from "react";

interface NavbarDefaultProps {
  isScrolled: boolean;
}

export const NavbarDefault: React.FC<NavbarDefaultProps> = ({
  isScrolled,
}: NavbarDefaultProps) => {
  const { language } = useLanguage();
  const { isMobile } = useSidebar();
  const currentSection = useCurrentSection();

  useEffect(() => {}, [currentSection]);
  const NavList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navListEnFr[language].map((navItem, index) => (
        <li
          key={index}
          className={`transition-all duration-700 ease-in-out ${
            currentSection === navItem.id
              ? "border-b border-spfg"
              : "border-b border-transparent"
          }`}
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="cursor-pointer"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onClick={() => {
              const element = document.getElementById(navItem.id);
              if (element) {
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - 50, // Adjust 10px above the element
                  behavior: "smooth",
                });
              }
            }}
          >
            <a className="flex items-center gap-x-2 p-1 font-medium">
              <div className="flex mb-2 w-5 h-5">
                {(() => {
                  switch (navItem.icon) {
                    case "graduation-cap":
                      return <GraduationCap />;
                    case "briefcase-business":
                      return <BriefcaseBusiness />;
                    case "pickaxe":
                      return <Pickaxe />;
                    case "broo":
                      return <Cog />;
                    case "send":
                      return <Send />;
                    default:
                      return <></>;
                  }
                })()}
              </div>

              <span className="flex items-center">{navItem.name}</span>
            </a>
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar
      placeholder=""
      shadow={false}
      style={{ border: none, transition: "padding 0.4s ease" }}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      // max-w-screen-xl to make it max width 1280px
      className={`px-4 py-1 lg:px-8 ${isScrolled ? "lg:py-1" : "lg:py-4"} `}
    >
      <div
        data-aos="zoom-in-down"
        data-aos-delay="1200"
        className=" flex items-center justify-between  "
      >
        {/*  side bar trigger */}
        {isMobile && (
          <SidebarTrigger className="-ml-1 mr-1 bg-transparent text-foreground hover:bg-sidebar-accent" />
        )}
        {/*  mohamed amine saidani photo */}
        <Typography
          className="flex flex-row display-block gap-2 mr-2 pl-4  font-medium align-middle flex-shrink-0 cursor-pointer"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: elementPosition - 50, // Adjust 10px above the element
                behavior: "smooth",
              });
            }
          }}
        >
          <img
            src="mohamed-amine-saidani.jpg"
            className=" w-10 h-10 rounded-full object-cover object-[50%_30%]"
          ></img>
          <span className="flex display-block items-center whitespace-nowrap">
            Mohamed Amine Saidani
          </span>
        </Typography>
        <div className="hidden lg:block">{NavList}</div>
        <div className="flex items-center gap-x-6 pr-4 ">
          <LanguageSelectButton />
          {/*  dark mode button */}
          <DarkModeToggle />
        </div>
      </div>
    </Navbar>
  );
};

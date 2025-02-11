import { Codepen, Github } from "lucide-react";
import { useLanguage } from "./custom/language-select.tsx/language-select-provider";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const NavTech = () => {
  const { language } = useLanguage();
  return (
    <SidebarMenu className="pt-10 px-[8px] whitespace-nowrap overflow-hidden">
      <SidebarGroupLabel className="">
        {language === "EN" ? "Tech Contribution" : "Contribution Tech"}
      </SidebarGroupLabel>
      {/* Github */}
      <Collapsible key="clock" asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              variant="default"
              onClick={() => {
                window.open(
                  "https://github.com/saidaniamine12",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Github />
              <span>Github</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
      {/* Codepen */}
      <Collapsible key="phone-number" asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              variant="default"
              onClick={() => {
                window.open(
                  "https://codepen.io/Mohamed-Amine-Sa-dani/pens/public",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Codepen />
              <span>Codepen</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
};

export default NavTech;

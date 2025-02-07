import { Clock, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleTrigger } from "./ui/collapsible";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "./custom/language-select.tsx/language-select-provider";

export function NavContactInfo() {
  const { language } = useLanguage();
  const handleMailClick = () => {
    const mailSpan = document.getElementById("amine-mail");
    const mailText = mailSpan?.textContent?.trim();
    if (mailText) {
      navigator.clipboard.writeText(mailText);
      // Alert the copied text
      toast({
        description: "Email copied to clipboard!",
        variant: "blur",
      });
    }
  };

  const handleLinkedInClick = () => {
    // open linkedIn profile
    window.open(`https://www.linkedin.com/in/mohamed-amine-saidani`, "_blank");
  };
  return (
    <SidebarMenu className="mb-10">
      <SidebarGroupLabel className="whitespace-nowrap overflow-hidden">
        {language === "EN" ? "Contact info" : "Coordonnées"}
      </SidebarGroupLabel>
      {/* clock */}
      <Collapsible key="clock" asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton variant="none">
              <Clock />
              <span>24/7</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
      {/* Phone Number */}
      <Collapsible key="phone-number" asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton variant="none">
              <Phone />
              <span>(+216) 52 701 636</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
      {/* email */}
      <Collapsible
        key="email"
        asChild
        className="group/collapsible hover:overflow-visible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton variant="default" onClick={handleMailClick}>
              <Mail />
              <Tooltip>
                <TooltipTrigger className="whitespace-nowrap  truncate">
                  <span id="amine-mail">
                    mohamedamine.saidani@eniso.u-sousse.tn
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>mohamedamine.saidani@eniso.u-sousse.tn</p>
                </TooltipContent>
              </Tooltip>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
      {/* linkedIn */}
      <Collapsible
        key="linkedIn"
        asChild
        className="group/collapsible hover:overflow-visible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton variant="default" onClick={handleLinkedInClick}>
              <Linkedin />
              <Tooltip>
                <TooltipTrigger className="whitespace-nowrap  truncate">
                  <span id="amine-linkedin">LinkedIn</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>https://www.linkedin.com/in/mohamed-amine-saidani</p>
                </TooltipContent>
              </Tooltip>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
      {/* clock */}
      <Collapsible key="location" asChild className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton variant="none">
              <MapPin />
              <span>{language === "EN" ? "Tunisia" : "Tunisie"}</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}

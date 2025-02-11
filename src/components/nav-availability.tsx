"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import LiveGreen from "./custom/availability/availability";
import { useLanguage } from "./custom/language-select.tsx/language-select-provider";

export function NavAvailability() {
  const { open } = useSidebar();
  const { language } = useLanguage();
  return (
    <SidebarGroup>
      <SidebarGroupLabel></SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible
          key="Now"
          asChild
          className="group/collapsible overflow-visible mt-5"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton variant={"none"} className="overflow-visible">
                <div
                  className={`duration-300 ease-in-out flex w-full items-center  space-x-4 overflow-visible ${
                    open ? "rounded-md border p-6 pr-8" : "border-none"
                  }   shadow-lg `}
                >
                  <LiveGreen />
                  <div className="pl-1 flex flex-col overflow-hidden">
                    <span className=" whitespace-nowrap ">
                      {language === "EN" ? "Currently available" : "Disponible"}
                    </span>
                    <span className=" whitespace-nowrap  opacity-70 text-xs">
                      {language === "EN"
                        ? "Let’s Collaborate!"
                        : "Travaillons ensemble!"}
                    </span>
                  </div>
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent></CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}

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

export function NavMain() {
  const { open } = useSidebar();
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
                      Currently available
                    </span>
                    <span className=" whitespace-nowrap  opacity-70 text-xs">
                      Let’s Collaborate!
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

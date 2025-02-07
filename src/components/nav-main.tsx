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
} from "@/components/ui/sidebar";
import LiveGreen from "./custom/availability/availability";

export function NavMain() {
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
              <SidebarMenuButton className="overflow-visible">
                <LiveGreen />
                <span>xxxx</span>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent></CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}

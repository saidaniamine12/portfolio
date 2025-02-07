import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavContactInfo } from "@/components/nav-contact-info";
import { NavResume } from "@/components/nav-resume";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavContactInfo />
        <NavResume />
      </SidebarFooter>
    </Sidebar>
  );
}

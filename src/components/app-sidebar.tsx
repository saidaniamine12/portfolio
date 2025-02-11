import * as React from "react";

import { NavAvailability } from "@/components/nav-availability";
import { NavContactInfo } from "@/components/nav-contact-info";
import { NavResume } from "@/components/nav-resume";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import NavTech from "./nav-tech";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavAvailability />
        <NavTech />
      </SidebarContent>
      <SidebarFooter>
        <NavContactInfo />
        <NavResume />
      </SidebarFooter>
    </Sidebar>
  );
}

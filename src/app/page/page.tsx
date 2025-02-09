import { AppSidebar } from "@/components/app-sidebar";
import DynamicNavbarWrapper from "@/components/custom/navbar/dynamic-navbar-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CurrentSectionProvider } from "./section-provider";
import PageBody from "./page-body";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <CurrentSectionProvider>
          <header
            style={{ position: "sticky", zIndex: 10 }}
            className="top-0 flex-row h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full"
          >
            <div
              className="flex items-center gap-2 w-full"
              style={{
                width: "100%",
                backdropFilter: "blur(10px)",
              }}
            >
              <DynamicNavbarWrapper />
            </div>
          </header>
          <PageBody />
        </CurrentSectionProvider>
      </SidebarInset>
    </SidebarProvider>
  );
}

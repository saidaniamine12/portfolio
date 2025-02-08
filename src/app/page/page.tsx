import { AppSidebar } from "@/components/app-sidebar";
import DynamicNavbarWrapper from "@/components/custom/navbar/dynamic-navbar-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import About from "./about/about";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
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
        <div className="flex  w-full mt-8 justify-center">
          <div className="pt-4 flex justify-center flex-1 flex-col gap-4 max-w-7xl">
            <About />

            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

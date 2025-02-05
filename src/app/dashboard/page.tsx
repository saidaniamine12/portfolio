import { AppSidebar } from "@/components/app-sidebar";
import DynamicNavbarWrapper from "@/components/custom/navbar/dynamic-navbar-wrapper";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header
          style={{ position: "sticky", zIndex: 1000 }}
          className="flex-row h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full"
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
        <div className="flex flex-1 flex-col gap-4 p-4 mt-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

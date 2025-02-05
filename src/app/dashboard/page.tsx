import { AppSidebar } from "@/components/app-sidebar";
import GlowWrapper from "@/components/custom/glow-wrapper";
import { NavbarDefault } from "@/components/custom/navbar/navbar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header
          style={{ position: "sticky", top: 13, zIndex: 1000 }}
          className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full"
        >
          <div
            className="flex items-center gap-2 px-4"
            style={{
              width: "100%",

              backdropFilter: "blur(10px)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                borderRadius: "12px 12px 20px 20px",
                overflow: "hidden",
              }}
              className="w-full h-full max-w-[1280px] mx-auto"
            >
              <GlowWrapper>
                <NavbarDefault />
              </GlowWrapper>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 mt-4">
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <dl>
            <dt>Coffee</dt>
            <dd>- black hot drink</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
          </dl>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

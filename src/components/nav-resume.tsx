"use client";

import { FileUser } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { toast } from "@/hooks/use-toast";
import { useLanguage } from "./custom/language-select.tsx/language-select-provider";

export function NavResume() {
  const { language } = useLanguage();
  const downloadPdfResume = () => {
    // Define the file path (ensure it's accessible from your app's public directory)
    const fileUrl = "../assets/mohamed_amine_saidani_resume.pdf";

    const element = document.createElement("a");
    element.href = fileUrl;
    element.download =
      language === "EN"
        ? "mohamed_amine_saidani_resume.pdf"
        : "mohamed_amine_saidani_cv.pdf";

    document.body.appendChild(element);
    element.click();
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback className="rounded-lg">
                  <FileUser />
                </AvatarFallback>
              </Avatar>
              <div
                onClick={() => {
                  downloadPdfResume();
                  toast({
                    description: "resume has been downloaded.",
                    variant: "blur",
                  });
                }}
                className="grid flex flex-row text-left text-sm leading-tight"
              >
                {language === "EN" ? (
                  <>
                    <span className="truncate text-xs">Get my</span>
                    <span className="truncate font-semibold">Resume</span>
                  </>
                ) : (
                  <>
                    <span className="truncate text-xs">Télécharger mon</span>
                    <span className="truncate font-semibold">CV</span>
                  </>
                )}
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

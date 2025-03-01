"use client";

import { FileUser } from "lucide-react";
import { saveAs } from "file-saver";
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
  const downloadPdfResume = async () => {
    try {
      let response;
      if (language === "EN") {
        response = await fetch(
          "https://saidaniamine12.github.io/portfolio/Mohamed_amine_saidani_resume.pdf"
        );
      } else {
        response = await fetch(
          "https://saidaniamine12.github.io/portfolio/Mohamed_amine_saidani_cv.pdf"
        );
      }
      // 1. Fetch the PDF file

      const pdfArrayBuffer = await response.arrayBuffer();
      const pdfBlob = new Blob([pdfArrayBuffer], { type: "application/pdf" });
      // 2. Convert response to Blob
      saveAs(
        pdfBlob,
        language === "EN"
          ? "Mohamed_amine_saidani_resume.pdf"
          : "Mohamed_amine_saidani_cv.pdf"
      );
      const message =
        language === "EN"
          ? "Downloading has started."
          : "Le téléchargement a commencé.";
      toast({
        description: message,
        variant: "blur",
      });
    } catch {
      toast({
        description: "Failed to download resume. Please try again later.",
        variant: "destructive",
      });
      // Add your error handling here (e.g., show error message to user)
    }
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

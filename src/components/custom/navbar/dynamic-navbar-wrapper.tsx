import { useEffect, useRef, useState } from "react";
import GlowWrapper from "../glow-wrapper";
import { NavbarDefault } from "./navbar";
import { useSidebar } from "@/components/ui/sidebar";

const DynamicNavbarWrapper = () => {
  const isScrolledRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const borderRadiusRef = useRef("12px");
  const { open } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 32 || open;
      if (isScrolledRef.current !== isScrolled) {
        isScrolledRef.current = isScrolled;
        setIsScrolled(isScrolled);
        if (isScrolled) {
          borderRadiusRef.current = "0px";
        } else {
          borderRadiusRef.current = "1px";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setIsScrolled(true);
    }
    if (!open) {
      setIsScrolled(isScrolledRef.current);
    }
  }, [open]);

  return (
    <div
      style={{
        transition: "width 0.3s ease",
        width: isScrolled ? "100%" : "1280px",
      }}
      className={`flex h-full mx-auto`}
    >
      <GlowWrapper
        style={{
          border: "1px solid hsl(var(--sidebar-border))",
          overflow: "hidden",
          borderRadius: isScrolled ? "0px" : "12px",
          transition: "border-radius 0.5s ease",
        }}
      >
        <NavbarDefault />
      </GlowWrapper>
    </div>
  );
};

export default DynamicNavbarWrapper;

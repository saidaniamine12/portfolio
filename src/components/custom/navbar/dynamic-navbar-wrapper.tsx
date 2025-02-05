import { useEffect, useRef, useState } from "react";
import GlowWrapper from "../glow-wrapper";
import { NavbarDefault } from "./navbar";
import { useSidebar } from "@/components/ui/sidebar";

const DynamicNavbarWrapper = () => {
  const isScrolledRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const borderRadiusRef = useRef("12px");
  const { open, isMobile } = useSidebar();
  const [width, setWidth] = useState("1280px");
  const [borderRadius, setBorderRadius] = useState("12px");
  const divRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 32;
      if (isScrolledRef.current !== isScrolled) {
        isScrolledRef.current = isScrolled;
        setIsScrolled(isScrolled);
        if (isScrolled) {
          borderRadiusRef.current = "0px";
          setBorderRadius(borderRadiusRef.current);
        } else {
          borderRadiusRef.current = "12px";
          setBorderRadius(borderRadiusRef.current);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("windowWidth", windowWidth);
    console.log("open", open);
    console.log("isScrolled", isScrolled);
    if (isMobile) {
      setWidth("100%");
      setBorderRadius("0px");
    } else {
      if (windowWidth < 1280) {
        console.log("windowWidth < 1280");
        setWidth("100%");
        borderRadiusRef.current = "0px";
        setBorderRadius("0px");
      } else {
        setWidth("1280px");
        if (isScrolled) {
          setWidth("100%");
          setBorderRadius("0px");
        } else {
          setBorderRadius("12px");
        }
        if (open) {
          setBorderRadius("0px");
          setWidth("100%");
        }
      }
    }
  }, [open, isScrolled, isMobile, windowWidth]);

  return (
    <div
      ref={divRef}
      style={{
        transition: "width 0.3s ease",
        width: width,
      }}
      className={`flex h-full mx-auto`}
    >
      <GlowWrapper
        style={{
          border: "1px solid hsl(var(--sidebar-border))",
          overflow: "hidden",
          borderRadius: borderRadius,
          transition: "border-radius 0.5s ease",
        }}
      >
        <NavbarDefault />
      </GlowWrapper>
    </div>
  );
};

export default DynamicNavbarWrapper;

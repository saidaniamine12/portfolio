import { useEffect, useRef, useState } from "react";
import GlowWrapper from "./glow-wrapper";
import { NavbarDefault } from "./navbar";
import { useSidebar } from "@/components/ui/sidebar";

const DynamicNavbarWrapper = () => {
  const isScrolledRef = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const borderRadiusRef = useRef("12px");
  const { open, isMobile } = useSidebar();
  const [navbarWidth, setNavbarWidth] = useState<string>();
  const [borderRadius, setBorderRadius] = useState("12px");

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
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
    if (isMobile) {
      setNavbarWidth("100%");
      setBorderRadius("0px");
    } else {
      if (currentWidth < 1280) {
        setNavbarWidth("100%");
        borderRadiusRef.current = "0px";
        setBorderRadius("0px");
      } else {
        setNavbarWidth("1280px");
        if (isScrolled) {
          setNavbarWidth("100%");
          setBorderRadius("0px");
        } else {
          setBorderRadius("12px");
        }
        if (open) {
          setBorderRadius("0px");
          setNavbarWidth("100%");
        }
      }
    }
  }, [open, isScrolled, isMobile, currentWidth]);

  return (
    <div
      style={{
        transition: "width 0.3s ease",
        width: navbarWidth,
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
        <NavbarDefault isScrolled={isScrolled} />
      </GlowWrapper>
    </div>
  );
};

export default DynamicNavbarWrapper;

import { useRef, useEffect } from "react";
import styled from "styled-components";
import "@/App.css";
import { ReactNode } from "react";

interface GlowWrapperProps {
  children: ReactNode;
  style: React.CSSProperties;
  className?: string;
}
const GlowWrapper: React.FC<GlowWrapperProps> = ({
  children,
  style,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const baseColor = [255, 220, 139];
  const circleSpacing = 6;
  const glowSize = 450;
  const radius = glowSize / 2;
  const totalCircles = Math.floor(radius / circleSpacing);
  const baseOpacity = 0.3;
  const opacityStep = baseOpacity / totalCircles;

  useEffect(() => {
    const gradientStops = [];

    for (let i = 0; i < totalCircles; i++) {
      const start = (((i * circleSpacing) / glowSize) * 100).toFixed(5) + "%";
      const end =
        ((((i + 1) * circleSpacing) / glowSize) * 100).toFixed(5) + "%";
      const opacity = (baseOpacity - i * opacityStep).toFixed(3);

      gradientStops.push(
        `rgba(${baseColor}, ${opacity}) ${start}`,
        `rgba(${baseColor}, ${opacity}) ${end}`
      );
    }

    gradientStops.push(`rgba(${baseColor}, 0) 100%`);

    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty(
        "--gradient-stops",
        gradientStops.join(",")
      );
    }
  }, []);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    wrapperRef.current.style.setProperty(
      "--x",
      (e.clientX - rect.left).toString()
    );
    wrapperRef.current.style.setProperty(
      "--y",
      (e.clientY - rect.top).toString()
    );
  };

  const handleMouseLeave = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty("--x", "-9999");
      wrapperRef.current.style.setProperty("--y", "-9999");
    }
  };

  return (
    <GlowContainer
      className={className}
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </GlowContainer>
  );
};

const GlowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    top: calc(var(--y, -9999px) * 1px);
    left: calc(var(--x, -9999px) * 1px);
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background: radial-gradient(circle at center, var(--gradient-stops));
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 0.2; // starting with a glow 0.2 inside with minimal opacity to later increase it on hover and never goes back to center
    filter: brightness(1) contrast(1);
    transition: opacity 1s ease, filter 1s ease;
    z-index: 0;
  }

  &:hover::after {
    opacity: 0.4;
    filter: brightness(1.8) contrast(2);
    transition-delay: 0.4s;
  }
`;

export default GlowWrapper;

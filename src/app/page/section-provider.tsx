import React, { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";

const CurrentSectionContext = createContext("");

export const useCurrentSection = () => useContext(CurrentSectionContext);

export const CurrentSectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Get all entries that are currently intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Find the entry with the highest intersection ratio
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        setCurrentSection(mostVisible.target.id);
      }
    };

    observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.2, 0.6, 0.8],
      rootMargin: "-10% 0px",
    });

    // Observe all sections
    const sections = document.querySelectorAll(".tracked-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <CurrentSectionContext.Provider value={currentSection}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

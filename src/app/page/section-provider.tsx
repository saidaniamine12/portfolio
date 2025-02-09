// CurrentSectionContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to store the current section
const CurrentSectionContext = createContext("");

// Custom hook to access the current section
export const useCurrentSection = () => useContext(CurrentSectionContext);

// Provider component
import { ReactNode } from "react";

export const CurrentSectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 90% of the section is in view
      }
    );

    const sections = document.querySelectorAll(".tracked-section"); // All sections with the class "section"
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer
    };
  }, []);

  return (
    <CurrentSectionContext.Provider value={currentSection || ""}>
      {children}
    </CurrentSectionContext.Provider>
  );
};

import { ReactNode, createContext, useState, useContext } from "react";

// Create the context
const OpenedSkillIdContext = createContext<{
  openedSkillId: number;
  setOpenedSkillId: (skillNumber: number) => void;
}>({
  openedSkillId: 1,
  setOpenedSkillId: () => {},
});

interface OpenedSkillProviderProps {
  children: ReactNode;
}

export const OpenedSkillIdProvider = ({
  children,
}: OpenedSkillProviderProps) => {
  // State to store the currently opened skill (1 to 4)
  const [openedSkillId, setOpenedSkillIdState] = useState(1);

  // Function to update the opened skill (only accepts values between 1 and 4)
  const setOpenedSkillId = (skillNumber: number) => {
    if (skillNumber >= 1 && skillNumber <= 4) {
      setOpenedSkillIdState(skillNumber);
    } else {
      console.error("Skill number must be between 1 and 4.");
    }
  };

  return (
    <OpenedSkillIdContext.Provider value={{ openedSkillId, setOpenedSkillId }}>
      {children}
    </OpenedSkillIdContext.Provider>
  );
};

// Custom hook to use the OpenedSkillContext
export const useOpenedSkillId = () => {
  const context = useContext(OpenedSkillIdContext);
  if (!context) {
    throw new Error(
      "useOpenedSkillId must be used within a useOpenedSkillIdProvider"
    );
  }
  return useContext(OpenedSkillIdContext);
};

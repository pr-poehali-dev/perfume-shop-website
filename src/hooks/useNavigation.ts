import { useState } from "react";
import { Section } from "@/types/perfume";

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState<Section>("catalog");

  const navigateToSection = (section: Section) => {
    setActiveSection(section);
  };

  return {
    activeSection,
    navigateToSection,
  };
};

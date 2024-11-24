import { SkillBridgeContext } from "../../context/SkillBridgeContext"; // Import the SkillBridgeContext
import { useContext } from "react";

export const useSkillBridgeContext = () => {
  const context = useContext(SkillBridgeContext);

  if (!context) {
    throw Error("useSkillBridgeContext must be used inside a SkillBridgeProvider");
  }

  return context;
};
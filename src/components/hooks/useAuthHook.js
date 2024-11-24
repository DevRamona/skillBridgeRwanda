
import { useContext } from "react";
import { useSkillBridgeContext } from "../../context/SkillBridgeContext";

export const useAuthContext = () => {
  const context = useContext(useSkillBridgeContext);

  if (!context) {
    throw Error("useSkillBridgeContext must be used inside an AuthContextProvider");
  }

  return context;
};

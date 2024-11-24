import { toast } from "react-toastify";
import { useSkillBridgeContext } from "./useSkillBridgeContext";

export const useLogout = () => {
  const { dispatch } = useSkillBridgeContext();
  const logout = () => {
    localStorage.removeItem("user");

    toast.warning("Logout");
    dispatch({ type: "LOGOUT" });
    window.location.href = "/";
  };
  return { logout };
};

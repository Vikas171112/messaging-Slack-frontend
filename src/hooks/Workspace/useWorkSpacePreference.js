import WorkSpacePReferenceContext from "@/context/WorkSpace/WorkSpacepreferenceContext";
import { useContext } from "react";

export const useWorkSpacePreference = () => {
  return useContext(WorkSpacePReferenceContext);
};

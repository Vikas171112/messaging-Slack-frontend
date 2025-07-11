import CreateWorkspaceContext from "@/context/WorkSpace/CreateWorkSpaceContext";
import { useContext } from "react";

export const useCreateWorkSpace = () => {
  return useContext(CreateWorkspaceContext);
};

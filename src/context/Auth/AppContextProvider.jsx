import contextCombine from "@/utils/contextsCombine";
import { AuthcontextProvider } from "./AuthContext";
import { useCreateWorkSpace } from "@/hooks/Workspace/useCreateWorkSpace";
import CreateWorkspaceContext, {
  CreateWorkspaceContextProvider,
} from "../WorkSpace/CreateWorkSpaceContext";

export const AppContextProvider = contextCombine(
  AuthcontextProvider,
  CreateWorkspaceContextProvider
);

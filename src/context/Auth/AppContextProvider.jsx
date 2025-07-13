import contextCombine from "@/utils/contextsCombine";
import { AuthcontextProvider } from "./AuthContext";

import CreateWorkspaceContext, {
  CreateWorkspaceContextProvider,
} from "../WorkSpace/CreateWorkSpaceContext";
import { WorkSpacePreferenceContextProvider } from "../WorkSpace/WorkSpacepreferenceContext";

export const AppContextProvider = contextCombine(
  AuthcontextProvider,
  CreateWorkspaceContextProvider,
  WorkSpacePreferenceContextProvider
);

import contextCombine from "@/utils/contextsCombine";
import { AuthcontextProvider } from "./AuthContext";

import CreateWorkspaceContext, {
  CreateWorkspaceContextProvider,
} from "../WorkSpace/CreateWorkSpaceContext";
import { WorkSpacePreferenceContextProvider } from "../WorkSpace/WorkSpacepreferenceContext";
import { CreateChannelContextProvider } from "../Channel/CreateChannelContext";

export const AppContextProvider = contextCombine(
  AuthcontextProvider,
  CreateWorkspaceContextProvider,
  WorkSpacePreferenceContextProvider,
  CreateChannelContextProvider
);

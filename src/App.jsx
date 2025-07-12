import SiginCard from "./components/organisms/Auth/SiginCard";
import SignupCard from "./components/organisms/Auth/SignupCard";
import AppRoute from "@/Routes";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./context/Auth/AppContextProvider";

import { Modals } from "./components/organisms/Modals/Modals";
import WorkSpaceSideBar from "./components/organisms/WorkSpace/WorkSpaceSideBar";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <AppRoute />
          <Toaster />
          <Modals />
        </AppContextProvider>
      </QueryClientProvider>
      {/* <AppContextProvider>
        <CreateWorkspaceModals />
      </AppContextProvider> */}
    </>
  );
}

export default App;

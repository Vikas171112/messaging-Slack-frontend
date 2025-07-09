import SiginCard from "./components/organisms/Auth/SiginCard";
import SignupCard from "./components/organisms/Auth/SignupCard";
import AppRoute from "@/Routes";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import SignupCard from "./components/organisms/Auth/SignupCard";
import SiginCard from "./components/organisms/Auth/SiginCard";
import NotFound from "./pages/NotFound/NotFound";

function AppRoute() {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupCard />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SiginCard />
          </Auth>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoute;

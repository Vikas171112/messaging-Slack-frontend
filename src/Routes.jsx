import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import SignupCard from "./components/organisms/Auth/SignupCard";
import SiginCard from "./components/organisms/Auth/SiginCard";

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
    </Routes>
  );
}

export default AppRoute;

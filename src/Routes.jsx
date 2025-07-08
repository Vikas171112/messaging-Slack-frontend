import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import SignupCard from "./components/organisms/Auth/SignupCard";
import SiginCard from "./components/organisms/Auth/SiginCard";
import NotFound from "./pages/NotFound/NotFound";
import SignupContainer from "./components/organisms/Auth/signupContainer";
import SignInContainer from "./components/organisms/Auth/SignInContainer";

function AppRoute() {
  return (
    <Routes>
      <Route
        path="/auth/signup"
        element={
          <Auth>
            <SignupContainer />
          </Auth>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SignInContainer />
          </Auth>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoute;

import React, { useState } from "react";
import SiginCard from "./SiginCard";
import { usesignIn } from "@/hooks/apis/auth/useSignin";
import { useNavigate } from "react-router-dom";

function SignInContainer() {
  const [signindetails, setSignindetails] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({
    message: "",
  });
  const navigate = useNavigate();
  const { isError, isPending, isSuccess, error, signinMutation } = usesignIn();
  async function signinFormSubmit(e) {
    e.preventDefault();
    if (!signindetails.email || !signindetails.password) {
      setValidationError({ massage: "Please fill al the fields" });
    }
    try {
      // await signinMutation({
      //   email: signindetails.email,
      //   password: signindetails.password,
      // });
      navigate("/workspaces");
      console.log("form Submitted suucesfully", signindetails);
    } catch (apiError) {
      console.error("API Error during signin:", apiError);
      setValidationError({
        message: error?.message || "Signup failed. Please try again.",
      });
    }
  }
  return (
    <SiginCard
      signindetails={signindetails}
      setSignindetails={setSignindetails}
      onFormSubmit={signinFormSubmit}
      validationError={validationError}
      isPending={isPending}
      isSuccess={isSuccess}
      isError={isError}
      error={error}
    />
  );
}

export default SignInContainer;

import React, { useState } from "react";
import SignupCard from "@/components/organisms/Auth/SignupCard";
import { useSignup } from "@/hooks/apis/auth/useSignup";

function SignupContainer() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    username: "",
  });
  const [validationError, setValidationError] = useState({ message: "" });
  const { isPending, isSuccess, error, signupMutation, isError } = useSignup();

  async function onFormSubmit(e) {
    e.preventDefault();

    setValidationError({ message: "" });

    if (
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.confirmPassword ||
      !signupDetails.username
    ) {
      setValidationError({ message: "All Fields are Required" });

      return;
    }

    if (signupDetails.password !== signupDetails.confirmPassword) {
      setValidationError({ message: "Passwords do not match" });
      return;
    }
    try {
      await signupMutation({
        email: signupDetails.email,
        password: signupDetails.password,
        confirmPassword: signupDetails.confirmPassword,
        username: signupDetails.username,
      });
      console.log("Form Submitted successfully!", signupDetails);
    } catch (apiError) {
      console.error("API Error during signup:", apiError);
      setValidationError({
        message: error?.message || "Signup failed. Please try again.",
      });
    }
  }

  return (
    <SignupCard
      signupDetails={signupDetails}
      setSignupDetails={setSignupDetails}
      onSubmit={onFormSubmit}
      validationError={validationError}
      isPending={isPending}
      isSuccess={isSuccess}
      apiError={error}
    />
  );
}

export default SignupContainer;

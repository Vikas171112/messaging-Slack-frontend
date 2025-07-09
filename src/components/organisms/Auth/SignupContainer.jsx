import React, { useState } from "react";
import SignupCard from "@/components/organisms/Auth/SignupCard";

function SignupContainer() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    username: "",
  });
  const [validationError, setValidationError] = useState({ message: "" });

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

    console.log("Form Submitted successfully!", signupDetails);
  }

  return (
    <SignupCard
      signupDetails={signupDetails}
      setSignupDetails={setSignupDetails}
      onSubmit={onFormSubmit}
      validationError={validationError}
    />
  );
}

export default SignupContainer;

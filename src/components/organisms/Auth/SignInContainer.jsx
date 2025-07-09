import React, { useState } from "react";
import SiginCard from "./SiginCard";

function SignInContainer() {
  const [signindetails, setSignindetails] = useState({
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState({
    message: "Some error",
  });
  async function signinFormSubmit(e) {
    e.preventDefault();
    if (!signindetails.email || !signindetails.password) {
      setValidationError({ massage: "Please fill al the fields" });
    }
    console.log("form Submitted suucesfully", signindetails);
  }
  return (
    <SiginCard
      signindetails={signindetails}
      setSignindetails={setSignindetails}
      onFormSubmit={signinFormSubmit}
      validationError={validationError}
    />
  );
}

export default SignInContainer;

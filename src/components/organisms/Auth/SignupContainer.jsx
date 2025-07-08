import React, { useState } from "react";
import SignupCard from "@/components/organisms/Auth/SignupCard";

function SignupContainer() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <SignupCard
      signupDetails={signupDetails}
      setSignupDetails={setSignupDetails}
    />
  );
}

export default SignupContainer;

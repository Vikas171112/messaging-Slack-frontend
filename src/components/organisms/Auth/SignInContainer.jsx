import React, { useState } from "react";
import SiginCard from "./SiginCard";

function SignInContainer() {
  const [signindetails, setSignindetails] = useState({
    email: "",
    password: "",
  });
  return (
    <SiginCard
      signindetails={signindetails}
      setSignindetails={setSignindetails}
    />
  );
}

export default SignInContainer;

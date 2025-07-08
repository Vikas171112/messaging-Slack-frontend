import React from "react";

function Auth({ children }) {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-tr from-emerald-100 via-green-200 to-green-300">
      {children}
    </div>
  );
}

export default Auth;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
// useState is not directly used in SiginCard, it's passed via props, so you can remove it from here if you like
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SiginCard({
  signindetails,
  setSignindetails,
  onFormSubmit,
  validationError,
}) {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        {validationError.message && (
          <div
            className="
              bg-destructive/15  /* Light background for the error message */
              text-destructive   /* Default text color for errors (usually defined in shadcn) */
              p-3                /* Padding inside the error box */
              rounded-md         /* Rounded corners */
              mt-2               /* Margin top to separate from description */
              text-sm            /* Smaller font size for error text */
              font-medium        /* Slightly bolder text */
              flex items-center  /* For vertical alignment if adding an icon */
              justify-center     /* For horizontal centering of content */
              text-center        /* Ensures the text itself is centered */
            "
          >
            <p>{validationError.message}</p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {/* The form's onSubmit is correct here */}
        <form onSubmit={onFormSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={signindetails.email}
                onChange={(e) =>
                  setSignindetails({ ...signindetails, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={signindetails.password}
                onChange={(e) => {
                  setSignindetails({
                    ...signindetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          {/* MOVE THE LOGIN BUTTON INSIDE THE FORM HERE */}
          <Button type="submit" className="w-full mt-6">
            {" "}
            {/* Added mt-6 for spacing */}
            Login
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-1">
        {/* The Google button can remain here or also be inside the form if its action is part of the form submission process */}
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
      <Separator />
      <p className="p-4 text-center text-sm text-muted-foreground">
        {" "}
        {/* Added some utility classes for consistent styling */}
        New to Slack?{" "}
        <span
          className="text-blue-500 cursor-pointer font-semibold hover:underline" // Removed redundant text-center text-lg
          onClick={() => {
            navigate("/auth/signup");
          }}
        >
          Signup
        </span>
      </p>
    </Card>
  );
}

export default SiginCard;

// SignInContainer.jsx remains exactly the same, it's correct.
// import React, { useState } from "react";
// import SiginCard from "./SiginCard";

// function SignInContainer() {
//   const [signindetails, setSignindetails] = useState({
//     email: "",
//     password: "",
//   });
//   async function signinFormSubmit(e) {
//     e.preventDefault();
//     console.log("form Submitted successfully", signindetails);
//     // Add your actual login logic here
//   }
//   return (
//     <SiginCard
//       signindetails={signindetails}
//       setSignindetails={setSignindetails}
//       onFormSubmit={signinFormSubmit}
//     />
//   );
// }

// export default SignInContainer;

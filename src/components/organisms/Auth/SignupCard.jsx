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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupCard() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>
          Enter your Email to Create Your Account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
          <div className="flex flex-col gap-4">
            <div className="grid ">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={signupDetails.email}
                onChange={(e) =>
                  setSignupDetails({ ...signupDetails, email: e.target.value })
                }
              />
            </div>
            <div className="grid">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                // placeholder="m@example.com"
                required
                value={signupDetails.password}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid">
              <Label htmlFor="password"> Confirm Password</Label>
              <Input
                id="password"
                type="password"
                // placeholder="m@example.com"
                required
                value={signupDetails.password}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                // placeholder="m@example.com"
                required
                value={signupDetails.username}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    username: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col ">
        <Button type="submit" className="w-full">
          Continue
        </Button>
        <Button variant="outline" className="w-full">
          Signup with Google
        </Button>
      </CardFooter>{" "}
      <Separator />
      <p>
        Already have an account?
        <span
          onClick={() => {
            navigate("/auth/signin");
          }}
          className="text-blue-500 cursor-pointer text-center text-lg font-semibold hover:underline"
        >
          Signin
        </span>
      </p>
    </Card>
  );
}

export default SignupCard;

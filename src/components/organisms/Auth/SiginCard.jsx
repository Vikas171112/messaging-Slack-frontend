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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SiginCard({ signindetails, setSignindetails }) {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-1">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
      <Separator />
      <p>
        New to Slack?
        <span
          className="text-blue-500 cursor-pointer text-center text-lg font-semibold hover:underline"
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

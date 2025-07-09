// SignupCard.jsx
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
import { useNavigate } from "react-router-dom";

function SignupCard({
  signupDetails,
  setSignupDetails,
  onSubmit,
  validationError,
}) {
  const navigate = useNavigate();
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>
          Enter your Email to Create Your Account
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
        <form onSubmit={onSubmit}>
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
              <Label htmlFor="confirmPassword"> Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={signupDetails.confirmPassword}
                onChange={(e) =>
                  setSignupDetails({
                    ...signupDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
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

            <Button type="submit" className="w-full mt-2">
              Continue
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full">
          Signup with Google
        </Button>
      </CardFooter>
      <Separator />
      <p className="p-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <span
          onClick={() => {
            navigate("/auth/signin");
          }}
          className="text-blue-500 cursor-pointer font-semibold hover:underline"
        >
          Sign In
        </span>
      </p>
    </Card>
  );
}

export default SignupCard;

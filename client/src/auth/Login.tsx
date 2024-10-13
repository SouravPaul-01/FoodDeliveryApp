import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//1st process to set type
// interface LoginInputState {
//   email: string;
//   password: string;
// }
// type LoginInputState = {
//   email: string;
//   password: string;
// };

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    //? --> Form Validation start here
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<LoginInputState>);
      return;
    }
    //? --> Form Validation end here

    //? --> Login api implementation start here

    console.log(input);
  };

  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="text-3xl font-bold ">Sign in</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <LockKeyhole className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.password}</span>
            )}
          </div>
        </div>
        <div className="mb-6">
          {loading ? (
            <Button
              disabled
              className="w-full bg-button hover:bg-hoverButtonColor"
            >
              <Loader2 className="mr-2 w-5 h-5 animate-spin " />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-button hover:bg-hoverButtonColor"
            >
              Sign in
            </Button>
          )}
        </div>
        <div className="mb-3 text-center">
          <Link
            to={"/ForgotPassword"}
            className="text-blue-500 hover:underline "
          >
            Forgot Password?
          </Link>
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <Link to={"/SingUp"} className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SingUpInputState, userSingUpSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//1st process to set type
// interface LoginInputState {
//   email: string;
//   password: string;
// }
// type SingUpInputState = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// };

const SingUp = () => {
  const [input, setInput] = useState<SingUpInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, serError] = useState<Partial<SingUpInputState>>({});
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    //?/ Form Validation Start
    const result = userSingUpSchema.safeParse(input);
    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors;
      serError(fieldError as Partial<SingUpInputState>);
      return;
    }
    //?/ Form Validation End
    //?/ SingUp api implementation start

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
          <h1 className="text-3xl font-bold ">Sign Up</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <User className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
            {error && (
              <span className="text-sm text-red-500">{error.fullname}</span>
            )}
          </div>
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
              <span className="text-sm text-red-500">{error.email}</span>
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
              <span className="text-sm text-red-500">{error.password}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Contact"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            />
            <Phone className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
            {error && (
              <span className="text-sm text-red-500">{error.contact}</span>
            )}
          </div>
        </div>
        <div className="mb-10">
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
              Sign Up
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <Link to={"/Login"} className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SingUp;

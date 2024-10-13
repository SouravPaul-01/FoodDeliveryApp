import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const loading = false;
  return (
    <div className="flex items-center justify-center  min-h-screen w-full">
      <form className="flex flex-col gap-5  md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 ">Reset Password</h1>
          <p className="text-sm text-gray-600">Enter Your New Password Here </p>
        </div>
        <div className="relative">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your email"
            className="focus-visible:ring-1 pl-10"
          />
          <LockKeyhole className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
        </div>
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
            Send Reset Link
          </Button>
        )}
        <span className="text-sm text-center text-gray-600">
          Back to{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ResetPassword;

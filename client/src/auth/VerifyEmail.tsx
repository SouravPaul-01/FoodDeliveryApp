import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  // const navigate = useNavigate();
  const loading = false;

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next field if it's not the last field
      if (index < 5 && value !== "") {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // Clear the current input
      if (newOtp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to the previous input field if empty and delete
        inputRef.current[index - 1].focus();
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center ">
          <h1 className="text-3xl font-bold">Verify Email</h1>
          <p className="text-sm text-gray-500">
            Enter your 6 digit code sent to your email address
          </p>
        </div>
        <form action="">
          <div className="flex items-center justify-center gap-4">
            {otp.map((letter: string, idx: number) => (
              <Input
                key={idx}
                ref={(element) => (inputRef.current[idx] = element)}
                type="text"
                maxLength={1}
                value={letter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(idx, e.target.value)
                }
                // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                //   handleKeyDown(idx, e)
                // }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(idx, e)
                }
                className="md:w-12 w-8 h-15 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          {loading ? (
            <Button
              disabled
              className="bg-button hover:bg-hoverButtonColor mt-6 w-full"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              please wait
            </Button>
          ) : (
            <Button className="bg-button hover:bg-hoverButtonColor mt-6 w-full">
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;

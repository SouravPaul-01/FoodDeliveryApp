import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "@/assets/hero_pizza.png";
import { useNavigate } from "react-router-dom";

const HereSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            OrderFood Anywhere & Anytime
          </h1>
          <p className="text-gray-500">
            Hey! our delicious food is waiting for you. We always near to you
          </p>
        </div>
        <div className="relative flex items-center gap-2">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurants by name, city& country"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="w-full focus-visible:ring-1 pl-10 shadow-lg"
          />
          <Search className="absolute inset-y-2 left-2.5 text-gray-400 pointer-events-none" />
          <Button
            onClick={() => {
              navigate(`/search/${searchText}`);
            }}
            className="bg-button hover:bg-hoverButtonColor"
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="food"
          className="rounded-lg object-cover max-h-[500px] "
        />
      </div>
    </div>
  );
};

export default HereSection;

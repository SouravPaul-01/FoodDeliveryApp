import { Loader2, Locate, Mail, MapPin, MapPinIcon, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectProfilePicture, setSelectProfilePicture] = useState<string>("");

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update profile Api implementation Start here
  };
  const loading = false;

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:h-28 md:w-28  h-20 w-20 ">
            <AvatarImage src={selectProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white h-8 w-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Locate className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent border-none outline-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button disabled className="bg-button hover:bg-hoverButtonColor">
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button className="bg-button hover:bg-hoverButtonColor">
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;

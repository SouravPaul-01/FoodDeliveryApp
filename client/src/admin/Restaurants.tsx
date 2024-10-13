import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  restaurantFormSchema,
  RestaurantFormSchema,
} from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const Restaurants = () => {
  const Loading = false;
  const PresentResuaurant = false;
  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });
  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});
  const changeEventHanndler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = restaurantFormSchema.safeParse(input);
    if (!result.success) {
      const fildError = result.error.formErrors.fieldErrors;
      setErrors(fildError as Partial<RestaurantFormSchema>);
      return;
    }
    // Api call start here
  };
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5"> Add Restaurants</h1>
          <form onSubmit={submitHandler}>
            <div className="grid md:grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Details*/}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  value={input.restaurantName}
                  onChange={changeEventHanndler}
                  placeholder="Enter Restaurant Name"
                />
                {errors?.restaurantName && (
                  <p className="text-xs font-medium text-red-500">
                    {errors?.restaurantName}
                  </p>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeEventHanndler}
                  placeholder="Enter Restaurant city"
                />
                {errors?.city && (
                  <p className="text-xs font-medium text-red-500">
                    {errors?.city}
                  </p>
                )}
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  value={input.country}
                  onChange={changeEventHanndler}
                  placeholder="Enter Restaurant country"
                />
                {errors?.country && (
                  <p className="text-xs font-medium text-red-500">
                    {errors?.country}
                  </p>
                )}
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHanndler}
                  placeholder="Enter delivery time"
                />
                {errors?.deliveryTime && (
                  <p className="text-xs font-medium text-red-500">
                    {errors?.deliveryTime}
                  </p>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  onChange={(e) => {
                    setInput({ ...input, cuisines: e.target.value.split(",") });
                  }}
                  placeholder="Enter Restaurant cuisines"
                />
                {errors?.cuisines && (
                  <p className="text-xs font-medium text-red-500">
                    {errors?.cuisines}
                  </p>
                )}
              </div>
              <div>
                <Label>Upload Restauranst Image</Label>
                <Input
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                  type="file"
                  accept="image/*"
                  name="imageFile"
                />
                {errors && (
                  <p className="text-xs font-medium text-red-500">
                    {errors.imageFile?.name || "Image is required"}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 w-fit">
              {Loading ? (
                <Button
                  className="bg-button hover:bg-hoverButtonColor"
                  disabled
                >
                  <Loader2 className="mr-2 w-5 h-5 animate-spin " />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-button hover:bg-hoverButtonColor">
                  {PresentResuaurant
                    ? "Update restaurant"
                    : "Add new restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

import { Timer } from "lucide-react";
import { Badge } from "./ui/badge";
import AvailableMenu from "./AvailableMenu";

const RestaurantsDetails = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-71">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="food"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Restaurants Details</h1>
            <div className="flex gap-2 my-2">
              {["Biriyani", "Momos", "Jalebi"].map(
                (cuisines: string, idx: number) => (
                  <Badge key={idx}>{cuisines}</Badge>
                )
              )}
            </div>
            <div className="flex  flex-col md:flex-row   gap-2 my-5">
              <Timer className="w-5 h-5" />
              <h1 className="flex items-center gap-2 font-medium">
                Delivery Time: <span className="text-[#D19254]">35min</span>
              </h1>
            </div>
          </div>
        </div>
        <AvailableMenu />
      </div>
    </div>
  );
};

export default RestaurantsDetails;

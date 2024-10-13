import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Orders = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-900 daark:text-white mb-10">
        Orders Overview
      </h1>
      <div className="flex flex-col md:flex-row justify-between itmes-start sm:items-center bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex-1 mb-6 sm:mb-0">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Lorem
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            <span className="font-semibold mr1">Address: </span>
            Lorem, ipsum dolor.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            <span className="font-semibold mr1">Total Amount: </span>
            100
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <Label className="  block text-sm font-medium text-gray-600 dark:text-gray-400">
            Order Status
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
              <SelectContent>
                <SelectGroup>
                  {["Pending", "Preparing", "OutForDelivery", "Delivered"].map(
                    (status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Orders;

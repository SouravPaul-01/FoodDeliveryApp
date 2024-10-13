import { IndianRupee } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Orders = () => {
  const orders = [1];
  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-3xl text-gray-700 dark:text-gray-200">
          No Orders Found!
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="tex2xl font-semibold text-gray-700 dark:text-gray-200">
            Order Status{" "}
            <span className="text-[#FF5A5A]">{"Conformed".toUpperCase()}</span>
          </h1>
        </div>
        <div>
          <h2 className="text-lg font-semibold to-gray-700 dark:text-gray-300 mb-4">
            Order Details
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt="Avatar"
                />
                <h3 className="text-gray-900 dark:text-white font-medium">
                  Pizza Hut
                </h3>
              </div>
              <div className="text-right">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee />
                  <p className="ml-1">100</p>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <Link to="/cart">
              <Button className="bg-button hover:bg-hoverButtonColor w-full">
                Contunue Shoping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

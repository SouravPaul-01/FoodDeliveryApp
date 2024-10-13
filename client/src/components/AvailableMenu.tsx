import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&f
          it=crop&w=870&q=80"
            alt="food"
            className="w-full object-cover rounded-lg"
          />
          <CardContent className="p-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Biriyani</h1>
            <p className="text-sm text-gray-500 mt-2mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h3 className="text-lg font-semibold mt-2">
              Price: <span className="text-lg font-semibold text-[#D19254]">₹ 100</span>
            </h3>
          </CardContent>
        <CardFooter className="p-4">
          <Button className=" w-full bg-button hover:bg-hoverButtonColor">Add to Cart</Button>
        </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;

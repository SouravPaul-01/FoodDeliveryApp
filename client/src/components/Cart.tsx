import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfromPage from "./CheckoutConfromPage";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant={"link"}>Clear All</Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Items</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar>
                  <AvatarImage></AvatarImage>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Chicken</TableCell>
              <TableCell>80</TableCell>
              <TableCell>
                <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-700 shadow-md">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full bg-gray-50"
                  >
                    <Minus />
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="font-bold rounded-full border-none"
                    disabled
                  >
                    1
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full bg-button hover:bg-hoverButtonColor"
                  >
                    <Plus />
                  </Button>
                </div>
              </TableCell>
              <TableCell>80</TableCell>
              <TableCell className="text-right">
                <Button
                  size={"sm"}
                  className="bg-button hover:bg-hoverButtonColor"
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow className="text-2xl font-bold">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">80</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-end my-5">
          <Button
            onClick={() => setOpen(true)}
            size={"lg"}
            className="bg-button hover:bg-hoverButtonColor"
          >
            Checkout
          </Button>
        </div>
      </div>
      <div>
        <CheckoutConfromPage open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Cart;

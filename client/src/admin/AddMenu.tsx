import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import EditMenu from "./EditMenu";

const AddMenu = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [error, setError] = useState<Partial<MenuFormSchema>>({});
  const [formData, setFormData] = useState<any>({
    name: "",
    price: 0,
    description: "",
    image: undefined,
  });
  const Loading = false;

  const menu = [
    {
      name: "Pizza",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sint.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    const result = menuSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      return;
    }
    // Api implementation
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menu
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button
              onClick={() => setOpen(true)}
              className="bg-button hover:bg-hoverButtonColor"
            >
              <Plus className="mr-1" />
              Add Menu
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-xl font-semibold">
              Add New Menu
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500 mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </DialogDescription>
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={changeEventHandler}
                  placeholder="Name"
                />
                {error.name && (
                  <p className=" text-xs font-medium text-red-500">
                    {error.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={changeEventHandler}
                />
                {error.name && (
                  <p className=" text-xs font-medium text-red-500">
                    {error.description}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label>Price (Rs.)</Label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={changeEventHandler}
                  placeholder="Price"
                />
                {error.name && (
                  <p className=" text-xs font-medium text-red-500">
                    {error.price}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label>Upload Image</Label>
                <Input
                  type="file"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                  name="image"
                />
                {error.name && (
                  <p className=" text-xs font-medium text-red-500">
                    {error.image?.name || "Image is required"}
                  </p>
                )}
              </div>
              <DialogFooter>
                {Loading ? (
                  <Button
                    disabled
                    className="w-full bg-button hover:bg-hoverButtonColor"
                  >
                    <Loader2 className="mr-2 w-5 h-5 animate-spin " />
                    Please Wait
                  </Button>
                ) : (
                  <Button className="w-full bg-button hover:bg-hoverButtonColor">
                    Add Menu
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6 space-y-4">
        {menu.map((menu: any, idx: number) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:menu-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="md:h-24 md:w-24 w-full h-16 object-cover rounded-lg shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-gray-500">{menu.description}</p>
              <h2 className="text-md font-semibold mt-2">
                Price:
                <span className="text-[#D19254]"> {menu.price}</span>
              </h2>
            </div>
            <Button
              onClick={() => {
                setSelectedMenu(menu); // Pass the correct item
                setEditOpen(true); // Open the dialog
              }}
              size={"sm"}
              className="md:w-16 mt-6 bg-button hover:bg-hoverButtonColor"
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};

export default AddMenu;

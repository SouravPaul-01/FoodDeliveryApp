import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export type filterOptionState = {
  id: string;
  label: string;
}[];

const filterOptions: filterOptionState = [
  { id: "Burger", label: "Burger" },
  { id: "Thali", label: "Thali" },
  { id: "Momos", label: "Momos" },
  { id: "Biriyani", label: "Biriyani" },
];
const FilterPage = () => {
  const appliedFilterHandler = (label: string) => {
    alert(label);
  };
  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Filter by cuisine</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex item-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            onClick={() => appliedFilterHandler(option.label)}
          />
          <label
            htmlFor={option.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;

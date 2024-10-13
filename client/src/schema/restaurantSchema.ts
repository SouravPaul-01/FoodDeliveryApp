import { z } from "zod";

export const restaurantFormSchema = z.object({
  restaurantName: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  deliveryTime: z.number().min(0, "Delivery time can't be negative"),
  cuisines: z
    .array(z.string().min(1, "Cuisine is required"))
    .min(1, "Cuisine is required"),
  imageFile: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, { message: "Image is required" }),
});

export type RestaurantFormSchema = z.infer<typeof restaurantFormSchema>;

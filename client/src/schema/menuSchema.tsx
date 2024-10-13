import { z } from "zod";
export const menuSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price can't be negative"),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size !== 0, { message: "Image is required" }),
});

export type MenuFormSchema = z.infer<typeof menuSchema>;

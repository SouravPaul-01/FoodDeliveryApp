import { z } from "zod";

export const userSingUpSchema = z.object({
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must have at least 6 characters"),
  contact: z.string().min(10, "Contact must have at least 10 digits"),
});
export type SingUpInputState = z.infer<typeof userSingUpSchema>;
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must have at least 6 characters"),
});
export type LoginInputState = z.infer<typeof userLoginSchema>;

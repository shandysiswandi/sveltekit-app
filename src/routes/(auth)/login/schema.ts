import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
    ),
});

export type FormSchema = typeof formSchema;

import { z } from "zod";

export const forgotSchema = z.object({
  email: z.string().email("Enter valid email"),
});

export type ForgotFormData = z.infer<typeof forgotSchema>;
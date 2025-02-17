import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must not exceed 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special characters");


export const SignupSchema=z
.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,'Minimume character must be 6')
})
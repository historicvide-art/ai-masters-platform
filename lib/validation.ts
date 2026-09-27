// lib/validation.ts - Form validation schemas

import { z } from 'zod';

export const ApplicationFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Name must be less than 255 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),
  background: z
    .enum(['cs', 'math', 'other-stem', 'business', 'research', 'other'], {
      errorMap: () => ({ message: 'Please select a valid background' }),
    }),
  statement: z
    .string()
    .min(50, 'Statement must be at least 50 characters')
    .max(2000, 'Statement must be less than 2000 characters')
    .trim(),
});

export type ApplicationFormData = z.infer<typeof ApplicationFormSchema>;

export const AdminLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address').toLowerCase().trim(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type AdminLoginData = z.infer<typeof AdminLoginSchema>;

export const UpdateApplicationSchema = z.object({
  status: z.enum(['submitted', 'reviewing', 'accepted', 'rejected', 'waitlisted'], {
    errorMap: () => ({ message: 'Please select a valid status' }),
  }),
  notes: z.string().max(2000, 'Notes must be less than 2000 characters').optional(),
});

export type UpdateApplicationData = z.infer<typeof UpdateApplicationSchema>;

// userSchema.ts
import { z } from "zod";

export const userSchema = z.object({
  userFullName: z.string().min(6, "Имя минимум 6 символов"),
  email: z.string().email("Введите корректный email"),
  phoneNumber: z.string().min(10, "Минимум 10 цифр"),
  company: z.string().optional(),
  address: z.string().min(10, "Минимум 10 символов"),
});

// 👇 Экспортируем тип из схемы
export type UserFormData = z.infer<typeof userSchema>;

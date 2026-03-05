import { z } from "zod";

export const userSchema = z.object({
  userFullName: z
    .string()
    .min(6, "Имя и фамилия пользователя минимум 6 символов"),
  email: z.string().email("Введите корректный email"),
  phoneNumber: z
    .string()
    .min(10, "Номер должен быть минимум 10 цифр")
    .max(15, "Номер слишком длинный")
    .regex(/^\+?[0-9\s\-\(\)]+$/, "Некорректный формат номера"),
  company: z.string().min(2, "Минимум 2 символа"),
  address: z.string().min(10, "Минимум 10 символов"),
});

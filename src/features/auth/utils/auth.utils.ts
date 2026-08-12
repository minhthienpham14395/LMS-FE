import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email.")
    .email("Email không hợp lệ."),
  password: z
    .string()
    .min(1, "Vui lòng nhập mật khẩu.")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự."),
});

export const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Vui lòng nhập họ và tên."),
    email: z
      .string()
      .trim()
      .min(1, "Vui lòng nhập email.")
      .email("Email không hợp lệ."),
    password: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự."),
    confirmPassword: z.string().min(1, "Vui lòng xác nhận mật khẩu."),
    acceptTerms: z
      .boolean()
      .refine((value) => value, "Bạn cần đồng ý với điều khoản."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không khớp.",
  });

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email.")
    .email("Email không hợp lệ."),
});

export type LoginFormValues = z.output<typeof loginSchema>;
export type RegisterFormValues = z.output<typeof registerSchema>;
export type ForgotPasswordFormValues = z.output<typeof forgotPasswordSchema>;

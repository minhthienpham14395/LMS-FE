export interface AuthUser {
  id?: string | number;
  email: string;
  name?: string;
  fullName?: string;
  role?: string;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

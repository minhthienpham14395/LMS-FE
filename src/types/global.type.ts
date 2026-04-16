// Global TypeScript types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
}

export interface Student {
  id: number;
  name: string;
  grade: string;
  avatar?: string;
}
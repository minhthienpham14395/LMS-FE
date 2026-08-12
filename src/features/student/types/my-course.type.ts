export interface StudentCourse {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  nextLesson: string;
  progress: number;
  status: "active" | "completed";
  lastActivity: string;
}

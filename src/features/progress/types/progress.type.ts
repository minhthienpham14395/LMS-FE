export interface ProgressMetricCourse {
  id: string | number;
  title: string;
  completedLessons: number;
  totalLessons: number;
  progress: number;
}

export interface SkillProgressItem {
  name: string;
  score: number;
}

export interface RecentAchievement {
  id: string | number;
  title: string;
  description?: string;
  earnedAt?: string;
}

export interface ProgressOverview {
  lessonsCompleted: number;
  studyTimeLabel: string;
  averageQuizScore: number;
  streak: number;
  courses: ProgressMetricCourse[];
  skills: SkillProgressItem[];
  achievements?: RecentAchievement[];
}

export interface CourseProgressDetail extends ProgressMetricCourse {
  lessons?: Array<{
    id: string | number;
    title: string;
    completed: boolean;
    score?: number;
  }>;
}

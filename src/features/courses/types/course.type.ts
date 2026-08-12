export interface Course {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  rating: number | string;
  thumbnail: string;
  outcomes?: string[];
  instructor?: string;
  lessonsCount?: number;
  enrolledCount?: number;
}

export interface CourseFiltersState {
  q: string;
  level: string;
  category: string;
  sort: string;
  page: number;
}

export interface CourseListResponse {
  items: Course[];
  page: number;
  total?: number;
  totalPages?: number;
  hasMore?: boolean;
}

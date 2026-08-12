export type LandingCourse = {
  id: string;
  slug: string;
  title: string;
  provider: string;
  image: string;
  category?: string;
  badges?: string[];
  credential: string;
  degreePath: string;
};

export type CourseGroup = {
  id: string;
  title: string;
  courses: LandingCourse[];
};

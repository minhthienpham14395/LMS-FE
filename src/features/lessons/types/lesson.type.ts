export type LessonId = number | string;

export interface LessonOutlineItem {
  id: LessonId;
  title: string;
  completed?: boolean;
  duration?: string;
  locked?: boolean;
}

export interface LessonOutlineModule {
  id: LessonId;
  title: string;
  lessons: LessonOutlineItem[];
}

export interface CourseOutline {
  courseId?: LessonId;
  courseTitle?: string;
  currentLessonId?: LessonId;
  modules: LessonOutlineModule[];
}

export interface VocabularyItem {
  word: string;
  pronunciation?: string;
  definition: string;
}

export type LessonBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      level?: 2 | 3 | 4;
      text: string;
    }
  | {
      type: "vocabulary";
      title?: string;
      items: VocabularyItem[];
    }
  | {
      type: "quiz";
      quizId: LessonId;
    };

export interface LessonNavigationItem {
  id: LessonId;
  title?: string;
}

export interface Lesson {
  id: LessonId;
  courseId?: LessonId;
  moduleTitle?: string;
  title: string;
  videoUrl?: string;
  audioUrl?: string;
  blocks: LessonBlock[];
  previous?: LessonNavigationItem | null;
  next?: LessonNavigationItem | null;
}

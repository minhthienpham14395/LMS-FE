export type ProfileLevel = "beginner" | "intermediate" | "advanced";

export interface LearnerProfile {
  id?: string | number;
  fullName: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  learningGoal?: string;
  level: ProfileLevel;
}

export interface AvatarUploadResponse {
  avatarUrl?: string;
  profile?: LearnerProfile;
}

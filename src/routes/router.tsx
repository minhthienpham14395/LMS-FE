import { lazy, Suspense, type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import PublicLayout from "../layouts/PublicLayout";
import StudentLayout from "../layouts/StudentLayout";
import ProtectedRoute from "./ProtectedRoute";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const CourseDetailPage = lazy(() => import("../pages/CourseDetailPage"));
const CoursesPage = lazy(() => import("../pages/CoursesPage"));
const StudentDashboardPage = lazy(() => import("../pages/student/DashboardPage"));
const MyCoursesPage = lazy(() => import("../pages/student/MyCoursesPage"));
const LearningPage = lazy(() => import("../pages/student/LearningPage"));
const ProfilePage = lazy(() => import("../pages/student/ProfilePage"));
const ProgressPage = lazy(() => import("../pages/student/ProgressPage"));
const NotFoundPage = lazy(() => import("../pages/errors/NotFoundPage"));
const UnauthorizedPage = lazy(() => import("../pages/errors/UnauthorizedPage"));

function PageSkeleton() {
  return (
    <div
      role="status"
      aria-label="Đang tải trang"
      className="grid min-h-[50dvh] place-items-center px-4 py-12"
    >
      <div className="w-full max-w-3xl space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
        <div className="h-10 w-4/5 animate-pulse rounded bg-slate-100" />
        <div className="h-24 w-full animate-pulse rounded bg-slate-100" />
      </div>
    </div>
  );
}

function RouteLoader({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageSkeleton />}>{children}</Suspense>;
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<RouteLoader><LoginPage /></RouteLoader>} />
        <Route
          path="/register"
          element={
            <RouteLoader>
              <RegisterPage />
            </RouteLoader>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RouteLoader>
              <ForgotPasswordPage />
            </RouteLoader>
          }
        />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<RouteLoader><LandingPage /></RouteLoader>} />
        <Route
          path="/landing"
          element={
            <RouteLoader>
              <LandingPage />
            </RouteLoader>
          }
        />
        <Route
          path="/courses"
          element={
            <RouteLoader>
              <CoursesPage />
            </RouteLoader>
          }
        />
        <Route
          path="/courses/:slug"
          element={
            <RouteLoader>
              <CourseDetailPage />
            </RouteLoader>
          }
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="/student/learn/:courseId"
          element={
            <RouteLoader>
              <LearningPage />
            </RouteLoader>
          }
        />
        <Route
          path="/student/learn/:courseId/:lessonId"
          element={
            <RouteLoader>
              <LearningPage />
            </RouteLoader>
          }
        />
        <Route element={<StudentLayout />}>
          <Route
            path="/student"
            element={
              <RouteLoader>
                <StudentDashboardPage />
              </RouteLoader>
            }
          />
          <Route
            path="/student/courses"
            element={
              <RouteLoader>
                <MyCoursesPage />
              </RouteLoader>
            }
          />
          <Route
            path="/student/progress"
            element={
              <RouteLoader>
                <ProgressPage />
              </RouteLoader>
            }
          />
          <Route
            path="/student/profile"
            element={
              <RouteLoader>
                <ProfilePage />
              </RouteLoader>
            }
          />
        </Route>
      </Route>

      <Route
        path="/unauthorized"
        element={
          <RouteLoader>
            <UnauthorizedPage />
          </RouteLoader>
        }
      />
      <Route
        path="*"
        element={
          <RouteLoader>
            <NotFoundPage />
          </RouteLoader>
        }
      />
    </Routes>
  );
};

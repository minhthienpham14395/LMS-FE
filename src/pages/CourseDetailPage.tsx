import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CardStyles, getIconComponent } from "../components/landing/Card";
import { allCourses } from "../data/courseData";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const accentColor = "#3085c7";
  const primaryColor = "#164789";
  const parsedCourseId = Number(courseId);
  const course = allCourses.find((item) => item.id === parsedCourseId);

  if (!courseId || Number.isNaN(parsedCourseId) || !course) {
    return <Navigate to="/landing" replace />;
  }

  return (
    <>
      <style>{`
        ${CardStyles}

        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .detail-animate {
          animation: floatUp 0.55s ease-out both;
        }
      `}</style>

      <div className="min-h-screen bg-[#f7f8fa] text-gray-900">
        <Navbar
          accentColor={accentColor}
          isLoggedIn={false}
          onLoginClick={() => console.log("Navigate to login")}
          onSignupClick={() => console.log("Navigate to signup")}
        />

        <main className="px-6 pt-28 pb-12 md:px-10 md:pt-32 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/landing"
              className="detail-animate inline-flex items-center gap-2 rounded-full border border-[#3085c7]/20 bg-white px-4 py-2 text-sm font-semibold text-[#164789] transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              ← Quay lại danh sách khóa học
            </Link>

            <section className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div
                className="detail-animate rounded-[32px] border border-white/70 bg-white p-8 shadow-[0_20px_60px_rgba(48,133,199,0.12)]"
                style={{ animationDelay: "0.08s" }}
              >
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-4 py-1 text-sm font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {course.badge}
                  </span>
                  <span className="rounded-full bg-[#eef5fb] px-4 py-1 text-sm font-semibold text-[#164789]">
                    {course.groupTitle}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                  <div className="rounded-[28px] bg-gradient-to-br from-[#edf6ff] via-white to-[#f6fbff] p-10">
                    <div className="flex min-h-[240px] items-center justify-center rounded-[24px] border border-dashed border-[#3085c7]/20 bg-white/70">
                      {getIconComponent(course.icon)}
                    </div>
                  </div>

                  <div>
                    <h1 className="text-4xl font-black text-gray-900 md:text-5xl">
                      {course.title}
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                      {course.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                        Thời lượng: {course.duration}
                      </span>
                      <span className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                        Hình thức: {course.type}
                      </span>
                      <span className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                        Độ tuổi: {course.age}
                      </span>
                    </div>

                    <div className="mt-8 flex items-end gap-4">
                      <span
                        className="text-4xl font-black"
                        style={{ color: accentColor }}
                      >
                        {course.currentPrice}
                      </span>
                      <span className="pb-1 text-lg text-gray-400 line-through">
                        {course.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <aside
                className="detail-animate space-y-6 rounded-[32px] border border-white/70 bg-white p-8 shadow-[0_20px_60px_rgba(48,133,199,0.12)]"
                style={{ animationDelay: "0.16s" }}
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#3085c7]">
                    Course Detail
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-gray-900">
                    Lộ trình phù hợp cho bé
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Khóa học giúp học viên xây dựng nền tảng tư duy logic, thực hành
                    theo dự án và phát triển kỹ năng công nghệ từng bước.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#f7f8fa] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Chương trình
                    </p>
                    <p className="mt-2 text-base font-semibold text-gray-900">
                      {course.groupTitle}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#f7f8fa] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Hình thức học
                    </p>
                    <p className="mt-2 text-base font-semibold text-gray-900">
                      {course.type}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#f7f8fa] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Độ tuổi phù hợp
                    </p>
                    <p className="mt-2 text-base font-semibold text-gray-900">
                      {course.age}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full rounded-2xl px-6 py-4 text-base font-black text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                  }}
                >
                  Đăng ký khóa học này
                </button>
              </aside>
            </section>
          </div>
        </main>

        <Footer
          accentColor={accentColor}
          copyrightText="&copy; 2024 BrightKids. All rights reserved."
        />
      </div>
    </>
  );
}

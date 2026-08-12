import { Link } from "react-router-dom";
import { Search, Star } from "lucide-react";

interface LandingHeroSectionProps {
  headline: string[];
  description: string;
}

export default function LandingHeroSection({
  headline,
  description,
}: LandingHeroSectionProps) {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] bg-[#eef1f6] px-6 py-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-12">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#0d3278]/60">
            Hành trình học tập cao cấp
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#0d3278] sm:text-6xl">
            {headline[0]}
            <span className="block text-[#0a7b83]">{headline[1]}</span>
            {headline[2]}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#526071]">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[#0d3278] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(13,50,120,0.2)] transition hover:-translate-y-0.5"
            >
              Bat dau mien phi
            </Link>

            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              <Search size={16} className="text-[#64748b]" />
              <input
                type="text"
                placeholder="Tìm kiếm tương lai của bạn..."
                className="w-full bg-transparent text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] sm:w-52"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
              ].map((avatar) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt="learner"
                  className="h-10 w-10 rounded-full border-2 border-[#eef1f6] object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-[#64748b]">
              Join 15,000+ active learners worldwide
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning together"
              className="h-[300px] w-full rounded-[22px] object-cover sm:h-[380px] lg:h-[470px]"
            />
          </div>

          <div className="absolute bottom-4 left-0 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.1)] sm:-left-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9f5f2] text-[#0a7b83]">
                <Star size={16} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0f172a]">
                  Nền tảng hàng đầu
                </p>
                <p className="text-xs text-[#64748b]">
                  Hài lòng học viên 4.9/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

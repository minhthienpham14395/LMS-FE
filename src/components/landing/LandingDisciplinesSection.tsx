import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DisciplineItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: string;
}

interface LandingDisciplinesSectionProps {
  items: DisciplineItem[];
}

export default function LandingDisciplinesSection({
  items,
}: LandingDisciplinesSectionProps) {
  return (
    <section id="disciplines" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0d3278]">
              Khám phá lĩnh vực
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#64748b]">
              Kiến thức tuyển chọn qua các trụ cột chuyên môn của chúng tôi.
            </p>
          </div>
          <a
            href="#courses"
            className="hidden items-center gap-2 text-sm font-medium text-[#0a7b83] md:inline-flex"
          >
            Tất cả danh mục <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}
              >
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#64748b]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

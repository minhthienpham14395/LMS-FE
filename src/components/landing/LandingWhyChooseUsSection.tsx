import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const points = [
  ["Lộ trình rõ ràng", "Biết chính xác nên học gì tiếp theo."],
  ["Bài học linh hoạt", "Học trên điện thoại, máy tính bảng hoặc desktop."],
  ["Phản hồi hữu ích", "Nhìn rõ điểm mạnh và phần cần cải thiện."],
] as const;

export default function LandingWhyChooseUsSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Vì sao chọn chúng tôi
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Trải nghiệm học tập xoay quanh sự tiến bộ
            </h2>

            <div className="mt-6 grid gap-4">
              {points.map(([title, text], index) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-white p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

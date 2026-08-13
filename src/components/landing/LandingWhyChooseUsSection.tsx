import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const points = [
  ["Lộ trình rõ ràng", "Biết chính xác nên học gì tiếp theo."],
  ["Bài học linh hoạt", "Học trên điện thoại, máy tính bảng hoặc desktop."],
  ["Phản hồi hữu ích", "Nhìn rõ điểm mạnh và phần cần cải thiện."],
] as const;

export default function LandingWhyChooseUsSection() {
  return (
    <Section className="bg-background-soft/90">
      <Container>
        <div className="rounded-[2rem] border border-border/80 bg-card px-5 py-8 shadow-lg sm:px-8 sm:py-10 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Vì sao chọn chúng tôi
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                Trải nghiệm học tập xoay quanh sự tiến bộ
              </h2>

              <div className="mt-6 grid gap-4">
                {points.map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-md ring-1 ring-border/80"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft font-bold text-primary shadow-sm">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}




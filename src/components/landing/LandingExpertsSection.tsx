interface TeacherItem {
  name: string;
  bio: string;
  image: string;
}

interface LandingExpertsSectionProps {
  teachers: TeacherItem[];
}

export default function LandingExpertsSection({
  teachers,
}: LandingExpertsSectionProps) {
  return (
    <section id="teachers" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-[#0d3278]">
          Taught by the Industry Elite
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <article key={teacher.name} className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-[#d7dde8] bg-[#0f172a] p-1 shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full rounded-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#0f172a]">
                {teacher.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#64748b]">
                {teacher.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

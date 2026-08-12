export interface TeacherCardTeacher {
  avatar: string;
  bio: string;
  name: string;
  role: string;
}

interface TeacherCardProps {
  teacher: TeacherCardTeacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article className="min-w-0 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          loading="lazy"
          className="size-14 shrink-0 rounded-full object-cover sm:size-16"
        />
        <div className="min-w-0">
          <h3 className="truncate font-bold">{teacher.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{teacher.role}</p>
        </div>
      </div>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
        {teacher.bio}
      </p>
    </article>
  );
}

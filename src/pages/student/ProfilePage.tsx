import { Container } from "@/components/layout/Container";
import { AvatarEditor, ProfileForm } from "@/features/profile/components";

export default function ProfilePage() {
  return (
    <Container className="py-6 sm:py-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
          Hồ sơ
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Quản lý hồ sơ học tập và tùy chọn cá nhân.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start xl:grid-cols-[300px_minmax(0,1fr)]">
        <AvatarEditor />

        <section className="min-w-0 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
          <ProfileForm />
        </section>
      </div>
    </Container>
  );
}

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout";
import { AvatarEditor, ProfileForm } from "@/features/profile/components";

export default function ProfilePage() {
  return (
    <Container className="py-6 sm:py-8">
        <Reveal>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Hồ sơ
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Quản lý hồ sơ học tập và tùy chọn cá nhân.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start xl:grid-cols-[300px_minmax(0,1fr)]">
          <Reveal>
            <AvatarEditor />
          </Reveal>

          <Reveal delay={120}>
            <section className="min-w-0 rounded-xl border bg-card p-4 shadow-sm sm:p-6">
              <ProfileForm />
            </section>
          </Reveal>
        </div>
    </Container>
  );
}



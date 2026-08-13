import {
  LandingCTASection,
  LandingFAQSection,
  LandingHeroSection,
  LandingHowItWorksSection,
  LandingPopularCoursesSection,
  LandingSkillsSection,
  LandingTeachersSection,
  LandingTestimonialsSection,
  LandingWhyChooseUsSection,
} from "@/components/landing";
import { ScrollReveal } from "@/components/layout";

export default function LandingPage() {
  return (
    <>
      <ScrollReveal once={false}>
        <LandingHeroSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingSkillsSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingWhyChooseUsSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingPopularCoursesSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingTestimonialsSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingHowItWorksSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingTeachersSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingFAQSection />
      </ScrollReveal>
      <ScrollReveal once={false}>
        <LandingCTASection />
      </ScrollReveal>
    </>
  );
}

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

export default function LandingPage() {
  return (
    <>
      <LandingHeroSection />
      <LandingSkillsSection />
      <LandingWhyChooseUsSection />
      <LandingPopularCoursesSection />
      <LandingTestimonialsSection />
      <LandingHowItWorksSection />
      <LandingTeachersSection />
      <LandingFAQSection />
      <LandingCTASection />
    </>
  );
}

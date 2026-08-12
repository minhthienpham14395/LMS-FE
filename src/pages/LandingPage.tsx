import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { courseGroups } from "../data/courseData";
import {
  LandingDisciplinesSection,
  LandingExpertsSection,
  LandingFeaturedCoursesSection,
  LandingFooter,
  LandingHeader,
  LandingHeroSection,
  LandingTestimonialsSection,
} from "../components/landing";

const disciplines = [
  {
    icon: GraduationCap,
    title: "Giao duc Toan Dien",
    description: "Phat trien ky nang lap trinh, tu duy logic va sang tao",
    tone: "bg-[#dce8ff] text-[#0d3278]",
  },
  {
    icon: Code2,
    title: "Phuong Phap Hieu Qua",
    description: "Ket hop ly thuyet va thuc hanh trong tung bai hoc",
    tone: "bg-[#c9f5f2] text-[#006f72]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Co Hoi Su Nghiep",
    description: "Chuan bi cho tuong lai cong nghe",
    tone: "bg-[#c9f5f2] text-[#006f72]",
  },
  {
    icon: Sparkles,
    title: "Tu Duy Sang Tao",
    description: "Khuyen khich sang che va giai quyet van de",
    tone: "bg-[#ffd9d9] text-[#9a3742]",
  },
];

const teachers = [
  {
    name: "Co Hoa",
    bio: "Chuyen gia Lap trinh voi 5 nam kinh nghiem giang day",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Thay Minh",
    bio: "Giao vien Robotics, cuu sinh vien MIT",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Co Linh",
    bio: "Chuyen gia Tai chinh, CA Level II",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
  },
];

const testimonials = [
  {
    name: "Huong Nguyen",
    role: "Phu huynh hoc vien",
    text: '"Con toi rat thich hoc lap trinh o BrightKids. Giao vien nhiet tinh va bai hoc rat thu vi. Con da tu lam duoc game dau tien!"',
  },
  {
    name: "Minh Tran",
    role: "Phu huynh hoc vien",
    text: '"Khoa hoc tai chinh giup con hieu ve tien bac tu nho. Gio con da biet cach tiet kiem va lap ke hoach chi tieu roi!"',
  },
];

const footerColumns = [
  {
    title: "Nền tảng",
    items: ["Giới thiệu", "Giảng viên", "Câu chuyện thành công", "Chương trình hợp tác"],
  },
  {
    title: "Hỗ trợ",
    items: ["Trung tâm hỗ trợ", "Điều khoản dịch vụ", "Chính sách bảo mật", "Liên hệ hỗ trợ"],
  },
  {
    title: "Kết nối",
    items: ["Facebook", "Instagram", "LinkedIn", "Cộng đồng"],
  },
];

export default function LandingPage() {
  const featuredCourseGroups = courseGroups;

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#0f172a] w-full">
      <LandingHeader />

      <main className="pt-24">
        <LandingHeroSection
          headline={["Kham Pha", "Tuong Lai", "Cong Nghe"]}
          description="Nen tang hoc lap trinh, robotics, tai chinh cho tre em (4-12 tuoi). Giup con phat trien ky nang sang tao va tu duy logic."
        />
        <LandingDisciplinesSection items={disciplines} />
        <LandingFeaturedCoursesSection groups={featuredCourseGroups} />
        <LandingExpertsSection teachers={teachers} />
        <LandingTestimonialsSection testimonials={testimonials} />
      </main>
      <LandingFooter columns={footerColumns} />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SkillsSection from "../components/landing/SkillsSection";
import WhySection from "../components/landing/WhySection";
import CourseGroupSection from "../components/landing/CourseGroupSection";
import TestimonialsSection from "../components/landing/Testimonialssection";
import StatsSection from "../components/landing/Statssection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TeachersSection from "../components/landing/TeachersSection";
import CTASection from "../components/landing/Ctasection";
import DecorativePattern from "../components/landing/DecorativePattern";
import Footer from "../components/layout/Footer";
import { courseGroups } from "../data/courseData";

export default function Landing() {
  const accentColor = "#3085c7";
  const primaryColor = "#164789";

  const skills = [
    {
      icon: "GraduationCap",
      title: "Giao duc Toan Dien",
      description: "Phat trien ky nang lap trinh, tu duy logic va sang tao",
    },
    {
      icon: "Users",
      title: "Giao vien Gioi",
      description: "Doi ngu giao vien chuyen nghiep va nhiet tinh",
    },
    {
      icon: "Target",
      title: "Phuong Phap Hieu Qua",
      description: "Ket hop ly thuyet va thuc hanh trong tung bai hoc",
    },
    {
      icon: "Award",
      title: "Ket Qua Dang Tin Cay",
      description: "Hon 10,000 hoc vien da thanh cong",
    },
    {
      icon: "Lightbulb",
      title: "Tu Duy Sang Tao",
      description: "Khuyen khich sang che va giai quyet van de",
    },
    {
      icon: "TrendingUp",
      title: "Co Hoi Su Nghiep",
      description: "Chuan bi cho tuong lai cong nghe",
    },
  ];

  const whyReasons = [
    {
      icon: "Palette",
      title: "Hoc Tap Vui Ve",
      description:
        "Con yeu thich nhung gi con hoc vi phuong phap tuong tac va thu vi",
    },
    {
      icon: "TrendingUp",
      title: "Tien Bo Nhanh Chong",
      description: "Theo doi tien do hoc tap voi bang dieu khien chi tiet",
    },
    {
      icon: "Award",
      title: "Chung Chi Quoc Te",
      description: "Nhan chung chi duoc cong nhan tren toan the gioi",
    },
    {
      icon: "Handshake",
      title: "Cong Dong Ho Tro",
      description: "Ket noi voi hang ngan hoc vien khac tren toan cau",
    },
  ];

  const testimonials = [
    {
      avatar: "H",
      name: "Huong Nguyen",
      role: "Phu huynh hoc vien",
      text: '"Con toi rat thich hoc lap trinh o BrightKids. Giao vien nhiet tinh va bai hoc rat thu vi. Con da tu lam duoc game dau tien!"',
    },
    {
      avatar: "M",
      name: "Minh Tran",
      role: "Phu huynh hoc vien",
      text: '"Khoa hoc tai chinh giup con hieu ve tien bac tu nho. Gio con da biet cach tiet kiem va lap ke hoach chi tieu roi!"',
    },
    {
      avatar: "L",
      name: "Linh Pham",
      role: "Phu huynh hoc vien",
      text: '"Giao trinh rat bai ban va phu hop voi tre em. Con hoc duoc nhieu ky nang mem va tu duy logic hon rat nhieu!"',
    },
  ];

  const stats = [
    { number: "10K+", label: "Hoc vien" },
    { number: "50+", label: "Khoa hoc" },
    { number: "98%", label: "Hai long" },
    { number: "30+", label: "Quoc gia" },
  ];

  const steps = [
    {
      number: "1",
      title: "Chia se so thich",
      description:
        "Cho chung toi biet ten, tuoi va so thich cua con de ca nhan hoa hanh trinh hoc tap",
    },
    {
      number: "2",
      title: "Tham gia buoi hoc thu",
      description: "Trai nghiem lop hoc tuong tac voi giao vien chuyen nghiep",
    },
    {
      number: "3",
      title: "Tu van chuyen mon",
      description: "Thao luan ve tien do va lo trinh hoc tap phu hop cho con",
    },
    {
      number: "4",
      title: "Chon khoa hoc",
      description: "Dang ky khoa hoc phu hop va bat dau hanh trinh chinh phuc tri thuc!",
    },
  ];

  const teachers = [
    {
      avatar: "User",
      name: "Co Hoa",
      bio: "Chuyen gia Lap trinh voi 5 nam kinh nghiem giang day",
      rating: "5.0 (1,250 danh gia)",
    },
    {
      avatar: "User",
      name: "Thay Minh",
      bio: "Giao vien Robotics, cuu sinh vien MIT",
      rating: "4.9 (890 danh gia)",
    },
    {
      avatar: "User",
      name: "Co Linh",
      bio: "Chuyen gia Tai chinh, CA Level II",
      rating: "4.95 (1,100 danh gia)",
    },
  ];

  const footerLinks = [
    {
      title: "Khoa hoc",
      links: ["Lap trinh", "Robotics", "Tai chinh", "Toan hoc"],
    },
    {
      title: "Ve chung toi",
      links: ["Cau chuyen", "Doi ngu", "Tuyen dung", "Giai thuong"],
    },
    {
      title: "Ho tro",
      links: ["Trung tam tro giup", "Lien he", "FAQ", "Chinh sach"],
    },
  ];

  return (
    <div className="bg-[#f7f8fa] text-gray-900 overflow-x-hidden">
      <Navbar
        accentColor={accentColor}
        isLoggedIn={false}
        onLoginClick={() => console.log("Navigate to login")}
        onSignupClick={() => console.log("Navigate to signup")}
      />

      <HeroSection accentColor={accentColor} primaryColor={primaryColor} />
      {/* <SkillsSection skills={skills} accentColor={accentColor} />
      <WhySection reasons={whyReasons} /> */}

      {courseGroups.map((group) => (
        <CourseGroupSection
          key={group.title}
          title={group.title}
          subtitle={group.subtitle}
          courses={group.courses}
          accentColor={accentColor}
        />
      ))}

      {/* <TestimonialsSection testimonials={testimonials} />
      <StatsSection stats={stats} />
      <HowItWorksSection steps={steps} accentColor={accentColor} />
      <TeachersSection teachers={teachers} accentColor={accentColor} />
      <CTASection accentColor={accentColor} primaryColor={primaryColor} />
      <DecorativePattern accentColor={accentColor} /> */}

      <Footer
        accentColor={accentColor}
        footerLinks={footerLinks}
        copyrightText="&copy; 2024 BrightKids. All rights reserved."
      />
    </div>
  );
}

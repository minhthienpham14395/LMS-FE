import React from "react";

// Import all components
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SkillsSection from "../components/landing/SkillsSection";
import WhySection from "../components/landing/WhySection";
import CoursesSection from "../components/landing/CoursesSection";
import TestimonialsSection from "../components/landing/Testimonialssection";
import StatsSection from "../components/landing/Statssection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TeachersSection from "../components/landing/TeachersSection";
import CTASection from "../components/landing/Ctasection";
import DecorativePattern from "../components/landing/DecorativePattern";
import Footer from "../components/layout/Footer";

export default function Landing() {
  const accentColor = "#0891b2";

  // Data objects
  const skills = [
    {
      icon: "🎓",
      title: "Giáo dục Toàn Diện",
      description: "Phát triển kỹ năng lập trình, tư duy logic và sáng tạo",
    },
    {
      icon: "👨‍🏫",
      title: "Giáo viên Giỏi",
      description: "Đội ngũ giáo viên chuyên nghiệp và nhiệt tình",
    },
    {
      icon: "🎯",
      title: "Phương Pháp Hiệu Quả",
      description: "Kết hợp lý thuyết và thực hành trong từng bài học",
    },
    {
      icon: "🌟",
      title: "Kết Quả Đáng Tin Cậy",
      description: "Hơn 10,000 học viên đã thành công",
    },
    {
      icon: "💡",
      title: "Tư Duy Sáng Tạo",
      description: "Khuyến khích sáng chế và giải quyết vấn đề",
    },
    {
      icon: "🚀",
      title: "Cơ Hội Sự Nghiệp",
      description: "Chuẩn bị cho tương lai công nghệ",
    },
  ];

  const whyReasons = [
    {
      icon: "🎨",
      title: "Học Tập Vui Vẻ",
      description:
        "Con yêu thích những gì con học vì phương pháp tương tác và thú vị",
    },
    {
      icon: "📈",
      title: "Tiến Bộ Nhanh Chóng",
      description: "Theo dõi tiến độ học tập với bảng điều khiển chi tiết",
    },
    {
      icon: "🏆",
      title: "Chứng Chỉ Quốc Tế",
      description: "Nhận chứng chỉ được công nhận trên toàn thế giới",
    },
    {
      icon: "🤝",
      title: "Cộng Đồng Hỗ Trợ",
      description: "Kết nối với hàng ngàn học viên khác trên toàn cầu",
    },
  ];

  const courses = [
    {
      id: 1,
      icon: "💻",
      badge: "MỚI",
      title: "Coding Champion II",
      description: "Khóa học lập trình nâng cao cho trẻ em (Lớp 2-3)",
      duration: "60 phút",
      type: "1-1",
      age: "6-8 tuổi",
      currentPrice: "$2,699",
      oldPrice: "$4,499",
    },
    {
      id: 2,
      icon: "💰",
      badge: "PHỔ BIẾN",
      title: "Finlit Certification L1",
      description: "Khóa học kiến thức tài chính (Lớp 1-2)",
      duration: "60 phút",
      type: "1-1",
      age: "4-8 tuổi",
      currentPrice: "$2,999",
      oldPrice: "$4,499",
    },
    {
      id: 3,
      icon: "🤖",
      badge: "HOT",
      title: "RoboMaster",
      description: "Khóa học Robotics nâng cao (Lớp 1-2)",
      duration: "60 phút",
      type: "1-1",
      age: "4-8 tuổi",
      currentPrice: "$2,099",
      oldPrice: "$3,099",
    },
  ];

  const testimonials = [
    {
      avatar: "H",
      name: "Hương Nguyễn",
      role: "Phụ huynh học viên",
      text: '"Con tôi rất thích học lập trình ở BrightKids. Giáo viên nhiệt tình và bài học rất thú vị. Con đã tự làm được game đầu tiên!"',
    },
    {
      avatar: "M",
      name: "Minh Trần",
      role: "Phụ huynh học viên",
      text: '"Khóa học tài chính giúp con hiểu về tiền bạc từ nhỏ. Giờ con đã biết cách tiết kiệm và lập kế hoạch chi tiêu rồi!"',
    },
    {
      avatar: "L",
      name: "Linh Phạm",
      role: "Phụ huynh học viên",
      text: '"Giáo trình rất bài bản và phù hợp với trẻ em. Con học được nhiều kỹ năng mềm và tư duy logic hơn rất nhiều!"',
    },
  ];

  const stats = [
    { number: "10K+", label: "Học viên" },
    { number: "50+", label: "Khóa học" },
    { number: "98%", label: "Hài lòng" },
    { number: "30+", label: "Quốc gia" },
  ];

  const steps = [
    {
      number: "1",
      title: "Chia sẻ sở thích",
      description:
        "Cho chúng tôi biết tên, tuổi và sở thích của con để cá nhân hóa hành trình học tập",
    },
    {
      number: "2",
      title: "Tham gia buổi học thử",
      description: "Trải nghiệm lớp học tương tác với giáo viên chuyên nghiệp",
    },
    {
      number: "3",
      title: "Tư vấn chuyên môn",
      description: "Thảo luận về tiến độ và lộ trình học tập phù hợp cho con",
    },
    {
      number: "4",
      title: "Chọn khóa học",
      description:
        "Đăng ký khóa học phù hợp và bắt đầu hành trình chinh phục tri thức!",
    },
  ];

  const teachers = [
    {
      avatar: "👩‍🏫",
      name: "Cô Hoa",
      bio: "Chuyên gia Lập trình với 5 năm kinh nghiệm giảng dạy",
      rating: "⭐ 5.0 (1,250 đánh giá)",
    },
    {
      avatar: "👨‍🏫",
      name: "Thầy Minh",
      bio: "Giáo viên Robotics, cựu sinh viên MIT",
      rating: "⭐ 4.9 (890 đánh giá)",
    },
    {
      avatar: "👩‍🏫",
      name: "Cô Linh",
      bio: "Chuyên gia Tài chính, CA Level II",
      rating: "⭐ 4.95 (1,100 đánh giá)",
    },
  ];

  const footerLinks = [
    {
      title: "Khóa học",
      links: ["Lập trình", "Robotics", "Tài chính", "Toán học"],
    },
    {
      title: "Về chúng tôi",
      links: ["Câu chuyện", "Đội ngũ", "Tuyển dụng", "Giải thưởng"],
    },
    {
      title: "Hỗ trợ",
      links: ["Trung tâm trợ giúp", "Liên hệ", "FAQ", "Chính sách"],
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar
        accentColor={accentColor}
        isLoggedIn={false}
        onLoginClick={() => console.log("Navigate to login")}
        onSignupClick={() => console.log("Navigate to signup")}
      />

      {/* Hero Section */}
      <HeroSection accentColor={accentColor} />

      {/* Skills Section */}
      <SkillsSection skills={skills} accentColor={accentColor} />

      {/* Why Section */}
      <WhySection reasons={whyReasons} />

      {/* Courses Section */}
      <CoursesSection courses={courses} accentColor={accentColor} />

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={testimonials}
        accentColor={accentColor}
      />

      {/* Stats Section */}
      <StatsSection stats={stats} accentColor={accentColor} />

      {/* How It Works Section */}
      <HowItWorksSection steps={steps} accentColor={accentColor} />

      {/* Teachers Section */}
      <TeachersSection teachers={teachers} accentColor={accentColor} />

      {/* CTA Section */}
      <CTASection accentColor={accentColor} />

      {/* Decorative Pattern */}
      <DecorativePattern accentColor={accentColor} />

      {/* Footer */}
      <Footer
        accentColor={accentColor}
        footerLinks={footerLinks}
        copyrightText="&copy; 2024 BrightKids. All rights reserved."
      />
    </div>
  );
}

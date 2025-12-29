import React, { useState, useEffect, useRef } from "react";

export default function LandingEdu() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

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

  // Soft cyan color for harmony: #0891b2
  const accentColor = "#0891b2";
  const accentLight = "#06b6d4";

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-x-hidden">
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 15px rgba(8, 145, 178, 0.3);
          }
          50% {
            text-shadow: 0 0 25px rgba(8, 145, 178, 0.5);
          }
        }

        @keyframes rotateIcon {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        header {
          animation: slideDown 0.6s ease-out;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9));
        }

        .hero-content {
          animation: fadeInLeft 0.8s ease-out;
        }

        .hero-image {
          animation: fadeInRight 0.8s ease-out;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .skill-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .skill-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-card:nth-child(4) { animation-delay: 0.4s; }
        .skill-card:nth-child(5) { animation-delay: 0.5s; }
        .skill-card:nth-child(6) { animation-delay: 0.6s; }

        .skill-icon {
          animation: rotateIcon 3s ease-in-out infinite;
        }

        .why-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .why-card:nth-child(1) { animation-delay: 0.1s; }
        .why-card:nth-child(2) { animation-delay: 0.2s; }
        .why-card:nth-child(3) { animation-delay: 0.3s; }
        .why-card:nth-child(4) { animation-delay: 0.4s; }

        .course-card {
          animation: scaleIn 0.5s ease-out;
        }

        .course-card:nth-child(1) { animation-delay: 0.1s; }
        .course-card:nth-child(2) { animation-delay: 0.2s; }
        .course-card:nth-child(3) { animation-delay: 0.3s; }

        .testimonial-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }

        .stat-item {
          animation: fadeInUp 0.6s ease-out;
        }

        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .stat-item:nth-child(4) { animation-delay: 0.4s; }

        .stat-number {
          animation: countUp 2s ease-out;
        }

        .step {
          animation: fadeInUp 0.6s ease-out;
        }

        .step:nth-child(1) { animation-delay: 0.1s; }
        .step:nth-child(2) { animation-delay: 0.2s; }
        .step:nth-child(3) { animation-delay: 0.3s; }
        .step:nth-child(4) { animation-delay: 0.4s; }

        .step-number {
          animation: bounce 1s ease-in-out infinite;
        }

        .step:nth-child(2) .step-number { animation-delay: 0.2s; }
        .step:nth-child(3) .step-number { animation-delay: 0.4s; }
        .step:nth-child(4) .step-number { animation-delay: 0.6s; }

        .teacher-card {
          animation: fadeInUp 0.6s ease-out;
        }

        .teacher-card:nth-child(1) { animation-delay: 0.1s; }
        .teacher-card:nth-child(2) { animation-delay: 0.2s; }
        .teacher-card:nth-child(3) { animation-delay: 0.3s; }

        .circle-1 {
          animation: pulse 3s ease-in-out infinite;
        }

        .circle-2 {
          animation: pulse 3s ease-in-out infinite 0.5s;
        }

        .circle-3 {
          animation: pulse 3s ease-in-out infinite 1s;
        }

        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }

        .cta-bg-float::before {
          animation: float 6s ease-in-out infinite;
        }

        .cta-bg-float::after {
          animation: float 4s ease-in-out infinite;
        }

        .course-image::before {
          animation: pulse 3s ease-in-out infinite;
        }

        .teacher-image::before {
          animation: pulse 3s ease-in-out infinite;
        }

        .title-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .subtitle-fadeInUp {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .cta-title {
          animation: fadeInUp 0.6s ease-out;
        }

        .cta-subtitle {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .cta-button {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: ${accentColor};
          transition: width 0.3s;
          box-shadow: 0 0 8px rgba(8, 145, 178, 0.3);
        }

        nav a:hover::after {
          width: 100%;
        }

        .dropdown-menu {
          animation: slideDown 0.3s ease-out;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          nav {
            display: none;
          }

          .section-title {
            font-size: 2.25rem;
          }

          header {
            padding: 1rem;
          }

          header .text-3xl {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full px-12 py-5 flex justify-between items-center z-50 border-b border-gray-200/50">
        <div className="flex items-center gap-2">
          <div
            className="text-3xl font-black"
            style={{
              color: accentColor,
              textShadow: `0 0 12px rgba(8, 145, 178, 0.2)`,
            }}
          >
            BrightKids
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#skills"
            className="text-gray-700 hover:text-teal-700 transition-all relative font-medium"
          >
            Khóa học
          </a>
          <a
            href="#why"
            className="text-gray-700 hover:text-teal-700 transition-all relative font-medium"
          >
            Tại sao chọn chúng tôi
          </a>
          <a
            href="#teachers"
            className="text-gray-700 hover:text-teal-700 transition-all relative font-medium"
          >
            Giáo viên
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-teal-700 transition-all relative font-medium"
          >
            Liên hệ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <button className="text-gray-700 hover:text-teal-700 transition-all font-medium px-6 py-2 rounded-lg hover:bg-gray-100">
                Đăng nhập
              </button>
              <button
                className="text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
                style={{ backgroundColor: accentColor }}
              >
                Đăng ký
              </button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  A
                </div>
                <span className="text-gray-900 font-semibold">Admin</span>
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg z-50 dropdown-menu">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-gray-900 font-semibold text-sm">
                      Tài khoản của tôi
                    </p>
                    <p className="text-gray-500 text-xs">user@brightkids.com</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <a
                      href="#profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      👤 Hồ sơ
                    </a>
                    <a
                      href="#dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      📊 Dashboard
                    </a>
                    <a
                      href="#settings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      ⚙️ Cài đặt
                    </a>
                  </div>
                  <div className="border-t border-gray-200 p-2">
                    <button className="w-full px-4 py-2 hover:bg-red-50 text-red-600 text-sm rounded transition-all font-semibold">
                      🚪 Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900">
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-12 pt-32 pb-12 relative overflow-hidden bg-white">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        ></div>

        <div className="hero-content z-10 max-w-2xl">
          <h1 className="text-6xl font-black leading-tight mb-5 text-gray-900">
            Khám Phá Tương Lai{" "}
            <span style={{ color: accentColor }}>Công Nghệ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nền tảng học lập trình, robotics, tài chính cho trẻ em (4-12 tuổi).
            Giúp con phát triển kỹ năng sáng tạo và tư duy logic.
          </p>
          <div className="hero-buttons flex gap-6">
            <button className="border-2 border-gray-400 text-gray-900 px-10 py-4 rounded-full font-semibold transition-all hover:bg-gray-900 hover:text-white hover:border-gray-900">
              Bắt đầu miễn phí
            </button>
            <button
              className="text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: accentColor }}
            >
              Xem khóa học
            </button>
          </div>
        </div>

        <div className="hero-image hidden lg:block relative">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-15 top-16 left-16 circle-1"></div>
          <div className="text-8xl floating-element">🚀</div>
          <div className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-cyan-300 to-transparent opacity-15 bottom-12 left-0 circle-3"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Tại sao học sinh yêu BrightKids
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những lợi ích đặc biệt mà chúng tôi mang lại
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card bg-white p-8 rounded-2xl border border-gray-200 transition-all hover:border-teal-300 hover:shadow-md"
            >
              <div className="text-5xl mb-5 skill-icon">{skill.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Tại sao chọn chúng tôi
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Lợi ích nổi bật của nền tảng học tập
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {whyReasons.map((reason, idx) => (
            <div
              key={idx}
              className="why-card bg-gray-50 p-8 rounded-2xl border border-gray-200 transition-all hover:border-teal-300 hover:shadow-md"
            >
              <div className="text-5xl mb-5">{reason.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-1/2 -translate-x-1/2 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Các khóa học hàng đầu
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 subtitle-fadeInUp">
          Lựa chọn đa dạng cho mọi lứa tuổi
        </p>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {["Tất cả", "Lập trình", "Robotics", "Tài chính"].map(
              (filter, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "text-white px-6 py-2 rounded-full font-semibold transition-all"
                      : "bg-white border border-gray-300 text-gray-900 hover:border-teal-300 px-6 py-2 rounded-full transition-all"
                  }
                  style={
                    activeFilter === filter
                      ? { backgroundColor: accentColor }
                      : {}
                  }
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="course-card bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-md transition-all"
              >
                <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-gray-100 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div
                    className="absolute w-full h-full bg-gradient-radial from-cyan-300/10 to-transparent"
                    style={{ animation: "pulse 3s ease-in-out infinite" }}
                  ></div>
                  {course.icon}
                </div>
                <div className="p-8">
                  <span
                    className="inline-block text-white px-4 py-1 rounded-2xl text-xs font-black mb-4"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 10px rgba(8, 145, 178, 0.2)`,
                    }}
                  >
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                    {course.description}
                  </p>
                  <div className="flex gap-5 text-gray-600 text-sm mb-5">
                    <span>⏱️ {course.duration}</span>
                    <span>👥 {course.type}</span>
                    <span>👶 {course.age}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-3xl font-black"
                      style={{ color: accentColor }}
                    >
                      {course.currentPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {course.oldPrice}
                    </span>
                  </div>
                  <button
                    className="w-full text-white py-3 rounded-xl font-black transition-all hover:shadow-md"
                    style={{ backgroundColor: accentColor }}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Học viên nói gì về chúng tôi
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những ngôi sao sáng của chúng tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-gray-50 p-10 rounded-2xl border border-gray-200 transition-all hover:border-teal-300 hover:shadow-md"
            >
              <div
                className="text-2xl mb-5"
                style={{
                  color: accentColor,
                  textShadow: `0 0 8px rgba(8, 145, 178, 0.2)`,
                }}
              >
                ★★★★★
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px rgba(8, 145, 178, 0.2)`,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-gray-900 font-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-16 title-fadeInUp text-gray-900">
          Thành tích của chúng tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item text-center">
              <div
                className="stat-number text-6xl font-black mb-3"
                style={{
                  color: accentColor,
                  textShadow: `0 0 12px rgba(8, 145, 178, 0.2)`,
                }}
              >
                {stat.number}
              </div>
              <div className="text-xl text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-12 bg-white relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Cách thức hoạt động
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Hướng dẫn từng bước để bắt đầu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="step text-center">
              <div
                className="step-number w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black text-white mx-auto mb-6"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 15px rgba(8, 145, 178, 0.2)`,
                }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-24 px-12 bg-gray-50 relative">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-cyan-400/5 to-transparent bottom-0 left-1/2 -translate-x-1/2 translate-y-32"></div>

        <h2 className="text-5xl font-black text-center mb-5 title-fadeInUp text-gray-900">
          Đội ngũ giáo viên
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 subtitle-fadeInUp">
          Những người dẫn đường tận tâm với sự thành công của học viên
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="teacher-card bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all hover:border-teal-300 hover:shadow-md"
            >
              <div className="w-full h-64 bg-gradient-to-br from-cyan-100 to-gray-100 flex items-center justify-center text-7xl relative overflow-hidden">
                <div
                  className="absolute w-full h-full bg-gradient-radial from-cyan-300/10 to-transparent"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                ></div>
                {teacher.avatar}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {teacher.bio}
                </p>
                <div style={{ color: accentColor }} className="font-semibold">
                  {teacher.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 px-12 text-white text-center relative overflow-hidden cta-bg-float"
        style={{ backgroundColor: accentColor }}
      >
        <div className="absolute w-96 h-96 rounded-full bg-white/10 top-0 right-0 -translate-y-32 translate-x-32"></div>
        <div className="absolute w-56 h-56 rounded-full bg-black/5 bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        <h2 className="text-5xl font-black mb-5 cta-title">
          Sẵn sàng bắt đầu?
        </h2>
        <p className="text-2xl mb-10 cta-subtitle">
          Đăng ký ngay hôm nay và nhận buổi học thử miễn phí!
        </p>
        <button className="bg-white text-gray-900 px-16 py-4 rounded-full font-black text-lg transition-all hover:shadow-lg hover:-translate-y-1 cta-button">
          Đăng ký miễn phí
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 px-12 py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3
                className="font-black mb-5 text-lg"
                style={{ color: accentColor }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-teal-700 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3
              className="font-black mb-5 text-lg"
              style={{ color: accentColor }}
            >
              Kết nối
            </h3>
            <p className="text-gray-600 mb-5">Theo dõi chúng tôi</p>
            <div className="flex gap-3">
              {["f", "t", "in", "ig"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-900 hover:text-white hover:-translate-y-1 transition-all"
                  style={{
                    backgroundColor: "transparent",
                    border: `2px solid ${accentColor}`,
                    color: accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = accentColor;
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = accentColor;
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 BrightKids. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

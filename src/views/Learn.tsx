import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  X,
  Star,
  Users,
  Clock,
  BookOpen,
  Code,
  Zap,
  ChevronDown,
  Menu,
  Lock,
  Unlock,
  Settings,
  Edit2,
  Globe,
  LogOut,
} from "lucide-react";

export default function CourseExplorer() {
  // ==================== AUTHENTICATION STATE ====================
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // ==================== COMPONENT STATE ====================
  const [selectedModule, setSelectedModule] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);

  // ==================== CHECK AUTHENTICATION ON MOUNT ====================
  useEffect(() => {
    const checkAuth = () => {
      const isLoggedInStored = localStorage.getItem("brightkids_isLoggedIn");
      const userNameStored = localStorage.getItem("brightkids_userName");
      const userEmailStored = localStorage.getItem("brightkids_userEmail");

      if (isLoggedInStored === "true") {
        setIsLoggedIn(true);
        setUserName(userNameStored || "User");
        setUserEmail(userEmailStored || "");
      } else {
        // Redirect to login if not authenticated
        window.location.href = "/login";
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  // ==================== HANDLE CLICK OUTSIDE DROPDOWN ====================
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

  // ==================== HANDLE LOGOUT ====================
  const handleLogout = () => {
    localStorage.removeItem("brightkids_isLoggedIn");
    localStorage.removeItem("brightkids_userName");
    localStorage.removeItem("brightkids_userEmail");
    setDropdownOpen(false);
    window.location.href = "/landing";
  };

  // ==================== SHOW LOADING SCREEN ====================
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-400/30 border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Đang tải...</p>
        </div>
      </div>
    );
  }

  // ==================== DATA ====================
  const modules = [
    {
      id: 1,
      title: "Module 1: Coding Fundamentals",
      category: "Coding",
      icon: "🔑",
      ribbon: "NEW",
      locked: false,
      lessons: [
        { id: 1, title: "Geometric Shapes", locked: true, difficulty: "Easy" },
        {
          id: 2,
          title: "Alice in WonderLand",
          locked: true,
          difficulty: "Medium",
        },
        {
          id: 3,
          title: "Photo Frame of your family",
          locked: true,
          difficulty: "Medium",
        },
        {
          id: 4,
          title: "Patterns made Easy",
          locked: true,
          difficulty: "Easy",
        },
        {
          id: 5,
          title: "Catch the Birds Flying",
          locked: true,
          difficulty: "Hard",
        },
        { id: 6, title: "Angry RoboCop", locked: true, difficulty: "Medium" },
      ],
    },
    {
      id: 2,
      title: "Module 2: Intermediate Coding",
      category: "Coding",
      icon: "⚙️",
      ribbon: null,
      locked: true,
      lessons: [
        {
          id: 7,
          title: "Object Oriented Programming",
          locked: true,
          difficulty: "Hard",
        },
        { id: 8, title: "Data Structures", locked: true, difficulty: "Hard" },
        {
          id: 9,
          title: "Algorithms Mastery",
          locked: true,
          difficulty: "Hard",
        },
      ],
    },
    {
      id: 3,
      title: "Module 3: Advanced Projects",
      category: "Coding",
      icon: "🚀",
      ribbon: null,
      locked: true,
      lessons: [
        { id: 10, title: "Build a Game", locked: true, difficulty: "Hard" },
        {
          id: 11,
          title: "Web Development Project",
          locked: true,
          difficulty: "Hard",
        },
      ],
    },
  ];

  const courses = [
    { name: "Coding", color: "from-blue-400" },
    { name: "Robotics", color: "from-green-400" },
    { name: "Mathematics", color: "from-purple-400" },
    { name: "Finance", color: "from-yellow-400" },
  ];

  const currentModule = modules.find((m) => m.id === selectedModule);
  const studentProfile = {
    name: userName || "Student",
    grade: "Grade 1",
    avatar: "👧",
    points: 0,
    stars: 0,
  };

  const checklist = [
    {
      icon: "⏰",
      text: "You will be able to join the class on trial class time.",
    },
    {
      icon: "👨‍👩‍👧",
      text: "Parent should meet the teacher to understand the child's assessment.",
    },
    {
      icon: "💻",
      text: "For smoother experience during the class, please install Zoom App on Desktop.",
    },
  ];

  const sidebarMenus = [
    { icon: "🔍", label: "Explore" },
    { icon: "📖", label: "Learn" },
    { icon: "⚡", label: "Nano Skills", badge: "NEW" },
    { icon: "🏆", label: "Certificates" },
    { icon: "🎁", label: "Rewards" },
  ];

  // ==================== RENDER ====================
  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        header {
          animation: slideInDown 0.6s ease-out;
        }

        .sidebar {
          animation: slideInLeft 0.6s ease-out;
        }

        .course-grid {
          animation: fadeIn 0.6s ease-out;
        }

        .module-card {
          transition: all 0.3s ease;
        }

        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(102, 153, 255, 0.1);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-menu {
          animation: slideInDown 0.3s ease-out;
        }

        .lesson-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 1024px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 280px;
            height: 100vh;
            z-index: 40;
            animation: slideInLeft 0.3s ease-out;
          }

          .main-content {
            margin-left: 0;
          }
        }

        @media (max-width: 768px) {
          .lesson-grid {
            grid-template-columns: 1fr;
          }

          header {
            padding: 1rem;
          }
        }
      `}</style>

      {/* ==================== HEADER ====================*/}
      <header className="fixed top-0 w-full px-4 sm:px-8 py-4 flex justify-between items-center bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-blue-400"
          style={{ textShadow: "0 0 20px rgba(102, 153, 255, 0.5)" }}
        >
          BrightKids
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="/"
            className="text-white hover:text-blue-400 transition-all font-medium"
          >
            Trang chủ
          </a>
          <a
            href="/learn"
            className="text-white hover:text-blue-400 transition-all font-medium"
          >
            Học tập
          </a>
          <a
            href="/course-explorer"
            className="text-blue-400 font-medium border-b-2 border-blue-400"
          >
            Khám phá
          </a>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-sm">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-white font-semibold hidden sm:inline">
                  {userName}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform ${
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
                <div className="absolute right-0 top-12 w-48 bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-lg z-50 backdrop-blur-md dropdown-menu">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-white font-semibold text-sm">
                      Tài khoản của tôi
                    </p>
                    <p className="text-gray-500 text-xs">{userEmail}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <a
                      href="#profile"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-white/10 text-white text-sm rounded transition-all"
                    >
                      👤 Hồ sơ
                    </a>
                    <a
                      href="#dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-white/10 text-white text-sm rounded transition-all"
                    >
                      📊 Dashboard
                    </a>
                    <a
                      href="#settings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-white/10 text-white text-sm rounded transition-all"
                    >
                      ⚙️ Cài đặt
                    </a>
                  </div>
                  <div className="border-t border-white/10 p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 hover:bg-red-400/10 text-red-400 text-sm rounded transition-all font-semibold flex items-center gap-2"
                    >
                      <LogOut size={16} />
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button className="md:hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-gray-400 hover:text-white">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* ==================== MAIN LAYOUT ====================*/}
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="sidebar hidden lg:flex w-80 flex-col p-8 bg-black/50 border-r border-white/10">
          {/* Student Profile */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{studentProfile.avatar}</div>
              <div>
                <div className="relative group max-w-[100px]">
                  <h3 className="font-black text-white truncate">
                    {studentProfile.name}
                  </h3>

                  <div
                    className="
    absolute left-1/2 top-full z-10
    mt-2 w-max max-w-xs
    -translate-x-1/2
    rounded bg-black px-3 py-1
    text-sm text-white
    opacity-0
    group-hover:opacity-100
    transition
    whitespace-nowrap
  "
                  >
                    {studentProfile.name}
                  </div>
                </div>

                <p className="text-sm text-gray-400">{studentProfile.grade}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-black text-blue-400">
                  {studentProfile.points}
                </div>
                <div className="text-xs text-gray-400">Points</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-2xl font-black text-yellow-400">
                  ⭐ {studentProfile.stars}
                </div>
                <div className="text-xs text-gray-400">Stars</div>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="space-y-2">
            {sidebarMenus.map((menu, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all text-left font-semibold"
              >
                <span className="text-xl">{menu.icon}</span>
                <span className="flex-1">{menu.label}</span>
                {menu.badge && (
                  <span className="px-2 py-1 rounded-full bg-blue-400/20 text-blue-400 text-xs font-black">
                    {menu.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Course Categories */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-black text-white mb-4">Explore Courses</h3>
            <div className="space-y-2">
              {courses.map((course, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all text-left"
                >
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.color} to-transparent`}
                  ></div>
                  <span className="font-semibold">{course.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content flex-1 p-4 sm:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2">
              Khám phá Khóa học
            </h1>
            <p className="text-gray-400">
              Lựa chọn từ hơn 50+ khóa học chất lượng cao
            </p>
          </div>

          {/* Course Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 course-grid">
            {courses.map((course, idx) => (
              <button
                key={idx}
                onClick={() => setCourseDropdown(idx)}
                className="glass-effect rounded-2xl p-8 text-left hover:border-blue-400/50 transition-all group"
              >
                <div className={`text-5xl mb-4`}>
                  {course.name === "Coding" && "💻"}
                  {course.name === "Robotics" && "🤖"}
                  {course.name === "Mathematics" && "📐"}
                  {course.name === "Finance" && "💰"}
                </div>
                <h3 className="font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-400">
                  Explore {course.name.toLowerCase()} courses
                </p>
              </button>
            ))}
          </div>

          {/* Modules Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-6">
              Your Learning Path
            </h2>
            <div className="space-y-4">
              {modules.map((module) => (
                <div
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className={`module-card glass-effect rounded-2xl p-6 cursor-pointer transition-all ${
                    selectedModule === module.id
                      ? "border-blue-400 bg-blue-400/10"
                      : "hover:border-blue-400/50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-4xl">{module.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-white">
                            {module.title}
                          </h3>
                          {module.ribbon && (
                            <span className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-400 text-xs font-black">
                              {module.ribbon}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">
                          {module.lessons.length} lessons
                        </p>
                      </div>
                    </div>
                    <div className="text-2xl">
                      {module.locked ? (
                        <Lock size={24} />
                      ) : (
                        <Unlock size={24} className="text-green-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module Lessons */}
          {currentModule && (
            <div className="mb-12">
              <h2 className="text-2xl font-black text-white mb-6">
                {currentModule.title}
              </h2>
              <div className="lesson-grid">
                {currentModule.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="glass-effect rounded-2xl p-6 hover:border-blue-400/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-black text-white group-hover:text-blue-400 transition-colors flex-1">
                        {lesson.title}
                      </h4>
                      {lesson.locked ? (
                        <Lock
                          size={20}
                          className="text-yellow-400 flex-shrink-0"
                        />
                      ) : (
                        <Unlock
                          size={20}
                          className="text-green-400 flex-shrink-0"
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {lesson.difficulty}
                      </span>
                      <button className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-black font-black rounded-lg text-sm transition-all">
                        {lesson.locked ? "Unlock" : "Learn"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Checklist Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-black text-white mb-6">
              Before Your First Class
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <div className="space-y-4">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-300 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-effect rounded-2xl p-12 text-center bg-blue-400/10 border border-blue-400/30 mb-8">
            <h3 className="text-2xl font-black text-white mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of students exploring new skills and achieving
              their goals with BrightKids.
            </p>
            <button className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-black font-black rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-blue-400/50">
              Bắt đầu ngay
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

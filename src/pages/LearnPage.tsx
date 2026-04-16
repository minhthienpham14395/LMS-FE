import React, { useState } from "react";
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
} from "lucide-react";

export default function CourseExplorer() {
  const [selectedModule, setSelectedModule] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);

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
    { name: "Coding", color: "from-cyan-300" },
    { name: "Robotics", color: "from-green-400" },
    { name: "Mathematics", color: "from-purple-400" },
    { name: "Finance", color: "from-yellow-400" },
  ];

  const currentModule = modules.find((m) => m.id === selectedModule);
  const studentProfile = {
    name: "Tùn",
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

  return (
    <div className="min-h-screen bg-white text-gray-900">
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

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .sidebar-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .main-content {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .sidebar-right {
          animation: slideInRight 0.6s ease-out 0.2s both;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .module-card {
          transition: all 0.3s ease;
        }

        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 153, 255, 0.3);
          border-color: #0891b2;
        }

        .lesson-item {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .lesson-item:hover {
          background: rgba(102, 153, 255, 0.1);
          padding-left: calc(1.5rem + 4px);
          border-color: #0891b2;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.3);
        }

        .ribbon {
          position: absolute;
          top: -5px;
          left: 20px;
          background: linear-gradient(135deg, #0891b2, #5588ff);
          color: white;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.5);
          transform: rotate(-5deg);
        }

        .ribbon::before {
          content: '🎀';
          margin-right: 4px;
        }

        .profile-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #0891b2, #5588ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          margin: 0 auto 12px;
          box-shadow: 0 0 20px rgba(102, 153, 255, 0.5);
        }

        .stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: rgba(102, 153, 255, 0.1);
          border: 1px solid rgba(102, 153, 255, 0.3);
          border-radius: 8px;
          font-weight: 600;
          font-size: 12px;
          margin: 0 4px;
          color: #0891b2;
        }

        .difficulty-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .difficulty-easy {
          background: rgba(16, 185, 129, 0.2);
          color: #6ee7b7;
        }

        .difficulty-medium {
          background: rgba(251, 146, 60, 0.2);
          color: #fed7aa;
        }

        .difficulty-hard {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }

        .checklist-item {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(102, 153, 255, 0.2);
          border-radius: 12px;
          margin-bottom: 12px;
          font-size: 12px;
          line-height: 1.5;
          color: #ccc;
        }

        .checklist-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .btn-trial {
          background: #0891b2;
          color: black;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(102, 153, 255, 0.5);
        }

        .btn-trial:hover {
          transform: translateY(-2px);
          background: white;
          box-shadow: 0 0 30px rgba(102, 153, 255, 0.6);
        }

        .menu-item {
          transition: all 0.3s ease;
          color: #ccc;
        }

        .menu-item:hover {
          background: rgba(102, 153, 255, 0.1);
          color: #0891b2;
          border-left: 4px solid #0891b2;
          padding-left: calc(1rem + 4px);
        }

        .menu-item.active {
          background: rgba(102, 153, 255, 0.2);
          color: #0891b2;
          font-weight: 700;
          border-left: 4px solid #0891b2;
          padding-left: calc(1rem + 4px);
        }

        .course-title {
          background: linear-gradient(135deg, #ffffff, #0891b2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className={`hidden lg:flex flex-col w-64 sidebar-left`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-lg flex items-center justify-center text-black font-black text-sm">
              B
            </div>
            <div className="text-left">
              <p className="font-black text-gray-900 text-sm">BrightKids</p>
              <p className="text-xs text-gray-500">Learning Platform</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2 mb-8">
            {sidebarMenus.map((menu, idx) => (
              <div
                key={idx}
                className={`menu-item flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer border-l-4 border-transparent ${
                  idx === 1 ? "active" : ""
                }`}
              >
                <span className="text-xl">{menu.icon}</span>
                <span className="text-sm font-semibold">{menu.label}</span>
                {menu.badge && (
                  <span className="ml-auto px-2 py-1 bg-red-500 text-gray-900 text-xs font-black rounded-full">
                    {menu.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Timezone */}
          <div className="mb-6 pb-6 border-t border-gray-300">
            <div className="flex items-center gap-2 text-gray-900 text-sm font-semibold mb-3">
              <Globe size={16} />
              Timezone
            </div>
            <button className="w-full flex items-center justify-between px-3 py-2 glass-effect rounded-lg text-sm text-gray-700 hover:border-teal-600 transition-all">
              <span className="text-xs">02:31 PM Asia/Ho_Chi_Minh...</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Language */}
          <div>
            <div className="flex items-center gap-2 text-gray-900 text-sm font-semibold mb-3">
              📚 Language
            </div>
            <button className="w-full flex items-center justify-between px-3 py-2 glass-effect rounded-lg text-sm text-gray-700 hover:border-teal-600 transition-all">
              <span>English</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 main-content">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="text-center flex-1">
              <div className="relative inline-block">
                <button
                  onClick={() => setCourseDropdown(!courseDropdown)}
                  className="flex items-center gap-2 text-2xl font-black mb-2 hover:text-teal-700 transition-colors"
                >
                  Course explorer for{" "}
                  <span className="text-teal-700">Coding</span>
                  <ChevronDown size={24} />
                </button>
                {courseDropdown && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 glass-effect rounded-lg shadow-lg z-10 w-48">
                    {courses.map((course, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-700 first:rounded-t-lg last:rounded-b-lg transition-all"
                      >
                        {course.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-gray-500 text-sm">
                Have fun exploring the course
              </p>
            </div>

            <div className="hidden lg:block w-16"></div>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.id} className="module-card">
                {/* Module Header */}
                {currentModule?.id === module.id && (
                  <div className="relative glass-effect rounded-3xl p-6 mb-6 border-2 border-teal-600/30">
                    {module.ribbon && (
                      <div className="ribbon">{module.ribbon}</div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                          {module.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-black text-gray-900">
                            {module.title}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {module.category}
                          </p>
                        </div>
                      </div>
                      <button className="btn-trial">Book a Trial Class</button>
                    </div>
                  </div>
                )}

                {/* Lessons List */}
                {currentModule?.id === module.id && (
                  <div className="space-y-3">
                    {module.lessons.map((lesson, idx) => (
                      <div
                        key={lesson.id}
                        className="lesson-item rounded-xl p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                            🔒
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-700">
                              {lesson.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`difficulty-badge difficulty-${lesson.difficulty.toLowerCase()}`}
                          >
                            {lesson.difficulty}
                          </span>
                          <button className="p-2 hover:bg-gray-50 rounded-lg transition-all text-lg">
                            ⚡
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Module Selection */}
                {currentModule?.id !== module.id && (
                  <button
                    onClick={() => setSelectedModule(module.id)}
                    className="module-card w-full glass-effect rounded-2xl p-6 hover:border-teal-600/50 border-2 border-transparent text-left transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                          {module.icon}
                        </div>
                        <div>
                          <h3 className="font-black text-gray-900">
                            {module.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {module.category}
                          </p>
                        </div>
                      </div>
                      {module.locked && (
                        <Lock size={24} className="text-gray-500" />
                      )}
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:flex flex-col w-80 gap-6 sidebar-right">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-avatar">{studentProfile.avatar}</div>
            <h3 className="text-lg font-black text-gray-900 mb-1">
              {studentProfile.name}
            </h3>
            <p className="text-gray-500 text-sm font-semibold mb-4">
              {studentProfile.grade}
            </p>

            {/* Points & Stars */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="stat-badge">
                <span className="text-lg">🏅</span>
                {studentProfile.points}
              </div>
              <div className="stat-badge">
                <span className="text-lg">💖</span>
                {studentProfile.stars}
              </div>
            </div>

            {/* Edit & Settings */}
            <div className="flex items-center justify-center gap-2">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-all">
                <Edit2
                  size={18}
                  className="text-gray-500 hover:text-teal-700"
                />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-all">
                <Settings
                  size={18}
                  className="text-gray-500 hover:text-teal-700"
                />
              </button>
            </div>
          </div>

          {/* Checklist */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="font-black text-gray-900 mb-4">
              Checklist for joining the class
            </h3>
            <div className="space-y-3">
              {checklist.map((item, idx) => (
                <div key={idx} className="checklist-item">
                  <div className="checklist-icon">{item.icon}</div>
                  <p className="text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white/80 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="bg-gray-950 w-64 h-full p-6 overflow-y-auto">
            <nav className="space-y-2">
              {sidebarMenus.map((menu, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-gray-500 hover:bg-blue-400/10 hover:text-teal-700 transition-all"
                >
                  <span className="text-xl">{menu.icon}</span>
                  <span className="text-sm font-semibold">{menu.label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

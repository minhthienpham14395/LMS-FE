import React, { useState, useEffect } from "react";
import {
  Menu,
  Bell,
  Settings,
  LogOut,
  Home,
  BookOpen,
  Users,
  BarChart3,
  MessageSquare,
  HelpCircle,
  X,
  ChevronDown,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    {
      title: "Học viên",
      value: "1,250",
      change: "+12%",
      icon: "👥",
      color: "from-cyan-400",
    },
    {
      title: "Khóa học hoàn thành",
      value: "3,428",
      change: "+8%",
      icon: "✅",
      color: "from-green-400",
    },
    {
      title: "Tổng doanh thu",
      value: "$125,430",
      change: "+23%",
      icon: "💰",
      color: "from-purple-400",
    },
    {
      title: "Đánh giá trung bình",
      value: "4.8/5",
      change: "+2%",
      icon: "⭐",
      color: "from-yellow-400",
    },
  ];

  const recentCourses = [
    {
      name: "Coding Champion II",
      students: 125,
      revenue: "$12,500",
      status: "Active",
    },
    {
      name: "Finlit Certification L1",
      students: 98,
      revenue: "$9,800",
      status: "Active",
    },
    { name: "RoboMaster", students: 87, revenue: "$8,700", status: "Active" },
    {
      name: "Web Development Pro",
      students: 156,
      revenue: "$15,600",
      status: "Active",
    },
  ];

  const activities = [
    {
      user: "Nguyễn Hương",
      action: "Hoàn thành khóa Coding Champion II",
      time: "2 phút trước",
      avatar: "H",
    },
    {
      user: "Trần Minh",
      action: "Đăng ký khóa Robotics",
      time: "15 phút trước",
      avatar: "M",
    },
    {
      user: "Phạm Linh",
      action: "Nộp bài tập Toán học nâng cao",
      time: "1 giờ trước",
      avatar: "L",
    },
    {
      user: "Võ An",
      action: "Tham gia live session Lập trình",
      time: "3 giờ trước",
      avatar: "V",
    },
  ];

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BookOpen, label: "Khóa học" },
    { icon: Users, label: "Học viên" },
    { icon: BarChart3, label: "Thống kê" },
    { icon: MessageSquare, label: "Tin nhắn" },
  ];

  const closeSidebarOnMobile = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(8, 145, 178, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(8, 145, 178, 0.4);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes chartBars {
          from {
            height: 0;
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

        .stat-card {
          animation: fadeInUp 0.6s ease-out;
          box-shadow: 0 4px 16px rgba(8, 145, 178, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.2);
          transform: translateY(-4px);
        }

        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }

        .chart-bar {
          animation: chartBars 1s ease-out;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
        }

        .chart-bar:hover {
          box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
        }

        .chart-bar:nth-child(1) { animation-delay: 0.1s; }
        .chart-bar:nth-child(2) { animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { animation-delay: 0.3s; }
        .chart-bar:nth-child(4) { animation-delay: 0.4s; }
        .chart-bar:nth-child(5) { animation-delay: 0.5s; }
        .chart-bar:nth-child(6) { animation-delay: 0.6s; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(8, 145, 178, 0.15);
          box-shadow: 0 8px 32px rgba(8, 145, 178, 0.12);
          transition: box-shadow 0.3s ease;
        }

        .glass-effect:hover {
          box-shadow: 0 12px 48px rgba(8, 145, 178, 0.18);
        }

        .sidebar-link {
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }

        .sidebar-link:hover {
          background: rgba(8, 145, 178, 0.1);
          border-left-color: #0891b2;
          padding-left: calc(1rem + 4px);
          box-shadow: inset 4px 0 0 #0891b2;
        }

        .sidebar-link.active {
          background: rgba(8, 145, 178, 0.15);
          border-left-color: #0891b2;
          color: #0891b2;
          box-shadow: inset 4px 0 0 #0891b2;
        }

        .stat-value {
          animation: glow 3s ease-in-out infinite;
        }

        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        .activity-item {
          transition: all 0.3s ease;
          border-radius: 0.5rem;
        }

        .activity-item:hover {
          background: rgba(8, 145, 178, 0.05);
          border-left-color: #0891b2;
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.1);
        }

        .avatar {
          background: #0891b2;
          box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
          color: white;
          transition: box-shadow 0.3s ease;
        }

        .avatar:hover {
          box-shadow: 0 6px 16px rgba(8, 145, 178, 0.5);
        }

        .btn-primary {
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(8, 145, 178, 0.3);
        }

        .btn-primary:hover {
          box-shadow: 0 12px 32px rgba(8, 145, 178, 0.5);
          transform: translateY(-4px);
        }

        .btn-primary:active {
          transform: translateY(-2px);
        }

        .chart-tooltip {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(8, 145, 178, 0.2);
          backdrop-filter: blur(10px);
          color: #111827;
        }

        .sidebar-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            max-width: 256px;
          }
        }

        /* Tablet responsive */
        @media (max-width: 1024px) {
          .chart-container {
            overflow-x: auto;
          }
        }
      `}</style>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sidebar-overlay md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gray-50 border-r border-gray-300 sidebar transition-transform z-40 ${
          !sidebarOpen ? "-translate-x-full md:translate-x-0" : ""
        }`}
      >
        <div className="p-6 md:p-8 flex items-center gap-3 border-b border-gray-300">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center font-black text-white text-sm">
            B
          </div>
          <div>
            <p className="font-black text-gray-900 text-sm md:text-base">BrightKids</p>
            <p className="text-xs text-gray-600">Admin</p>
          </div>
        </div>

        <nav className="p-4 md:p-6 space-y-2">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={closeSidebarOnMobile}
              className={`sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 cursor-pointer text-sm md:text-base ${
                item.active
                  ? "bg-teal-50 border-teal-600 text-teal-700"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <item.icon size={18} className="md:w-5 md:h-5" />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t border-gray-300 space-y-2">
          <div
            onClick={closeSidebarOnMobile}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer transition-all text-sm md:text-base"
          >
            <HelpCircle size={18} className="md:w-5 md:h-5" />
            <span className="font-semibold">Trợ giúp</span>
          </div>
          <div
            onClick={closeSidebarOnMobile}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-all text-sm md:text-base"
          >
            <LogOut size={18} className="md:w-5 md:h-5" />
            <span className="font-semibold">Đăng xuất</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 transition-all">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-300 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-900 md:hidden"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl md:text-2xl font-black text-gray-900">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-900 relative">
                <Bell size={18} className="md:w-5 md:h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full pulse-dot"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-all text-gray-900 hidden sm:block">
                <Settings size={18} className="md:w-5 md:h-5" />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-gray-100 transition-all text-gray-900 text-sm md:text-base"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-xs md:text-sm">
                    A
                  </div>
                  <span className="font-semibold hidden sm:inline">Admin</span>
                  <ChevronDown size={16} className="hidden sm:block" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-12 w-40 md:w-48 glass-effect rounded-xl overflow-hidden z-50">
                    <div className="p-3 md:p-4 border-b border-gray-300">
                      <p className="text-xs md:text-sm font-semibold text-gray-900">
                        Quản trị viên
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        admin@brightkids.com
                      </p>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer text-xs md:text-sm text-gray-900">
                        Hồ sơ
                      </div>
                      <div className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer text-xs md:text-sm text-gray-900">
                        Cài đặt
                      </div>
                      <div className="px-4 py-2 hover:bg-red-50 rounded cursor-pointer text-xs md:text-sm text-red-600">
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="p-4 md:p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card glass-effect rounded-2xl p-4 md:p-6 hover:border-teal-400/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl md:text-3xl">{stat.icon}</span>
                  <span
                    className={`text-xs font-black px-2 md:px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} to-transparent text-white`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  {stat.title}
                </p>
                <p className="text-2xl md:text-3xl font-black text-gray-900 stat-value">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Bar Chart */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-4 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-lg md:text-xl font-black text-gray-900">
                  Doanh thu theo tháng
                </h3>
                <select className="bg-gray-100 border border-gray-300 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm text-gray-900 hover:bg-gray-200 transition-all w-full sm:w-auto">
                  <option>Năm nay</option>
                  <option>Năm trước</option>
                </select>
              </div>

              <div className="chart-container overflow-x-auto">
                <div className="flex items-end justify-between h-40 md:h-64 gap-2 md:gap-3 min-w-full md:min-w-0">
                  {[65, 78, 92, 85, 71, 88, 95, 82, 77, 91, 86, 79].map(
                    (height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center gap-1 md:gap-2 min-w-0"
                      >
                        <div
                          className="chart-bar w-full bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-t-lg hover:from-cyan-500 hover:to-cyan-400 transition-all cursor-pointer group/bar relative"
                          style={{ height: `${height * 1.5}px`, minHeight: "20px" }}
                        >
                          <div className="chart-tooltip opacity-0 group-hover/bar:opacity-100 absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 px-2 md:px-3 py-1 md:py-2 rounded-lg text-xs whitespace-nowrap transition-opacity">
                            ${height * 100}
                          </div>
                        </div>
                        <span className="text-xs text-gray-600">T{idx + 1}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Pie Chart Alternative */}
            <div className="glass-effect rounded-2xl p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-6">
                Top Khóa học
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Coding", value: 35, color: "from-cyan-400" },
                  { name: "Robotics", value: 28, color: "from-green-400" },
                  { name: "Tài chính", value: 22, color: "from-purple-400" },
                  { name: "Toán học", value: 15, color: "from-yellow-400" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs md:text-sm font-semibold text-gray-700">
                        {item.name}
                      </span>
                      <span className="text-xs md:text-sm font-black text-teal-700">
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} to-transparent rounded-full transition-all`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Recent Courses Table */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-4 md:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h3 className="text-lg md:text-xl font-black text-gray-900">
                  Khóa học phổ biến
                </h3>
                <button className="text-teal-700 hover:text-teal-800 text-xs md:text-sm font-semibold">
                  Xem tất cả →
                </button>
              </div>

              <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 md:py-4 px-4 font-black text-gray-600 uppercase tracking-wider">
                        Khóa học
                      </th>
                      <th className="text-left py-3 md:py-4 px-4 font-black text-gray-600 uppercase tracking-wider">
                        HV
                      </th>
                      <th className="text-left py-3 md:py-4 px-4 font-black text-gray-600 uppercase tracking-wider">
                        Doanh thu
                      </th>
                      <th className="text-left py-3 md:py-4 px-4 font-black text-gray-600 uppercase tracking-wider">
                        TT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map((course, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-200 hover:bg-gray-100/50 transition-all"
                      >
                        <td className="py-3 md:py-4 px-4">
                          <p className="font-semibold text-gray-900 truncate">
                            {course.name}
                          </p>
                        </td>
                        <td className="py-3 md:py-4 px-4 text-gray-600">
                          {course.students}
                        </td>
                        <td className="py-3 md:py-4 px-4 font-semibold text-teal-700">
                          {course.revenue}
                        </td>
                        <td className="py-3 md:py-4 px-4">
                          <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                            {course.status === "Active" ? "✓" : "●"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="glass-effect rounded-2xl p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-6">
                Hoạt động gần đây
              </h3>
              <div className="space-y-3 md:space-y-4 max-h-96 overflow-y-auto">
                {activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="activity-item border-l-4 border-transparent pl-3 md:pl-4 py-2 md:py-3 rounded-r-lg"
                  >
                    <div className="flex items-start gap-2 md:gap-3 mb-2">
                      <div className="avatar w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-white text-xs flex-shrink-0">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                          {activity.user}
                        </p>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {activity.action}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 ml-9 md:ml-11">
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="mt-6 md:mt-8 bg-gradient-to-r from-cyan-100/40 to-teal-100/40 rounded-2xl p-4 md:p-8 border border-teal-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-2xl font-black text-gray-900 mb-2">
                  👋 Chào mừng trở lại, Admin!
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Bạn đang làm tốt công việc. Hôm nay có 45 học viên mới đăng
                  ký.
                </p>
              </div>
              <button className="btn-primary bg-teal-600 hover:bg-teal-700 text-white font-black px-6 md:px-8 py-2 md:py-3 rounded-xl whitespace-nowrap text-sm md:text-base w-full sm:w-auto">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
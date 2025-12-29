import React, { useState } from "react";
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

export default function DashboardEdu() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const stats = [
    {
      title: "Học viên",
      value: "1,250",
      change: "+12%",
      icon: "👥",
      color: "from-blue-400",
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
            box-shadow: 0 0 20px rgba(102, 153, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(102, 153, 255, 0.6);
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
        }

        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }

        .chart-bar {
          animation: chartBars 1s ease-out;
        }

        .chart-bar:nth-child(1) { animation-delay: 0.1s; }
        .chart-bar:nth-child(2) { animation-delay: 0.2s; }
        .chart-bar:nth-child(3) { animation-delay: 0.3s; }
        .chart-bar:nth-child(4) { animation-delay: 0.4s; }
        .chart-bar:nth-child(5) { animation-delay: 0.5s; }
        .chart-bar:nth-child(6) { animation-delay: 0.6s; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-link {
          transition: all 0.3s ease;
        }

        .sidebar-link:hover {
          background: rgba(102, 153, 255, 0.1);
          border-left-color: #6699FF;
          padding-left: calc(1rem + 4px);
        }

        .sidebar-link.active {
          background: rgba(102, 153, 255, 0.2);
          border-left-color: #6699FF;
          color: #6699FF;
        }

        .stat-value {
          animation: glow 3s ease-in-out infinite;
        }

        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }

        .activity-item {
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          background: rgba(102, 153, 255, 0.05);
          border-left-color: #6699FF;
        }

        .avatar {
          background: #6699FF;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.5);
        }

        .btn-primary {
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          box-shadow: 0 0 20px rgba(102, 153, 255, 0.5);
          transform: translateY(-2px);
        }

        .chart-tooltip {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(102, 153, 255, 0.3);
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gray-950 border-r border-white/10 sidebar transition-transform ${
          !sidebarOpen ? "-translate-x-full" : ""
        }`}
      >
        <div className="p-8 flex items-center gap-3 border-b border-white/10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center font-black text-black">
            B
          </div>
          <div>
            <p className="font-black text-white">BrightKids</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

        <nav className="p-6 space-y-2">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 cursor-pointer ${
                item.active
                  ? "bg-blue-400/20 border-blue-400 text-blue-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-semibold text-sm">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
            <HelpCircle size={20} />
            <span className="text-sm font-semibold">Trợ giúp</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-400/10 cursor-pointer transition-all">
            <LogOut size={20} />
            <span className="text-sm font-semibold">Đăng xuất</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all ${sidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Header */}
        <header className="bg-gray-950/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-all"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-black text-white">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full pulse-dot"></span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                <Settings size={20} />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-black text-sm">
                    A
                  </div>
                  <span className="text-sm font-semibold hidden sm:inline">
                    Admin
                  </span>
                  <ChevronDown size={16} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-12 w-48 glass-effect rounded-xl overflow-hidden z-50">
                    <div className="p-4 border-b border-white/10">
                      <p className="text-sm font-semibold text-white">
                        Quản trị viên
                      </p>
                      <p className="text-xs text-gray-400">
                        admin@brightkids.com
                      </p>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="px-4 py-2 hover:bg-white/10 rounded cursor-pointer text-sm">
                        Hồ sơ
                      </div>
                      <div className="px-4 py-2 hover:bg-white/10 rounded cursor-pointer text-sm">
                        Cài đặt
                      </div>
                      <div className="px-4 py-2 hover:bg-red-400/10 rounded cursor-pointer text-sm text-red-400">
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
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card glass-effect rounded-2xl p-6 hover:border-blue-400/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                  <span
                    className={`text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} to-transparent text-white`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
                <p className="text-3xl font-black text-white stat-value">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Bar Chart */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-white">
                  Doanh thu theo tháng
                </h3>
                <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white hover:bg-white/10 transition-all">
                  <option>Năm nay</option>
                  <option>Năm trước</option>
                </select>
              </div>

              <div className="flex items-end justify-between h-64 gap-3">
                {[65, 78, 92, 85, 71, 88, 95, 82, 77, 91, 86, 79].map(
                  (height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div
                        className="chart-bar w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg hover:from-blue-500 hover:to-blue-400 transition-all cursor-pointer group/bar relative"
                        style={{ height: `${height * 2}px` }}
                      >
                        <div className="chart-tooltip opacity-0 group-hover/bar:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-opacity">
                          ${height * 100}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">T{idx + 1}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Pie Chart Alternative */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-black text-white mb-6">
                Top Khóa học
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Coding", value: 35, color: "from-blue-400" },
                  { name: "Robotics", value: 28, color: "from-green-400" },
                  { name: "Tài chính", value: 22, color: "from-purple-400" },
                  { name: "Toán học", value: 15, color: "from-yellow-400" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-300">
                        {item.name}
                      </span>
                      <span className="text-sm font-black text-blue-400">
                        {item.value}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Courses Table */}
            <div className="lg:col-span-2 glass-effect rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-white">
                  Khóa học phổ biến
                </h3>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  Xem tất cả →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                        Khóa học
                      </th>
                      <th className="text-left py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                        Học viên
                      </th>
                      <th className="text-left py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                        Doanh thu
                      </th>
                      <th className="text-left py-4 px-4 text-xs font-black text-gray-400 uppercase tracking-wider">
                        Trạng thái
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentCourses.map((course, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-white/5 hover:bg-white/5 transition-all"
                      >
                        <td className="py-4 px-4">
                          <p className="font-semibold text-white text-sm">
                            {course.name}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-400">
                          {course.students}
                        </td>
                        <td className="py-4 px-4 font-semibold text-blue-400 text-sm">
                          {course.revenue}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-green-400/20 text-green-400 text-xs font-semibold">
                            {course.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-black text-white mb-6">
                Hoạt động gần đây
              </h3>
              <div className="space-y-4">
                {activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="activity-item border-l-4 border-transparent pl-4 py-3 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="avatar w-8 h-8 rounded-full flex items-center justify-center font-bold text-black text-xs flex-shrink-0">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">
                          {activity.user}
                        </p>
                        <p className="text-xs text-gray-400">
                          {activity.action}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 ml-11">
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="mt-8 bg-gradient-to-r from-blue-400/20 to-blue-600/10 rounded-2xl p-8 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white mb-2">
                  👋 Chào mừng trở lại, Admin!
                </h2>
                <p className="text-gray-300">
                  Bạn đang làm tốt công việc. Hôm nay có 45 học viên mới đăng
                  ký.
                </p>
              </div>
              <button className="btn-primary bg-blue-400 hover:bg-blue-500 text-black font-black px-8 py-3 rounded-xl whitespace-nowrap">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  accentColor?: string;
  isLoggedIn?: boolean;
  userName?: string;
  userEmail?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  onLogoutClick?: () => void;
  onProfileClick?: () => void;
  onDashboardClick?: () => void;
  onSettingsClick?: () => void;
}

export default function Navbar({
  accentColor = "#3085c7",
  isLoggedIn = false,
  userName = "Admin",
  userEmail = "user@brightkids.com",
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  onProfileClick,
  onDashboardClick,
  onSettingsClick,
}: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleLogout = () => {
    setDropdownOpen(false);
    onLogoutClick?.();
  };

  return (
    <>
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

        .navbar-container {
          animation: slideDown 0.6s ease-out;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9));
          backdrop-filter: blur(10px);
        }

        nav a {
          position: relative;
          transition: all 0.3s ease;
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
          box-shadow: 0 0 8px rgba(48, 133, 199, 0.3);
        }

        nav a:hover::after {
          width: 100%;
        }

        .dropdown-menu {
          animation: slideDown 0.3s ease-out;
        }

        @media (max-width: 768px) {
          .navbar-nav {
            display: none;
          }

          .navbar-container {
            padding: 1rem;
          }

          .navbar-logo {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Navbar */}
      <header className="navbar-container fixed top-0 w-full px-12 py-5 flex justify-between items-center z-50 border-b border-gray-200/50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="navbar-logo text-3xl font-black"
            style={{
              color: accentColor,
              textShadow: `0 0 12px rgba(48, 133, 199, 0.2)`,
            }}
          >
            <a href="/" className="hover:opacity-80 transition-opacity">
              BrightKids
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-nav hidden md:flex gap-8 items-center">
          <a
            href="#skills"
            className="text-gray-700 hover:text-[#3085c7] transition-all font-medium"
          >
            Khóa học
          </a>
          <a
            href="#why"
            className="text-gray-700 hover:text-[#3085c7] transition-all font-medium"
          >
            Tại sao chọn chúng tôi
          </a>
          <a
            href="#teachers"
            className="text-gray-700 hover:text-[#3085c7] transition-all font-medium"
          >
            Giáo viên
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-[#3085c7] transition-all font-medium"
          >
            Liên hệ
          </a>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              {/* Login Button */}
              <button
                onClick={onLoginClick}
                className="text-gray-700 hover:text-[#3085c7] transition-all font-medium px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                <Link
                  to="/login"
                  className="text-[#3085c7] hover:text-[#164789] transition-all font-medium px-6 py-2 rounded-lg hover:bg-gray-100"
                >
                  Đăng nhập
                </Link>
              </button>

              {/* Signup Button */}
              <button
                onClick={onSignupClick}
                className="text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 12px rgba(48, 133, 199, 0.2)`,
                }}
              >
                <Link
                  to="/register"
                  className="text-[#3085c7] hover:text-[#164789] transition-all font-medium px-6 py-2 rounded-lg "
                >
                  Đăng ký
                </Link>
              </button>
            </>
          ) : (
            // User Dropdown Menu
            <div className="relative" ref={dropdownRef}>
              {/* User Profile Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
              >
                {/* User Avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px rgba(48, 133, 199, 0.2)`,
                  }}
                >
                  {userName.charAt(0).toUpperCase()}
                </div>

                {/* Username */}
                <span className="text-gray-900 font-semibold text-sm">
                  {userName}
                </span>

                {/* Dropdown Arrow */}
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

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="dropdown-menu absolute right-0 top-12 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg z-50">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-gray-900 font-semibold text-sm">
                      {userName}
                    </p>
                    <p className="text-gray-500 text-xs">{userEmail}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2 space-y-1">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onProfileClick?.();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      👤 Hồ sơ
                    </button>

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onDashboardClick?.();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      📊 Dashboard
                    </button>

                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        onSettingsClick?.();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm rounded transition-all"
                    >
                      ⚙️ Cài đặt
                    </button>
                  </div>

                  {/* Logout Button */}
                  <div className="border-t border-gray-200 p-2">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 hover:bg-red-50 text-red-600 text-sm rounded transition-all font-semibold"
                    >
                      🚪 Đăng xuất
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

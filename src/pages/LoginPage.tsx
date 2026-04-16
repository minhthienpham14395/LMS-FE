import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const accentColor = "#0891b2";

  interface ErrorsState {
    email: string;
    password: string;
  }

  const validateForm = (): boolean => {
    const newErrors: ErrorsState = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email không được để trống";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Mật khẩu không được để trống";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSocialLogin = (provider: string): void => {
    alert(`Đăng nhập qua ${provider} (Demo)`);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    localStorage.setItem("brightkids_isLoggedIn", "true");
    localStorage.setItem("brightkids_userEmail", email);
    const userName = email.split("@")[0];
    localStorage.setItem(
      "brightkids_userName",
      userName.charAt(0).toUpperCase() + userName.slice(1)
    );

    if (email === "admin@gmail.com") {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/learn";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
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

        .illustration-side {
          animation: slideInLeft 0.8s ease-out;
        }

        .form-side {
          animation: slideInRight 0.8s ease-out;
        }

        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-shape {
          animation: pulse 4s ease-in-out infinite;
        }

        .form-container {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        input:focus {
          outline: none;
        }

        input.error {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.05) !important;
        }

        .input-group {
          position: relative;
          animation: fadeIn 0.8s ease-out backwards;
        }

        .loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(8, 145, 178, 0.3);
          border-radius: 50%;
          border-top-color: #0891b2;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.5rem;
        }

        .gradient-divider {
          background: linear-gradient(90deg, transparent, #0891b2, transparent);
          height: 2px;
        }

        .btn-social {
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .btn-social:hover {
          border-color: #0891b2;
          background: rgba(8, 145, 178, 0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .illustration-side {
            display: none;
          }
        }
      `}</style>

      {/* Illustration Side */}
      <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden items-center justify-center illustration-side">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-300/20 to-transparent -translate-x-1/2 -translate-y-1/2 floating-shape"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-tl from-teal-300/20 to-transparent translate-x-1/2 translate-y-1/2 pulse-shape"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-2xl bg-gradient-to-r from-blue-300/15 to-cyan-300/15 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Decorative Elements */}
        <div className="relative z-10 text-center px-8">
          <div className="mb-8">
            <div
              className="text-6xl font-black mb-4"
              style={{ color: accentColor }}
            >
              BrightKids
            </div>
            <div className="text-xl font-bold text-gray-800 mb-2">
              Hành Trình Học Tập Sáng Tạo
            </div>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Khám phá thế giới lập trình, robotics và tài chính cùng những giáo
              viên giỏi nhất
            </p>
          </div>

          {/* Illustration Circles */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-teal-200/50"></div>
            <div className="absolute inset-8 rounded-full border-2 border-cyan-200/30"></div>
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-400/10 to-teal-400/10"></div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-6xl floating-shape">
              🚀
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
            <div className="bg-white/60 backdrop-blur rounded-lg p-3">
              <div
                className="text-2xl font-black"
                style={{ color: accentColor }}
              >
                10K+
              </div>
              <div className="text-xs text-gray-600 font-medium">Học viên</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-3">
              <div
                className="text-2xl font-black"
                style={{ color: accentColor }}
              >
                50+
              </div>
              <div className="text-xs text-gray-600 font-medium">Khóa học</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-3">
              <div
                className="text-2xl font-black"
                style={{ color: accentColor }}
              >
                98%
              </div>
              <div className="text-xs text-gray-600 font-medium">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-12 form-side">
        <div className="w-full max-w-sm">
          {/* Mobile Header */}
          <div className="md:hidden text-center mb-8">
            <div
              className="text-4xl font-black mb-2"
              style={{ color: accentColor }}
            >
              BrightKids
            </div>
            <p className="text-gray-600 text-sm">
              Đăng nhập để tiếp tục hành trình học tập
            </p>
          </div>

          {/* Form Container */}
          <div className="form-container">
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Đăng Nhập
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Nhập thông tin để tiếp tục
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="input-group" style={{ animationDelay: "0.1s" }}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={20} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 ${
                      errors.email ? "error" : ""
                    }`}
                  />
                </div>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div className="input-group" style={{ animationDelay: "0.2s" }}>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Mật khẩu
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={20} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 pl-12 pr-12 text-gray-900 placeholder-gray-400 transition-all focus:bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 ${
                      errors.password ? "error" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div
                className="flex items-center justify-between text-sm"
                style={{ animationDelay: "0.3s" }}
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 bg-white border border-gray-300 rounded cursor-pointer accent-teal-600"
                  />
                  <span className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    Nhớ mật khẩu
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="font-black transition-colors"
                  style={{ color: accentColor }}
                >
                  Quên mật khẩu ?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white font-black py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 12px rgba(8, 145, 178, 0.3)`,
                }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Đang đăng nhập...
                  </>
                ) : (
                  "Đăng nhập"
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-gray-500 text-sm font-medium">
                  Hoặc tiếp tục với
                </span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Google")}
                  className="btn-social py-3 rounded-lg flex items-center justify-center text-xl font-bold"
                >
                  G
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Facebook")}
                  className="btn-social py-3 rounded-lg flex items-center justify-center text-xl font-bold"
                >
                  f
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Apple")}
                  className="btn-social py-3 rounded-lg flex items-center justify-center text-xl font-bold"
                >
                  ⊕
                </button>
              </div>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-gray-700">
            <p>
              Chưa có tài khoản?{" "}
              <Link
                to="/register"
                className="font-black transition-colors"
                style={{ color: accentColor }}
              >
                Đăng ký
              </Link>
            </p>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-600 space-y-2">
            <p>© 2024 BrightKids. All rights reserved.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:text-teal-600 transition-colors">
                Điều khoản
              </a>
              <span>•</span>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Chính sách
              </a>
              <span>•</span>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

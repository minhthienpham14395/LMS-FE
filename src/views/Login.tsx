import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Form validation
  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email không được để trống";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
      isValid = false;
    }

    // Password validation
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

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) return;

    // Show loading state
    setLoading(true);

    // Simulate API call (1.5 seconds delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);

    // Save login state to localStorage
    localStorage.setItem("brightkids_isLoggedIn", "true");
    localStorage.setItem("brightkids_userEmail", email);

    // Extract name from email (e.g., john from john@example.com)
    const userName = email.split("@")[0];
    localStorage.setItem(
      "brightkids_userName",
      userName.charAt(0).toUpperCase() + userName.slice(1)
    );

    // Redirect to landing page
    window.location.href = "/learn";
  };

  // Handle social login (demo)
  const handleSocialLogin = (provider) => {
    alert(`Đăng nhập qua ${provider} (Demo)`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(50px);
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

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(102, 153, 255, 0.5);
            box-shadow: 0 0 20px rgba(102, 153, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 40px rgba(102, 153, 255, 0.8);
            box-shadow: 0 0 40px rgba(102, 153, 255, 0.5);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .login-container {
          animation: slideIn 0.8s ease-out;
        }

        .glow-border {
          animation: glow 3s ease-in-out infinite;
        }

        .float-circle {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-circle {
          animation: pulse 4s ease-in-out infinite;
        }

        input:focus {
          outline: none;
        }

        input.error {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.05) !important;
        }

        .loading-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 3px solid rgba(102, 153, 255, 0.3);
          border-radius: 50%;
          border-top-color: #6699FF;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .input-field {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .input-field:focus {
          background: rgba(102, 153, 255, 0.1);
          border-color: #6699FF;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.3);
        }

        .btn-login {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          box-shadow: 0 0 30px rgba(102, 153, 255, 0.6);
          transform: translateY(-2px);
        }

        .btn-login:active {
          transform: translateY(0);
        }

        .social-btn {
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
        }

        .social-btn:hover {
          border-color: #6699FF;
          background: rgba(102, 153, 255, 0.1);
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.3);
        }

        .link-hover:hover {
          color: #6699FF;
        }

        label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #ccc;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-20 top-0 right-0 -translate-y-32 translate-x-32 float-circle"></div>
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-15 bottom-0 left-0 -translate-x-32 translate-y-32 pulse-circle"></div>
      <div className="absolute w-64 h-64 rounded-full blur-2xl bg-gradient-to-br from-blue-400 to-transparent opacity-10 top-1/2 left-1/4 -translate-y-1/2"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #6699FF 1px, transparent 1px), linear-gradient(90deg, #6699FF 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-12 login-container">
          <div
            className="text-4xl font-black text-blue-400 mb-2 glow-border inline-block px-6 py-2 rounded-xl"
            style={{ textShadow: "0 0 20px rgba(102, 153, 255, 0.5)" }}
          >
            <Link
              to="/landing"
              className="text-white hover:text-blue-400 transition-all font-medium px-6 py-2 rounded-lg hover:bg-white/5"
            >
              BrightKids
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Đăng nhập để tiếp tục hành trình học tập
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-effect rounded-3xl p-8 mb-8 login-container">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Địa chỉ Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 ${
                  errors.email ? "error" : ""
                }`}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 pr-12 ${
                    errors.password ? "error" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-white/5 border border-white/20 rounded cursor-pointer accent-blue-400"
                />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Nhớ mật khẩu
                </span>
              </label>
              <a
                href="/forgot-password"
                className="text-gray-400 hover:text-blue-400 link-hover transition-colors"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-login bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)",
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
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="text-gray-500 text-sm">Hoặc đăng nhập bằng</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
                title="Google Login"
              >
                🔵
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("Facebook")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
                title="Facebook Login"
              >
                👤
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("Apple")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
                title="Apple Login"
              >
                🍎
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-gray-400 login-container">
          <p className="mb-4">
            Chưa có tài khoản?{" "}
            <a
              href="/register"
              className="text-blue-400 font-black hover:text-blue-300 transition-colors"
            >
              Đăng ký ngay
            </a>
          </p>
        </div>

        {/* Info Box */}
        <div className="glass-effect rounded-2xl p-6 mt-8 login-container border border-blue-400/20 bg-blue-400/5">
          <div className="flex gap-3">
            <div className="text-2xl flex-shrink-0">💡</div>
            <div>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-blue-400">Mẹo:</span> Sử dụng
                email học viên BrightKids của bạn hoặc tạo tài khoản mới để bắt
                đầu học tập.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 text-center text-xs text-gray-600 flex gap-4 justify-center flex-wrap login-container">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Điều khoản
          </a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Chính sách
          </a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  );
}

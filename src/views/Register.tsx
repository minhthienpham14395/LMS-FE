import React, { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    interest: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const interests = [
    "Lập trình",
    "Robotics",
    "Toán học",
    "Tài chính",
    "Sáng tạo",
    "Game Design",
  ];

  const ageGroups = ["6-8 tuổi", "9-11 tuổi", "12-14 tuổi", "15-16 tuổi"];

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Họ tên không được để trống";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Họ tên phải có ít nhất 3 ký tự";
    }

    if (!formData.email) {
      newErrors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    if (!formData.age) {
      newErrors.age = "Vui lòng chọn độ tuổi";
    }

    if (!formData.interest) {
      newErrors.interest = "Vui lòng chọn sở thích";
    }

    if (!formData.terms) {
      newErrors.terms = "Bạn phải đồng ý với Điều khoản dịch vụ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);

    // Success notification
    alert(
      `Đăng ký thành công!\nHôn chào ${formData.fullName}! Vui lòng kiểm tra email để xác minh tài khoản.`
    );
  };

  const handleSocialSignup = (provider) => {
    alert(`Đăng ký qua ${provider} (Demo)`);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-500";
    if (passwordStrength <= 2) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "Nhập mật khẩu";
    if (passwordStrength <= 2) return "Yếu";
    if (passwordStrength <= 3) return "Trung bình";
    return "Mạnh";
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

        .register-container {
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

        input:focus,
        select:focus {
          outline: none;
        }

        input.error,
        select.error {
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

        .btn-register {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-register:hover:not(:disabled) {
          box-shadow: 0 0 30px rgba(102, 153, 255, 0.6);
          transform: translateY(-2px);
        }

        .btn-register:active {
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

        .password-strength-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin-top: 0.5rem;
          overflow: hidden;
        }

        .password-strength-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .checkbox-custom {
          appearance: none;
          width: 18px;
          height: 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .checkbox-custom:checked {
          background: #6699FF;
          border-color: #6699FF;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.5);
        }

        .interest-tag {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .interest-tag:hover {
          border-color: #6699FF;
          background: rgba(102, 153, 255, 0.1);
        }

        .interest-tag.selected {
          background: #6699FF;
          color: #000;
          border-color: #6699FF;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.5);
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-20 top-0 right-0 -translate-y-32 translate-x-32 float-circle"></div>
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-15 bottom-0 left-0 -translate-x-32 translate-y-32 pulse-circle"></div>
      <div className="absolute w-64 h-64 rounded-full blur-2xl bg-gradient-to-br from-blue-400 to-transparent opacity-10 top-1/2 right-1/4 -translate-y-1/2"></div>

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

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-10 register-container">
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
          <p className="text-gray-400 text-sm mt-3">
            Tạo tài khoản để bắt đầu học tập cùng chúng tôi
          </p>
        </div>

        {/* Register Card */}
        <div className="glass-effect rounded-3xl p-10 mb-8 register-container">
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Họ và Tên
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Nhập họ tên đầy đủ"
                className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 ${
                  errors.fullName ? "error" : ""
                }`}
              />
              {errors.fullName && (
                <p className="error-text">{errors.fullName}</p>
              )}
            </div>

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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 ${
                  errors.email ? "error" : ""
                }`}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            {/* Two Column Layout for Age and Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Age Selection */}
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Độ tuổi
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={`w-full input-field px-4 py-3 rounded-xl text-white ${
                    errors.age ? "error" : ""
                  }`}
                >
                  <option value="">Chọn độ tuổi</option>
                  {ageGroups.map((group) => (
                    <option key={group} value={group} className="bg-gray-900">
                      {group}
                    </option>
                  ))}
                </select>
                {errors.age && <p className="error-text">{errors.age}</p>}
              </div>

              {/* Interest Selection */}
              <div>
                <label
                  htmlFor="interest"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Sở thích
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`w-full input-field px-4 py-3 rounded-xl text-white ${
                    errors.interest ? "error" : ""
                  }`}
                >
                  <option value="">Chọn sở thích</option>
                  {interests.map((interest) => (
                    <option
                      key={interest}
                      value={interest}
                      className="bg-gray-900"
                    >
                      {interest}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p className="error-text">{errors.interest}</p>
                )}
              </div>
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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
              {formData.password && (
                <div className="mt-2">
                  <div className="password-strength-bar">
                    <div
                      className={`password-strength-fill ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Độ mạnh:{" "}
                    <span
                      className={`${
                        passwordStrength <= 2
                          ? "text-red-400"
                          : passwordStrength <= 3
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </p>
                </div>
              )}
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Xác nhận mật khẩu
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 pr-12 ${
                    errors.confirmPassword ? "error" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {formData.confirmPassword && (
                <div className="mt-2 flex items-center gap-2 text-xs">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <Check size={16} className="text-green-500" />
                      <span className="text-green-400">Mật khẩu khớp</span>
                    </>
                  ) : (
                    <>
                      <X size={16} className="text-red-500" />
                      <span className="text-red-400">Mật khẩu không khớp</span>
                    </>
                  )}
                </div>
              )}
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className="checkbox-custom mt-1"
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-400 leading-relaxed cursor-pointer"
              >
                Tôi đồng ý với{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Chính sách bảo mật
                </a>{" "}
                của BrightKids
              </label>
            </div>
            {errors.terms && <p className="error-text">{errors.terms}</p>}

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-register bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              style={{
                boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)",
              }}
            >
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Đang tạo tài khoản...
                </>
              ) : (
                "Tạo tài khoản"
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="text-gray-500 text-sm">Hoặc đăng ký bằng</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleSocialSignup("Google")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
              >
                🔵
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup("Facebook")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
              >
                👤
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup("Apple")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-blue-400/10"
              >
                🍎
              </button>
            </div>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center text-gray-400 register-container">
          <p className="mb-6">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-white hover:text-blue-400 transition-all font-medium px-6 py-2 rounded-lg hover:bg-white/5"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>

        {/* Info Box */}
        <div className="glass-effect rounded-2xl p-6 register-container border border-blue-400/20 bg-blue-400/5">
          <div className="flex gap-3">
            <div className="text-2xl flex-shrink-0">🎓</div>
            <div>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-blue-400">Lợi ích:</span> Tạo
                tài khoản ngay để nhận buổi học thử miễn phí và truy cập hàng
                loạt khóa học chất lượng cao từ các giáo viên giàu kinh nghiệm.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center text-xs text-gray-600 flex gap-4 justify-center flex-wrap register-container">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Trợ giúp
          </a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Liên hệ
          </a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

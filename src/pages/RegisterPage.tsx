import  { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { type AutocompleteItem, Autocomplete } from "../components/Autocomplete";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    interest: [] as string[],
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const interestsList = [
    "Lập trình",
    "Robotics",
    "Toán học",
    "Tài chính",
    "Thiết kế",
  ];

  const interestItems: AutocompleteItem[] = interestsList.map(
    (interest) => ({
      id: interest,
      label: interest,
      value: interest.toLowerCase(),
    })
  );

   // Autocomplete multiselect handler
  const handleSelectField =
    (field: string) => (items: AutocompleteItem[] | AutocompleteItem | null) => {
      const selectedItems = Array.isArray(items) ? items : items ? [items] : [];
      const ids = selectedItems.map((item) => item.id);
      setFormData((prev) => ({
        ...prev,
        [field]: ids,
      }));

      // Clear error
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    };

  
  // Handle interest selection


  const ageGroups = ["6-8 tuổi", "9-11 tuổi", "12-14 tuổi", "15-16 tuổi"];

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error for this field
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

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

    if (!formData.interest.length) {
      newErrors.interest = "Vui lòng chọn sở thích";
    }

    if (!formData.terms) {
      newErrors.terms = "Bạn phải đồng ý với Điều khoản dịch vụ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleSocialSignup = (provider: string) => {
    alert(`Đăng ký qua ${provider} (Demo)`);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-400";
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
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
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
            text-shadow: 0 0 20px rgba(48, 133, 199, 0.3);
            box-shadow: 0 0 20px rgba(48, 133, 199, 0.2);
          }
          50% {
            text-shadow: 0 0 40px rgba(48, 133, 199, 0.5);
            box-shadow: 0 0 40px rgba(48, 133, 199, 0.3);
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
          border: 3px solid rgba(48, 133, 199, 0.2);
          border-radius: 50%;
          border-top-color: #3085c7;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(48, 133, 199, 0.15);
          box-shadow: 0 8px 32px rgba(48, 133, 199, 0.12);
          transition: box-shadow 0.3s ease;
        }

        .glass-effect:hover {
          box-shadow: 0 12px 48px rgba(48, 133, 199, 0.18);
        }

        .input-field {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(48, 133, 199, 0.2);
          color: #111827;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          background: rgba(48, 133, 199, 0.05);
          border-color: #3085c7;
          box-shadow: 0 0 15px rgba(48, 133, 199, 0.25);
        }

        .input-field::placeholder {
          color: #9ca3af;
        }

        .btn-register {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(48, 133, 199, 0.3);
        }

        .btn-register:hover:not(:disabled) {
          box-shadow: 0 12px 32px rgba(48, 133, 199, 0.5);
          transform: translateY(-2px);
        }

        .btn-register:active {
          transform: translateY(0);
        }

        .social-btn {
          transition: all 0.3s ease;
          border: 1px solid rgba(48, 133, 199, 0.2);
          background: rgba(249, 250, 251, 0.8);
          box-shadow: 0 2px 8px rgba(48, 133, 199, 0.08);
        }

        .social-btn:hover {
          border-color: #3085c7;
          background: rgba(48, 133, 199, 0.05);
          box-shadow: 0 6px 16px rgba(48, 133, 199, 0.15);
          transform: translateY(-2px);
        }

        .link-hover:hover {
          color: #3085c7;
        }

        label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #4b5563;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .password-strength-bar {
          height: 4px;
          background: rgba(48, 133, 199, 0.15);
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
          border: 1px solid rgba(48, 133, 199, 0.3);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .checkbox-custom:checked {
          background: #3085c7;
          border-color: #3085c7;
          box-shadow: 0 0 15px rgba(48, 133, 199, 0.4);
        }

        .interest-tag {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(48, 133, 199, 0.2);
          background: rgba(249, 250, 251, 0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          color: #4b5563;
        }

        .interest-tag:hover {
          border-color: #3085c7;
          background: rgba(48, 133, 199, 0.05);
        }

        .interest-tag.selected {
          background: #3085c7;
          color: #ffffff;
          border-color: #3085c7;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(48, 133, 199, 0.4);
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-cyan-200 to-transparent opacity-15 top-0 right-0 -translate-y-32 translate-x-32 float-circle"></div>
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-cyan-200 to-transparent opacity-10 bottom-0 left-0 -translate-x-32 translate-y-32 pulse-circle"></div>
      <div className="absolute w-64 h-64 rounded-full blur-2xl bg-linear-to-br from-cyan-200 to-transparent opacity-8 top-1/2 right-1/4 -translate-y-1/2"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, #3085c7 1px, transparent 1px), linear-gradient(90deg, #3085c7 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo */}
        <div className="text-center mb-10 register-container">
          <div
            className="text-4xl font-black text-teal-700 mb-2 glow-border inline-block px-6 py-2 rounded-xl"
            style={{ textShadow: "0 0 20px rgba(48, 133, 199, 0.2)" }}
          >
            <Link
              to="/landing"
              className="text-teal-700 hover:text-teal-800 transition-all font-medium px-6 py-2 rounded-lg hover:bg-gray-100"
            >
              BrightKids
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-3">
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
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                className={`w-full input-field px-4 py-3 rounded-xl placeholder-gray-400 ${
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
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                className={`w-full input-field px-4 py-3 rounded-xl placeholder-gray-400 ${
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
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Độ tuổi
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={`w-full input-field px-4 py-3 rounded-xl ${
                    errors.age ? "error" : ""
                  }`}
                >
                  <option value="">Chọn độ tuổi</option>
                  {ageGroups.map((group) => (
                    <option key={group} value={group} className="bg-white">
                      {group}
                    </option>
                  ))}
                </select>
                {errors.age && <p className="error-text">{errors.age}</p>}
              </div>

              {/* Interest Selection */}
              {/* <div>
                <label
                  htmlFor="interest"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Sở thích
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`w-full input-field px-4 py-3 rounded-xl ${
                    errors.interest ? "error" : ""
                  }`}
                >
                  <option value="">Chọn sở thích</option>
                  {interests.map((interest) => (
                    <option
                      key={interest}
                      value={interest}
                      className="bg-white"
                    >
                      {interest}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p className="error-text">{errors.interest}</p>
                )}
              </div> */}
               <Autocomplete
            items={interestItems}
            value={formData.interest}
            onChange={handleSelectField("interest")}
            label="Sở thích"
            placeholder="Chọn sở thích..."
            error={errors.interest}
            required
            multiple={true}
            maxSelect={3}
          />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                  className={`w-full input-field px-4 py-3 rounded-xl placeholder-gray-400 pr-12 ${
                    errors.password ? "error" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-teal-700 transition-colors"
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
                  <p className="text-xs text-gray-600 mt-1">
                    Độ mạnh:{" "}
                    <span
                      className={`${
                        passwordStrength <= 2
                          ? "text-red-500"
                          : passwordStrength <= 3
                          ? "text-yellow-600"
                          : "text-green-600"
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
                className="block mb-2 text-sm font-semibold text-gray-700"
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
                  className={`w-full input-field px-4 py-3 rounded-xl placeholder-gray-400 pr-12 ${
                    errors.confirmPassword ? "error" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-teal-700 transition-colors"
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
                      <Check size={16} className="text-green-600" />
                      <span className="text-green-700">Mật khẩu khớp</span>
                    </>
                  ) : (
                    <>
                      <X size={16} className="text-red-500" />
                      <span className="text-red-600">Mật khẩu không khớp</span>
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
                className="text-xs text-gray-600 leading-relaxed cursor-pointer"
              >
                Tôi đồng ý với{" "}
                <a href="#" className="text-teal-700 hover:text-teal-800">
                  Điều khoản dịch vụ
                </a>{" "}
                và{" "}
                <a href="#" className="text-teal-700 hover:text-teal-800">
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
              className="w-full btn-register bg-teal-600 hover:bg-teal-700 text-white font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              style={{
                boxShadow: "0 6px 20px rgba(48, 133, 199, 0.3)",
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
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-gray-500 text-sm">Hoặc đăng ký bằng</span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleSocialSignup("Google")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-teal-600/10"
              >
                🔵
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup("Facebook")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-teal-600/10"
              >
                👤
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignup("Apple")}
                className="social-btn py-3 rounded-xl flex items-center justify-center text-xl hover:bg-teal-600/10"
              >
                🍎
              </button>
            </div>
          </form>
        </div>

        {/* Sign In Link */}
        <div className="text-center text-gray-600 register-container">
          <p className="mb-6">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-teal-700 hover:text-teal-800 transition-all font-medium px-6 py-2 rounded-lg hover:bg-gray-100"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>

        {/* Info Box */}
        <div className="glass-effect rounded-2xl p-6 register-container border border-teal-300 bg-teal-50">
          <div className="flex gap-3">
            <div className="text-2xl shrink-0">🎓</div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-teal-700">Lợi ích:</span> Tạo
                tài khoản ngay để nhận buổi học thử miễn phí và truy cập hàng
                loạt khóa học chất lượng cao từ các giáo viên giàu kinh nghiệm.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center text-xs text-gray-600 flex gap-4 justify-center flex-wrap register-container">
          <a href="#" className="hover:text-teal-700 transition-colors">
            Trợ giúp
          </a>
          <span>•</span>
          <a href="#" className="hover:text-teal-700 transition-colors">
            Liên hệ
          </a>
          <span>•</span>
          <a href="#" className="hover:text-teal-700 transition-colors">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

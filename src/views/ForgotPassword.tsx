import React, { useState } from "react";
import { Mail, CheckCircle, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [step, setStep] = useState("email"); // email -> otp -> newpassword -> success
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const validateEmail = () => {
    if (!email) {
      setErrors({ email: "Email không được để trống" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: "Email không hợp lệ" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateOTP = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setErrors({ otp: "Vui lòng nhập đầy đủ 6 chữ số" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = "Mật khẩu không được để trống";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 8 ký tự";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!validateEmail()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("otp");
  };

  const handleOTPChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }

    // Clear error when user starts typing
    if (errors.otp) {
      setErrors((prev) => ({ ...prev, otp: "" }));
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!validateOTP()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("newpassword");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validatePassword()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep("success");
  };

  const handleBackToLogin = () => {
    setStep("email");
    setEmail("");
    setOtp(["", "", "", "", "", ""]);
    setNewPassword("");
    setConfirmPassword("");
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
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
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .container {
          animation: slideIn 0.8s ease-out;
        }

        .glow-border {
          animation: pulse 3s ease-in-out infinite;
        }

        .float-circle {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-circle {
          animation: pulse 4s ease-in-out infinite;
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
          outline: none;
          background: rgba(102, 153, 255, 0.1);
          border-color: #6699FF;
          box-shadow: 0 0 15px rgba(102, 153, 255, 0.3);
        }

        .input-field.error {
          border-color: #ef4444 !important;
          background-color: rgba(239, 68, 68, 0.05) !important;
        }

        .btn-primary {
          transition: all 0.3s ease;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(102, 153, 255, 0.6);
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
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

        .otp-input {
          width: 48px;
          height: 48px;
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        }

        .step-indicator {
          transition: all 0.3s ease;
        }

        .step-indicator.active {
          background: #6699FF;
          color: black;
          box-shadow: 0 0 20px rgba(102, 153, 255, 0.5);
        }

        .step-line {
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .step-line.active {
          background: #6699FF;
        }

        .success-icon {
          animation: bounceIn 0.6s ease-out;
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
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
      `}</style>

      {/* Background Elements */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-20 top-0 right-0 -translate-y-32 translate-x-32 float-circle"></div>
      <div className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-400 to-transparent opacity-15 bottom-0 left-0 -translate-x-32 translate-y-32 pulse-circle"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10 container">
          <div
            className="text-4xl font-black text-blue-400 mb-2 glow-border inline-block px-6 py-2 rounded-xl"
            style={{ textShadow: "0 0 20px rgba(102, 153, 255, 0.5)" }}
          >
            BrightKids
          </div>
          <p className="text-gray-400 text-sm mt-3">Đặt lại mật khẩu của bạn</p>
        </div>

        {/* Step Indicator */}
        {step !== "success" && (
          <div className="flex items-center justify-between mb-10 container">
            <div
              className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step === "email" ? "active" : "bg-white/10 text-gray-400"
              }`}
            >
              1
            </div>
            <div
              className={`flex-1 mx-2 step-line ${
                ["otp", "newpassword", "success"].includes(step) ? "active" : ""
              }`}
            ></div>
            <div
              className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                ["otp", "newpassword", "success"].includes(step)
                  ? "active"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              2
            </div>
            <div
              className={`flex-1 mx-2 step-line ${
                ["newpassword", "success"].includes(step) ? "active" : ""
              }`}
            ></div>
            <div
              className={`step-indicator w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step === "success" ? "active" : "bg-white/10 text-gray-400"
              }`}
            >
              3
            </div>
          </div>
        )}

        {/* Email Step */}
        {step === "email" && (
          <div className="glass-effect rounded-3xl p-10 container">
            <h2 className="text-2xl font-black text-white mb-2">
              Quên mật khẩu?
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn mã để đặt
              lại mật khẩu.
            </p>

            <form onSubmit={handleSendOTP} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Địa chỉ Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full input-field pl-12 px-4 py-3 rounded-xl text-white placeholder-gray-600 ${
                      errors.email ? "error" : ""
                    }`}
                  />
                </div>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)" }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Đang gửi...
                  </>
                ) : (
                  "Gửi mã xác nhận"
                )}
              </button>

              <p className="text-center text-gray-400 text-sm">
                Nhớ mật khẩu?{" "}
                <Link
                  to="/login"
                  className="text-blue-400 font-black hover:text-blue-300 transition-colors"
                >
                  Đăng nhập
                </Link>
              </p>
            </form>
          </div>
        )}

        {/* OTP Step */}
        {step === "otp" && (
          <div className="glass-effect rounded-3xl p-10 container">
            <button
              onClick={() => setStep("email")}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6 font-semibold"
            >
              <ArrowLeft size={18} />
              Quay lại
            </button>

            <h2 className="text-2xl font-black text-white mb-2">
              Xác nhận email
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Chúng tôi đã gửi mã xác nhận 6 chữ số đến{" "}
              <span className="text-blue-400 font-semibold">{email}</span>
            </p>

            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label className="block mb-4 text-sm font-semibold text-gray-300">
                  Nhập mã xác nhận
                </label>
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      onKeyDown={(e) => handleOTPKeyDown(index, e)}
                      className="otp-input input-field rounded-lg text-center font-bold"
                    />
                  ))}
                </div>
                {errors.otp && (
                  <p className="error-text text-center mt-3">{errors.otp}</p>
                )}
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm mb-3">
                  Không nhận được mã?
                </p>
                <button
                  type="button"
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm"
                >
                  Gửi lại mã
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)" }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Đang xác nhận...
                  </>
                ) : (
                  "Xác nhận"
                )}
              </button>
            </form>
          </div>
        )}

        {/* New Password Step */}
        {step === "newpassword" && (
          <div className="glass-effect rounded-3xl p-10 container">
            <button
              onClick={() => setStep("otp")}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6 font-semibold"
            >
              <ArrowLeft size={18} />
              Quay lại
            </button>

            <h2 className="text-2xl font-black text-white mb-2">
              Đặt mật khẩu mới
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Nhập mật khẩu mới của bạn. Hãy chắc chắn nó mạnh và dễ nhớ.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-6">
              {/* New Password */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Mật khẩu mới
                </label>
                <div className="relative">
                  <input
                    id="newPassword"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setPasswordStrength(
                        calculatePasswordStrength(e.target.value)
                      );
                    }}
                    placeholder="••••••••"
                    className={`w-full input-field px-4 py-3 rounded-xl text-white placeholder-gray-600 pr-12 ${
                      errors.newPassword ? "error" : ""
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
                {newPassword && (
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
                {errors.newPassword && (
                  <p className="error-text">{errors.newPassword}</p>
                )}
              </div>

              {/* Confirm Password */}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)" }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Đang đặt lại...
                  </>
                ) : (
                  "Đặt lại mật khẩu"
                )}
              </button>
            </form>
          </div>
        )}

        {/* Success Step */}
        {step === "success" && (
          <div className="glass-effect rounded-3xl p-10 text-center container">
            <div className="success-icon mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={48} className="text-black" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-white mb-3">
              Mật khẩu đã đặt lại thành công!
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Bạn có thể đăng nhập ngay bây giờ với mật khẩu mới của mình.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/login";
              }}
              className="w-full btn-primary bg-blue-400 hover:bg-blue-500 text-black font-black py-3 rounded-xl transition-all inline-block"
              style={{ boxShadow: "0 0 30px rgba(102, 153, 255, 0.5)" }}
            >
              Quay lại Đăng nhập
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

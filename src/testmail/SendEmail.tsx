'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '@/lib/emailjs-config';

interface FormData {
  user_name: string;
  recipient_name: string;
  user_email: string;
  to_email: string;              // ⭐ Email người nhận (optional)
  user_phone: string;
  subject: string;
  message: string;
}

interface EmailStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function SendEmail() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    recipient_name: '',
    user_email: '',
    to_email: '',                 // ⭐ Initialize
    user_phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<EmailStatus>({
    loading: false,
    success: false,
    error: null
  });

  // ✅ Initialize EmailJS
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      if (!emailJSConfig.publicKey) {
        console.error('❌ Missing EmailJS public key in emailjs-config.ts');
        setStatus({
          loading: false,
          success: false,
          error: 'Configuration error: Missing EmailJS public key'
        });
        return;
      }

      emailjs.init({
        publicKey: emailJSConfig.publicKey,
        blockHeadless: true,
      });
      
      console.log('✅ EmailJS initialized successfully');
    } catch (error) {
      console.error('❌ EmailJS initialization error:', error);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to initialize email service'
      });
    }
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation - kiểm tra đầy đủ thông tin
    if (!formData.user_name || !formData.user_email || 
        !formData.message || !formData.recipient_name ||
        !formData.to_email) {  // ⭐ Required
      setStatus({
        loading: false,
        success: false,
        error: 'Vui lòng điền đầy đủ thông tin bắt buộc'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      if (!emailJSConfig.serviceId || !emailJSConfig.templateId) {
        throw new Error('EmailJS configuration incomplete. Check emailjs-config.ts');
      }

      const result = await emailjs.sendForm(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        formRef.current!,
        emailJSConfig.publicKey
      );

      console.log('✅ Email sent successfully:', result.text);
      
      setStatus({
        loading: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        user_name: '',
        recipient_name: '',
        user_email: '',
        to_email: '',              // ⭐ Reset
        user_phone: '',
        subject: '',
        message: ''
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 3000);

    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error 
          ? error.message 
          : 'Có lỗi xảy ra khi gửi email'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 text-black">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-gray-600">
            Gửi tin nhắn cho chúng tôi ngay
          </p>
        </div>

        {/* Success Message */}
        {status.success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium text-center">
              ✓ Email được gửi thành công!
            </p>
          </div>
        )}

        {/* Error Message */}
        {status.error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium text-center">
              ✗ {status.error}
            </p>
          </div>
        )}

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Tên người gửi */}
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
              Họ và Tên (Người Gửi) *
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Nhập tên của bạn"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
              required
            />
          </div>

          {/* Tên người nhận */}
          <div>
            <label htmlFor="recipient_name" className="block text-sm font-medium text-gray-700 mb-2">
              Tên Người Nhận *
            </label>
            <input
              type="text"
              id="recipient_name"
              name="recipient_name"
              value={formData.recipient_name}
              onChange={handleChange}
              placeholder="Nhập tên người bạn muốn gửi đến (ví dụ: Admin)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
              required
            />
          </div>

          {/* ⭐ To Email - NEW FIELD (Optional dùng dynamic) */}
          <div>
            <label htmlFor="to_email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Người Nhận *
            </label>
            <input
              type="email"
              id="to_email"
              name="to_email"
              value={formData.to_email}
              onChange={handleChange}
              placeholder="admin@mywebsite.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              💡 Tip: Nếu không thay đổi, email sẽ gửi đến địa chỉ mặc định
            </p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
              Email (của bạn) *
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">
              Số Điện Thoại
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              placeholder="0912345678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Tiêu Đề
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Tiêu đề của tin nhắn"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              disabled={status.loading}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tin Nhắn *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Viết tin nhắn của bạn ở đây..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              disabled={status.loading}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
          >
            {status.loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Đang gửi...
              </span>
            ) : (
              '📧 Gửi Email'
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            * Các trường đánh dấu là bắt buộc
          </p>
        </form>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">📌 Thông Tin:</h3>
          <ul className="text-xs text-blue-800 space-y-1">
            <li>✓ Không cần backend server</li>
            <li>✓ Gửi trực tiếp từ browser</li>
            <li>✓ Email người nhận linh hoạt</li>
            <li>✓ Hỗ trợ multiple recipients</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
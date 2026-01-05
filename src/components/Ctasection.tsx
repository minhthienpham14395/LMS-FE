import React from "react";

interface CTASectionProps {
  accentColor?: string;
}

export default function CTASection({
  accentColor = "#0891b2",
}: CTASectionProps) {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
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

        .cta-title {
          animation: fadeInUp 0.6s ease-out;
        }

        .cta-subtitle {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .cta-button {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .cta-bg-float::before {
          animation: float 6s ease-in-out infinite;
        }

        .cta-bg-float::after {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <section
        id="contact"
        className="py-24 px-12 text-white text-center relative overflow-hidden cta-bg-float"
        style={{ backgroundColor: accentColor }}
      >
        {/* Decorative Blobs */}
        <div className="absolute w-96 h-96 rounded-full bg-white/10 top-0 right-0 -translate-y-32 translate-x-32"></div>
        <div className="absolute w-56 h-56 rounded-full bg-black/5 bottom-0 left-0 -translate-x-32 translate-y-32"></div>

        {/* Content */}
        <h2 className="text-5xl font-black mb-5 cta-title">
          Sẵn sàng bắt đầu?
        </h2>
        <p className="text-2xl mb-10 cta-subtitle">
          Đăng ký ngay hôm nay và nhận buổi học thử miễn phí!
        </p>
        <button className="bg-white text-gray-900 px-16 py-4 rounded-full font-black text-lg transition-all hover:shadow-lg hover:-translate-y-1 cta-button">
          Đăng ký miễn phí
        </button>
      </section>
    </>
  );
}

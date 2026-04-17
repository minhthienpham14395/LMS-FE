

import { TrendingUp } from 'lucide-react';

interface HeroProps {
  accentColor?: string;
  primaryColor?: string;
}

export default function HeroSection({ accentColor = "#3085c7", primaryColor = "#164789" }: HeroProps) {
  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
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
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.25;
          }
        }

        .hero-content {
          animation: fadeInLeft 0.8s ease-out;
        }

        .hero-image {
          animation: fadeInRight 0.8s ease-out;
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .circle-1 {
          animation: pulse 3s ease-in-out infinite;
        }

        .circle-3 {
          animation: pulse 3s ease-in-out infinite 1s;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-between relative overflow-hidden bg-white pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>

        {/* Decorative Blob */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-radial from-[#3085c7]/5 to-transparent top-0 right-0 -translate-y-32 translate-x-32"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        ></div>

        {/* Content */}
        <div className="hero-content z-10 max-w-2xl px-12 pt-32 pb-12">
          <h1 className="text-6xl font-black leading-tight mb-5 text-[#f7f8fa]">
            Khám Phá Tương Lai{" "}
            <span style={{ color: accentColor }}>Công Nghệ</span>
          </h1>
          <p className="text-xl text-[#f7f8fa] mb-8 leading-relaxed">
            Nền tảng học lập trình, robotics, tài chính cho trẻ em (4-12 tuổi).
            Giúp con phát triển kỹ năng sáng tạo và tư duy logic.
          </p>
          <div className="flex gap-6">
            <button 
              className="text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: primaryColor }}
            >
              Bắt đầu miễn phí
            </button>
            <button
              className="text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-md"
              style={{ backgroundColor: accentColor }}
            >
              Xem khóa học
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image hidden lg:block relative px-12 pt-32 pb-12">
          <div className="absolute w-72 h-72 rounded-full bg-linear-to-br from-[#3085c7] to-transparent opacity-15 top-16 left-16 circle-1"></div>
          <div className="text-8xl floating-element">
            <TrendingUp size={96} className="text-[#3085c7]" />
          </div>
          <div className="absolute w-36 h-36 rounded-full bg-linear-to-br from-[#3085c7] to-transparent opacity-15 bottom-12 left-0 circle-3"></div>
        </div>
      </section>
    </>
  );
}

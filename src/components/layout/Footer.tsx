

interface FooterLink {
  title: string;
  links: string[];
}

interface FooterProps {
  accentColor?: string;
  footerLinks?: FooterLink[];
  copyrightText?: string;
}

export default function Footer({
  accentColor = "#3085c7",
  footerLinks,
  copyrightText = "&copy; 2024 BrightKids. All rights reserved.",
}: FooterProps) {
  const defaultFooterLinks: FooterLink[] = [
    {
      title: "Khóa học",
      links: ["Lập trình", "Robotics", "Tài chính", "Toán học"],
    },
    {
      title: "Về chúng tôi",
      links: ["Câu chuyện", "Đội ngũ", "Tuyển dụng", "Giải thưởng"],
    },
    {
      title: "Hỗ trợ",
      links: ["Trung tâm trợ giúp", "Liên hệ", "FAQ", "Chính sách"],
    },
  ];

  const links = footerLinks || defaultFooterLinks;

  return (
    <>
      <style>{`
        footer {
          box-shadow: 0 -4px 16px rgba(48, 133, 199, 0.08);
        }

        footer a {
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: ${accentColor};
        }

        .social-icon {
          transition: all 0.3s ease;
          border: 2px solid ${accentColor};
          color: ${accentColor};
        }

        .social-icon:hover {
          background-color: ${accentColor};
          color: white;
          transform: translateY(-2px);
        }
      `}</style>

      <footer className="relative bg-white text-gray-900 px-12 py-20 border-t border-gray-200">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Footer Sections */}
          {links.map((section, idx) => (
            <div key={idx}>
              <h3
                className="font-black mb-5 text-lg"
                style={{ color: accentColor }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#3085c7] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3
              className="font-black mb-5 text-lg"
              style={{ color: accentColor }}
            >
              Kết nối
            </h3>
            <p className="text-gray-600 mb-5">Theo dõi chúng tôi</p>
            <div className="flex gap-3">
              {["f", "t", "in", "ig"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="social-icon w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p dangerouslySetInnerHTML={{ __html: copyrightText }} />
        </div>
      </footer>
    </>
  );
}

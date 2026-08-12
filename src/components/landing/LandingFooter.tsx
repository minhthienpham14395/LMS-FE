interface FooterColumn {
  title: string;
  items: string[];
}

interface LandingFooterProps {
  columns: FooterColumn[];
}

export default function LandingFooter({ columns }: LandingFooterProps) {
  return (
    <footer className="bg-[#10192d] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.15fr_1fr_1fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-semibold">Academic Atelier</h3>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Định nghĩa lại giáo dục trực tuyến qua tiêu chuẩn biên tập nghiêm ngặt và
            thiết kế giảng dạy đẳng cấp thế giới.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              {column.title}
            </h4>
            <div className="mt-5 space-y-3">
              {column.items.map((item) => (
                <p key={item} className="text-sm text-white/65">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 pt-8 text-xs text-white/40 sm:flex-row">
        <p>© 2024 Academic Atelier. Tiếp sức cho người ham học.</p>
        <div className="flex gap-4">
          <span>Tiếng Việt</span>
          <span>VND (₫)</span>
        </div>
      </div>
    </footer>
  );
}

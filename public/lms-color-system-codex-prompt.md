# LMS Frontend — Global Color System & Codex Refactor Prompt

## Mục tiêu

Chuẩn hóa toàn bộ hệ thống màu của dự án `lms-fe` theo phong cách:

- Sáng
- Hiện đại
- Tối giản
- Thân thiện với giáo dục
- Xanh dương là màu thương hiệu chính
- Ưu tiên khả năng đọc lâu dài
- Đồng bộ toàn bộ UI
- Phù hợp với Tailwind CSS + shadcn/ui
- Hạn chế hard-code màu trực tiếp trong component

---

# 1. Color Palette Chuẩn

## Background

| Token | Màu | Hex |
|---|---|---|
| `background` | Xanh trắng rất nhạt | `#F6FAFF` |
| `background-secondary` | Xanh nhạt | `#EFF6FF` |
| `background-soft` | Xanh pastel rất nhẹ | `#F8FBFF` |
| `surface` | Trắng | `#FFFFFF` |

## Primary

| Token | Màu | Hex |
|---|---|---|
| `primary` | Xanh dương chính | `#2563EB` |
| `primary-hover` | Xanh dương đậm | `#1D4ED8` |
| `primary-active` | Xanh dương đậm hơn | `#1E40AF` |
| `primary-light` | Xanh pastel | `#DBEAFE` |
| `primary-soft` | Xanh rất nhạt | `#EFF6FF` |

## Text

| Token | Màu | Hex |
|---|---|---|
| `foreground` | Navy đậm | `#0F172A` |
| `text-secondary` | Slate | `#475569` |
| `text-muted` | Slate nhạt | `#64748B` |
| `text-placeholder` | Xám xanh | `#94A3B8` |
| `text-on-primary` | Trắng | `#FFFFFF` |

## Border / Divider

| Token | Màu | Hex |
|---|---|---|
| `border` | Xám xanh rất nhạt | `#E2E8F0` |
| `border-soft` | Xám rất nhạt | `#F1F5F9` |
| `border-focus` | Primary | `#2563EB` |

## State Colors

### Success

- `success`: `#16A34A`
- `success-hover`: `#15803D`
- `success-soft`: `#DCFCE7`
- `success-foreground`: `#166534`

### Warning

- `warning`: `#F59E0B`
- `warning-hover`: `#D97706`
- `warning-soft`: `#FEF3C7`
- `warning-foreground`: `#92400E`

### Error / Destructive

- `destructive`: `#DC2626`
- `destructive-hover`: `#B91C1C`
- `destructive-soft`: `#FEE2E2`
- `destructive-foreground`: `#991B1B`

### Info

- `info`: `#0284C7`
- `info-hover`: `#0369A1`
- `info-soft`: `#E0F2FE`
- `info-foreground`: `#075985`

---

# 2. Gradient sử dụng trong Landing Page

## Hero Gradient

```css
background: linear-gradient(
  135deg,
  #F8FBFF 0%,
  #EFF6FF 45%,
  #E0F2FE 100%
);
```

Có thể dùng Tailwind tương đương:

```tsx
className="bg-gradient-to-br from-[#F8FBFF] via-[#EFF6FF] to-[#E0F2FE]"
```

Chỉ nên dùng gradient tại:

- Hero section
- Banner nổi bật
- CTA section
- Khu vực marketing

Không lạm dụng gradient cho:

- Card
- Table
- Form
- Dashboard
- Sidebar
- Course list

---

# 3. shadcn/ui CSS Variables

Nếu dự án đang dùng shadcn/ui, chuẩn hóa `globals.css` hoặc file CSS global tương đương theo hệ màu dưới đây.

```css
:root {
  --background: 210 100% 98%;
  --foreground: 222 47% 11%;

  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;

  --popover: 0 0% 100%;
  --popover-foreground: 222 47% 11%;

  --primary: 221 83% 53%;
  --primary-foreground: 0 0% 100%;

  --secondary: 214 100% 97%;
  --secondary-foreground: 222 47% 11%;

  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;

  --accent: 214 95% 93%;
  --accent-foreground: 221 83% 45%;

  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;

  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 221 83% 53%;

  --radius: 0.75rem;
}
```

Nếu dự án không hỗ trợ dark mode thì KHÔNG tự ý thêm dark mode.

Nếu dự án đã có dark mode thì giữ tính năng nhưng phải chuẩn hóa lại token tương ứng, không để màu cũ bị lệch hệ thống.

---

# 4. Quy tắc sử dụng màu

## Background toàn trang

```tsx
className="bg-background text-foreground"
```

Không dùng:

```tsx
bg-white
bg-gray-50
bg-slate-50
```

cho background chính nếu mục đích tương đương với `background`.

---

## Card

Ưu tiên:

```tsx
className="bg-card text-card-foreground border border-border"
```

Card cần nổi nhẹ:

```tsx
className="bg-card border border-border shadow-sm"
```

Không dùng shadow quá mạnh.

---

## Button Primary

```tsx
className="
  bg-primary
  text-primary-foreground
  hover:bg-primary/90
  active:bg-primary/80
"
```

Nếu đang dùng shadcn `Button`, ưu tiên:

```tsx
<Button variant="default">
  ...
</Button>
```

Không hard-code:

```tsx
bg-blue-500
bg-blue-600
bg-[#2563EB]
```

trong các component thông thường nếu token `primary` đã tồn tại.

---

## Button Secondary

```tsx
className="
  bg-secondary
  text-secondary-foreground
  hover:bg-secondary/80
"
```

---

## Ghost Button

```tsx
className="
  text-foreground
  hover:bg-accent
  hover:text-accent-foreground
"
```

---

## Input

```tsx
className="
  bg-card
  border-input
  text-foreground
  placeholder:text-muted-foreground
  focus-visible:ring-ring
"
```

---

## Link

```tsx
className="
  text-primary
  hover:text-primary/80
"
```

Có thể thêm:

```tsx
hover:underline
```

khi phù hợp.

---

# 5. Sidebar

Sidebar nên giữ giao diện sáng.

Gợi ý:

```tsx
className="
  bg-white
  border-r
  border-border
"
```

Menu mặc định:

```tsx
className="
  text-muted-foreground
  hover:bg-primary/5
  hover:text-primary
"
```

Menu active:

```tsx
className="
  bg-primary/10
  text-primary
  font-medium
"
```

Icon active:

```tsx
className="text-primary"
```

Không dùng màu xanh đậm làm toàn bộ background sidebar trừ khi design hiện tại yêu cầu rõ ràng.

---

# 6. Header / Navbar

Navbar mặc định:

```tsx
className="
  bg-white/90
  backdrop-blur
  border-b
  border-border
"
```

Navigation item:

```tsx
className="
  text-muted-foreground
  hover:text-primary
"
```

Active navigation:

```tsx
className="text-primary font-medium"
```

---

# 7. Course Card

Course card cần ưu tiên độ sạch và dễ đọc.

```tsx
className="
  bg-card
  border
  border-border
  rounded-xl
  hover:border-primary/30
  hover:shadow-md
  transition
"
```

Course category badge:

```tsx
className="
  bg-primary/10
  text-primary
"
```

Course price:

```tsx
className="text-primary font-semibold"
```

Course title:

```tsx
className="text-foreground"
```

Course description:

```tsx
className="text-muted-foreground"
```

---

# 8. Badge / Status

## Đang học

```tsx
bg-blue-50 text-blue-700
```

Hoặc ưu tiên token:

```tsx
bg-primary/10 text-primary
```

## Hoàn thành

```tsx
bg-green-50 text-green-700
```

## Chờ xử lý

```tsx
bg-amber-50 text-amber-700
```

## Lỗi / Hủy

```tsx
bg-red-50 text-red-700
```

Không dùng badge với background quá đậm nếu không cần thiết.

---

# 9. Table

Header:

```tsx
className="bg-secondary/60 text-foreground"
```

Row:

```tsx
className="
  border-b
  border-border
  hover:bg-muted/40
"
```

Không dùng zebra quá mạnh.

---

# 10. Dashboard

Dashboard page:

```tsx
className="bg-background"
```

Statistic cards:

```tsx
className="
  bg-card
  border
  border-border
  rounded-xl
  shadow-sm
"
```

Icon container:

```tsx
className="
  bg-primary/10
  text-primary
"
```

Giữ phần lớn dashboard là:

- White
- Off-white
- Light blue
- Slate text

Primary blue chỉ dùng để tạo điểm nhấn.

---

# 11. Landing Page

Landing page có thể sử dụng nhiều sắc xanh hơn Dashboard.

Ưu tiên:

- Hero: gradient xanh rất nhạt
- Card: trắng
- Section xen kẽ: `background` và `secondary`
- CTA: `primary`
- Heading: `foreground`
- Highlight text: `primary`

Ví dụ:

```tsx
<section className="bg-background">
  ...
</section>

<section className="bg-secondary/50">
  ...
</section>
```

---

# 12. Accessibility

Codex phải đảm bảo:

- Text chính có contrast cao
- Không dùng text xám quá nhạt trên nền trắng
- Không dùng màu làm dấu hiệu duy nhất cho trạng thái
- Error phải có icon hoặc text mô tả khi cần
- Focus state phải rõ ràng
- Button disabled vẫn nhìn được nhưng dễ phân biệt
- Hover state không làm giảm khả năng đọc

Ví dụ button disabled:

```tsx
disabled:opacity-50
disabled:pointer-events-none
```

---

# 13. Quy tắc bắt buộc khi refactor

Codex phải tìm và xử lý toàn bộ các màu hard-code trong:

```text
src/
```

Bao gồm:

```text
.ts
.tsx
.js
.jsx
.css
.scss
.module.css
```

Tìm các dạng:

```text
#xxxxxx
#xxx
rgb(...)
rgba(...)
hsl(...)
hsla(...)

bg-blue-*
text-blue-*
border-blue-*

bg-slate-*
bg-gray-*
text-gray-*
text-slate-*
```

Không phải tất cả utility Tailwind đều phải xóa.

Chỉ thay thế khi chúng đang đại diện cho một semantic color có thể map sang:

```text
background
foreground
primary
secondary
muted
accent
border
destructive
card
```

---

# 14. Không refactor mù quáng

Không được thay tất cả:

```tsx
text-gray-500
```

thành:

```tsx
text-muted-foreground
```

một cách tự động nếu ngữ cảnh khác nhau.

Phải xem component đang thể hiện:

- label
- metadata
- disabled state
- placeholder
- helper text
- description
- navigation

Sau đó chọn token phù hợp.

---

# 15. Không phá layout

Khi refactor màu:

KHÔNG thay đổi:

- Layout
- Width
- Height
- Padding
- Margin
- Grid
- Flex
- Typography size
- Responsive breakpoint
- Component logic
- API logic
- Router
- Form behavior
- Authentication logic

Trừ khi phát hiện lỗi trực tiếp liên quan đến màu hoặc state.

---

# 16. Responsive

Màu phải nhất quán ở:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Không tạo màu riêng không cần thiết cho từng breakpoint.

Nếu có class:

```tsx
bg-white md:bg-blue-50 lg:bg-gray-50
```

Codex phải kiểm tra xem đây có thật sự là design requirement hay chỉ là màu dư thừa.

Nếu không cần thiết thì chuẩn hóa lại.

---

# 17. Các màu không được lạm dụng

Không dùng quá nhiều:

```text
Purple
Pink
Orange
Red
Green
Yellow
```

Màu phụ chỉ dành cho:

- trạng thái
- badge
- chart
- warning
- error
- success

Brand chính vẫn phải là:

```text
Blue
White
Slate
```

---

# 18. Prompt dành cho Codex

Copy toàn bộ prompt dưới đây để Codex thực hiện.

---

## CODEX PROMPT

```text
Bạn đang làm việc trên frontend project:

lms-fe

Hãy audit và refactor TOÀN BỘ color system của dự án.

MỤC TIÊU

Chuẩn hóa toàn bộ UI theo phong cách LMS hiện đại:

- Light theme
- Clean
- Modern
- Professional
- Education-friendly
- Primary color là blue
- Background sáng hơi pha xanh
- Card chủ yếu màu trắng
- Text sử dụng navy/slate
- Không lạm dụng màu sắc
- UI phải đồng nhất trên toàn bộ project

COLOR SYSTEM BẮT BUỘC

Main background:
#F6FAFF

Secondary background:
#EFF6FF

Soft background:
#F8FBFF

Card:
#FFFFFF

Primary:
#2563EB

Primary hover:
#1D4ED8

Primary active:
#1E40AF

Primary light:
#DBEAFE

Foreground:
#0F172A

Secondary text:
#475569

Muted text:
#64748B

Placeholder:
#94A3B8

Border:
#E2E8F0

Success:
#16A34A

Warning:
#F59E0B

Destructive:
#DC2626

Info:
#0284C7


YÊU CẦU 1 — KIỂM TRA HỆ THỐNG HIỆN TẠI

Kiểm tra:

- tailwind.config.*
- globals.css
- index.css
- app.css
- theme files
- shadcn configuration
- CSS variables
- utility classes
- component styles

Xác định hệ thống màu hiện tại đang được cấu hình ở đâu.

Không tạo hệ thống theme trùng lặp.


YÊU CẦU 2 — SHADCN

Nếu project đang sử dụng shadcn/ui:

Hãy dùng semantic token:

background
foreground
card
card-foreground
popover
popover-foreground
primary
primary-foreground
secondary
secondary-foreground
muted
muted-foreground
accent
accent-foreground
destructive
destructive-foreground
border
input
ring

Ưu tiên:

bg-background
text-foreground
bg-card
text-card-foreground
bg-primary
text-primary-foreground
bg-secondary
text-secondary-foreground
bg-muted
text-muted-foreground
bg-accent
border-border

Không hard-code màu nếu semantic token đã tồn tại.


YÊU CẦU 3 — AUDIT TOÀN BỘ SRC

Scan toàn bộ:

src/**/*

Kiểm tra:

.ts
.tsx
.js
.jsx
.css
.scss
.module.css

Tìm:

hex color
rgb
rgba
hsl
hsla

và Tailwind colors như:

blue
sky
slate
gray
zinc
neutral

Phân tích context trước khi thay thế.


YÊU CẦU 4 — REFACTOR SEMANTIC COLOR

Ví dụ:

bg-white

nếu là card:
=> bg-card

nếu là app surface:
=> bg-background hoặc bg-card tùy context


text-gray-900
text-slate-900

nếu là primary text:
=> text-foreground


text-gray-500
text-slate-500

nếu là description:
=> text-muted-foreground


border-gray-200
border-slate-200

=> border-border


bg-blue-600

nếu là brand action:
=> bg-primary


text-blue-600

nếu là brand text hoặc link:
=> text-primary


YÊU CẦU 5 — BUTTON

Primary button:

bg-primary
text-primary-foreground
hover:bg-primary/90

Secondary:

bg-secondary
text-secondary-foreground
hover:bg-secondary/80

Ghost:

hover:bg-accent
hover:text-accent-foreground

Destructive:

bg-destructive
text-destructive-foreground


YÊU CẦU 6 — CARD

Card tiêu chuẩn:

bg-card
text-card-foreground
border
border-border
shadow-sm

Hover card có thể:

hover:border-primary/30
hover:shadow-md

Không dùng shadow quá mạnh.


YÊU CẦU 7 — INPUT

Input chuẩn:

bg-card
border-input
text-foreground
placeholder:text-muted-foreground
focus-visible:ring-ring


YÊU CẦU 8 — SIDEBAR

Sidebar ưu tiên light UI.

Background:
white / card

Border:
border-border

Normal navigation:
text-muted-foreground

Hover:
hover:bg-primary/5
hover:text-primary

Active:
bg-primary/10
text-primary


YÊU CẦU 9 — HEADER

Header:

bg-white/90
backdrop-blur
border-b
border-border

Navigation:

text-muted-foreground
hover:text-primary

Active:
text-primary


YÊU CẦU 10 — LANDING PAGE

Landing page có thể dùng:

Hero:
linear-gradient(
135deg,
#F8FBFF 0%,
#EFF6FF 45%,
#E0F2FE 100%
)

Nhưng ưu tiên sử dụng Tailwind hoặc token nếu cấu hình cho phép.

Các section nên xen kẽ:

bg-background

và

bg-secondary/50

Cards:
bg-card


YÊU CẦU 11 — DASHBOARD

Dashboard phải hạn chế gradient.

Ưu tiên:

bg-background

Cards:
bg-card

Borders:
border-border

Icon highlight:
bg-primary/10
text-primary


YÊU CẦU 12 — STATUS COLORS

Success chỉ dùng cho success/completed.

Warning chỉ dùng cho warning/pending.

Destructive chỉ dùng cho error/delete/cancel.

Info chỉ dùng cho informational state.

Không sử dụng status colors làm brand colors.


YÊU CẦU 13 — ACCESSIBILITY

Kiểm tra contrast.

Không để:

- text quá nhạt
- button text khó đọc
- disabled state không rõ
- focus state biến mất

Tất cả interactive elements phải có:

hover
focus-visible
disabled

state hợp lý.


YÊU CẦU 14 — RESPONSIVE

Kiểm tra màu ở:

mobile
tablet
desktop

Không thay đổi màu một cách vô lý giữa breakpoint.

Ví dụ nếu gặp:

bg-white md:bg-gray-50 lg:bg-blue-50

hãy xác định xem có phải requirement thật sự không.

Nếu không thì chuẩn hóa.


YÊU CẦU 15 — KHÔNG PHÁ PROJECT

Không thay đổi ngoài phạm vi color system nếu không cần thiết.

KHÔNG tự ý thay đổi:

routing
API
business logic
authentication
state management
forms
responsive layout
component hierarchy

Không xóa component đang được sử dụng.


YÊU CẦU 16 — CLEANUP

Sau khi refactor:

- Xóa color variables không còn sử dụng
- Xóa duplicated theme tokens
- Xóa CSS rule màu cũ nếu không còn dùng
- Không giữ dead CSS
- Không giữ duplicate color constants
- Không giữ inline styles màu nếu có thể chuyển sang theme token


YÊU CẦU 17 — DARK MODE

Nếu project KHÔNG có dark mode:

Không tự ý tạo dark mode.

Nếu project ĐÃ có dark mode:

Giữ dark mode hoạt động.

Refactor dark tokens để không xung đột với light theme.


YÊU CẦU 18 — VALIDATION

Sau khi sửa:

Chạy các command phù hợp với project, ví dụ:

npm run lint
npm run typecheck
npm run build

hoặc command tương đương đang tồn tại trong package.json.

Sửa tất cả lỗi phát sinh do quá trình refactor.


YÊU CẦU 19 — REPORT

Sau khi hoàn thành hãy báo cáo:

1. Files đã thay đổi
2. Theme tokens đã tạo hoặc sửa
3. Hard-coded colors đã loại bỏ
4. Components đã refactor
5. Các màu vẫn phải giữ hard-code và lý do
6. Kết quả lint
7. Kết quả typecheck
8. Kết quả build


QUY TẮC QUAN TRỌNG

Không chỉ thay màu cho landing page.

Hãy kiểm tra TOÀN BỘ project lms-fe.

Mọi page, layout, component và shared UI phải sử dụng cùng một design color system.

Mục tiêu cuối cùng:

Một LMS có visual language thống nhất:

Blue
White
Light Blue
Slate

với primary brand color:

#2563EB

và global background:

#F6FAFF
```

---

# 19. Kết quả mong muốn

Sau khi Codex hoàn thành:

```text
lms-fe
│
├── Landing Page
├── Authentication
├── Dashboard
├── Course
├── Learning
├── Profile
├── Settings
├── Shared Components
└── shadcn UI
```

tất cả phải sử dụng chung một color system.

Không được xảy ra tình trạng:

```text
Landing = blue
Dashboard = purple
Course = cyan
Profile = gray
Settings = green
```

Toàn bộ hệ thống phải có chung visual identity:

```text
Primary:      #2563EB
Background:   #F6FAFF
Surface:      #FFFFFF
Foreground:   #0F172A
Muted:        #64748B
Border:       #E2E8F0
```

---

# 20. Nguyên tắc cuối cùng

> Màu xanh dương là điểm nhấn, không phải màu phủ toàn bộ giao diện.

Tỷ lệ màu nên hướng tới:

```text
65–75%  White / Off-white
15–25%  Slate / Neutral
5–10%   Primary Blue
<5%     Status / Accent colors
```

Mục tiêu là tạo một LMS:

- sạch
- sáng
- dễ học
- dễ đọc
- hiện đại
- nhất quán
- dễ maintain
- dễ mở rộng theme sau này

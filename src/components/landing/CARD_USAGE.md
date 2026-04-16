# Reusable Card Components for Landing Sections

This document explains how to use the reusable card components created for the landing page sections.

## Available Card Components

### 1. **Card** (Base Component)
The base card component for custom card compositions.

```tsx
import { Card } from '@/components/landing';

<Card animationDelay={0} hover={true} onClick={() => {}}>
  {/* Your content here */}
</Card>
```

**Props:**
- `children`: React.ReactNode - Card content
- `className`: string (optional) - Additional CSS classes
- `hover`: boolean (default: true) - Enable hover effects
- `onClick`: () => void (optional) - Click handler
- `animationDelay`: number (optional) - Animation delay in 0.1s increments

---

### 2. **CourseCard**
Displays course information with pricing and metadata.

```tsx
import { CourseCard } from '@/components/landing';

<CourseCard
  icon="🎓"
  badge="Hot"
  title="Web Development"
  description="Learn modern web development"
  duration="8 weeks"
  type="Live Classes"
  age="15-16 tuổi"
  currentPrice="$99"
  oldPrice="$149"
  accentColor="#0891b2"
  animationDelay={1}
/>
```

**Usage in CoursesSection:**
```tsx
{courses.map((course, idx) => (
  <CourseCard
    key={idx}
    {...course}
    accentColor={accentColor}
    animationDelay={idx}
  />
))}
```

---

### 3. **TeacherCard**
Displays teacher profile with avatar, bio, and rating.

```tsx
import { TeacherCard } from '@/components/landing';

<TeacherCard
  avatar="👨‍🏫"
  name="Mr. John"
  bio="Expert in programming with 10 years experience"
  rating="⭐⭐⭐⭐⭐ 4.9/5"
  accentColor="#0891b2"
  animationDelay={1}
/>
```

**Usage in TeachersSection:**
```tsx
{teachers.map((teacher, idx) => (
  <TeacherCard
    key={idx}
    {...teacher}
    accentColor={accentColor}
    animationDelay={idx}
  />
))}
```

---

### 4. **SkillCard**
Displays skill or feature with icon, title, and description.

```tsx
import { SkillCard } from '@/components/landing';

<SkillCard
  icon="🚀"
  title="Interactive Learning"
  description="Engage with interactive lessons and real-time feedback"
  animationDelay={2}
/>
```

**Usage in SkillsSection:**
```tsx
{skills.map((skill, idx) => (
  <SkillCard
    key={idx}
    {...skill}
    animationDelay={idx}
  />
))}
```

---

### 5. **TestimonialCard**
Displays user testimonials with rating and author info.

```tsx
import { TestimonialCard } from '@/components/landing';

<TestimonialCard
  content="This platform changed how I learn. Highly recommended!"
  author="Sarah Johnson"
  role="Student"
  avatar="👩‍🎓"
  rating={5}
  animationDelay={1}
/>
```

**Usage in TestimonialsSection:**
```tsx
{testimonials.map((testimonial, idx) => (
  <TestimonialCard
    key={idx}
    {...testimonial}
    animationDelay={idx}
  />
))}
```

---

### 6. **StatCard**
Displays statistics with value, label, and optional icon.

```tsx
import { StatCard } from '@/components/landing';

<StatCard
  value="10K+"
  label="Active Students"
  icon="👥"
  animationDelay={1}
/>
```

**Usage in StatsSection:**
```tsx
{stats.map((stat, idx) => (
  <StatCard
    key={idx}
    {...stat}
    animationDelay={idx}
  />
))}
```

---

## Styling & Animations

All cards include:
- **Shadow effects**: Base shadow with enhanced hover shadow
- **Animations**: Fade-in-up animation with staggered delays
- **Hover effects**: Slight lift effect with border color change
- **Responsive**: Mobile-first design with grid layouts

Add `CardStyles` to your component's style tag:

```tsx
import { CardStyles } from '@/components/landing';

<style>{`
  ${CardStyles}
  /* Your custom styles */
`}</style>
```

---

## Common Patterns

### Staggered Animation
Use `animationDelay` prop to create staggered entry animations:

```tsx
{items.map((item, idx) => (
  <SkillCard
    key={idx}
    {...item}
    animationDelay={idx}  // 0.1s, 0.2s, 0.3s, etc.
  />
))}
```

### Custom Colors
Pass `accentColor` to cards that support it:

```tsx
<CourseCard
  {...course}
  accentColor="#A855F7"  // Purple accent
/>
```

### Responsive Grid
Cards automatically adapt to mobile/tablet/desktop using Tailwind grid classes:
- Mobile: 1 column
- Tablet: 2 columns (`md:grid-cols-2`)
- Desktop: 3 columns (`lg:grid-cols-3`)

---

## Benefits of Using Card Components

✅ **DRY (Don't Repeat Yourself)** - Eliminates code duplication
✅ **Consistency** - Uniform styling across all sections
✅ **Maintainability** - Single source of truth for card styling
✅ **Reusability** - Easy to use in new sections
✅ **Performance** - Shared animation logic
✅ **Accessibility** - Consistent hover and focus states

---

## Migration Guide

To convert existing inline card code to use these components:

### Before:
```tsx
<div className="card-base bg-white rounded-2xl border border-gray-200 hover:border-teal-300">
  {/* card content */}
</div>
```

### After:
```tsx
<Card>
  {/* card content */}
</Card>
```

---

For questions or improvements, refer to `Card.tsx` documentation.

import React from 'react';
import {
  GraduationCap,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  Palette,
  Handshake,
  Monitor,
  DollarSign,
  Cpu,
  User,
} from 'lucide-react';

// Icon mapping function
export const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    GraduationCap,
    Users,
    Target,
    Award,
    Lightbulb,
    TrendingUp,
    Palette,
    Handshake,
    Monitor,
    DollarSign,
    Cpu,
    User,
  };

  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent size={48} className="text-gray-600" /> : null;
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  animationDelay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
  animationDelay = 0,
}) => {
  return (
    <div
      className={`card-base bg-white rounded-2xl border border-gray-200 transition-all duration-300 ${
        hover ? 'hover:border-[#3085c7] hover:shadow-lg hover:-translate-y-1' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{
        animation: 'fadeInUp 0.6s ease-out',
        animationDelay: `${animationDelay * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
};

interface CourseCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  type: string;
  age: string;
  currentPrice: string;
  oldPrice: string;
  accentColor?: string;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps & { animationDelay?: number }> = ({
  icon,
  badge,
  title,
  description,
  duration,
  type,
  age,
  currentPrice,
  oldPrice,
  accentColor = '#3085c7',
  onClick,
  animationDelay = 0,
}) => {
  return (
    <Card
      animationDelay={animationDelay}
      className="overflow-hidden hover:shadow-2xl"
      onClick={onClick}
    >
      {/* Header */}
      <div className="relative h-32 bg-linear-to-br from-[#f7f8fa] to-[#f7f8fa] flex items-center justify-center">
        {getIconComponent(icon)}
        <span
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: accentColor }}
        >
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Info Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
            {duration}
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
            {type}
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
            {age}
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg font-black" style={{ color: accentColor }}>
            {currentPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        </div>

        {/* CTA Button */}
        <button
          className="w-full text-white py-3 rounded-xl font-black transition-all hover:shadow-md"
          style={{ backgroundColor: accentColor }}
        >
          Đăng ký ngay
        </button>
      </div>
    </Card>
  );
};

interface TeacherCardProps {
  avatar: string;
  name: string;
  bio: string;
  rating: string;
  accentColor?: string;
}

export const TeacherCard: React.FC<TeacherCardProps & { animationDelay?: number }> = ({
  avatar,
  name,
  bio,
  rating,
  accentColor = '#3085c7',
  animationDelay = 0,
}) => {
  return (
    <Card animationDelay={animationDelay}>
      {/* Avatar */}
      <div className="w-full h-64 bg-linear-to-br from-[#f7f8fa] to-[#f7f8fa] flex items-center justify-center text-7xl relative overflow-hidden">
        <div
          className="absolute w-full h-full bg-gradient-radial from-[#3085c7]/10 to-transparent"
          style={{ animation: 'pulse 3s ease-in-out infinite' }}
        ></div>
        {getIconComponent(avatar)}
      </div>

      {/* Info */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 leading-relaxed mb-4 text-sm">{bio}</p>
        <div style={{ color: accentColor }} className="font-semibold text-sm">
          {rating}
        </div>
      </div>
    </Card>
  );
};

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

export const SkillCard: React.FC<SkillCardProps & { animationDelay?: number }> = ({
  icon,
  title,
  description,
  animationDelay = 0,
}) => {
  return (
    <Card animationDelay={animationDelay} className="p-8">
      <div className="mb-5 skill-icon flex justify-center" style={{ animation: 'rotateIcon 3s ease-in-out infinite' }}>
        {getIconComponent(icon)}
      </div>
      <h3 className="text-2xl font-black mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </Card>
  );
};

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps & { animationDelay?: number }> = ({
  content,
  author,
  role,
  avatar,
  rating = 5,
  animationDelay = 0,
}) => {
  return (
    <Card animationDelay={animationDelay} className="p-6">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-xl">
            ⭐
          </span>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="text-3xl">{avatar}</div>
        <div>
          <p className="font-black text-gray-900">{author}</p>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>
    </Card>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export const StatCard: React.FC<StatCardProps & { animationDelay?: number }> = ({
  value,
  label,
  icon,
  animationDelay = 0,
}) => {
  return (
    <Card animationDelay={animationDelay} className="p-8 text-center" hover={false}>
      {icon && <div className="text-5xl mb-4">{icon}</div>}
      <div className="text-4xl font-black text-[#3085c7] mb-2">{value}</div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </Card>
  );
};

export const CardStyles = `
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

  @keyframes rotateIcon {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
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

  .card-base {
    box-shadow: 0 4px 16px rgba(48, 133, 199, 0.08);
  }

  .card-base:hover {
    box-shadow: 0 12px 32px rgba(48, 133, 199, 0.18);
  }
`;

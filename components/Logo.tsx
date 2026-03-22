import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'monochrome';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  className = '', 
  iconClassName = 'w-8 h-8',
  textClassName = 'text-xl'
}) => {
  const isMonochrome = variant === 'monochrome';

  const Icon = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 ${iconClassName}`}
    >
      <defs>
        <linearGradient id="carvix-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMonochrome ? "#FFFFFF" : "#2F80ED"} />
          <stop offset="100%" stopColor={isMonochrome ? "#FFFFFF" : "#B026FF"} />
        </linearGradient>
        <linearGradient id="carvix-silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        {!isMonochrome && (
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>

      {/* Outer Hexagon / Tech Shield */}
      <path 
        d="M50 5 L88.97 27.5 L88.97 72.5 L50 95 L11.03 72.5 L11.03 27.5 Z" 
        stroke={isMonochrome ? "#FFFFFF" : "url(#carvix-silver)"} 
        strokeWidth="2" 
        strokeOpacity={isMonochrome ? "1" : "0.3"} 
        fill="none" 
      />
      
      {/* Aerodynamic Car Profile / V-Shape (Forward Motion) */}
      <path 
        d="M25 45 L50 75 L75 45 L50 25 Z" 
        stroke="url(#carvix-grad)" 
        strokeWidth="6" 
        strokeLinejoin="round" 
        fill="none" 
        filter={isMonochrome ? "" : "url(#glow)"} 
      />
      
      {/* AI Circuit / Speed Lines cutting through */}
      <path 
        d="M35 55 L50 40 L65 55" 
        stroke="#FFFFFF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        filter={isMonochrome ? "" : "url(#glow)"} 
      />
      
      {/* AI Core Nodes */}
      <circle 
        cx="50" cy="40" r="5" 
        fill={isMonochrome ? "#FFFFFF" : "#2F80ED"} 
        filter={isMonochrome ? "" : "url(#glow)"} 
      />
      <circle 
        cx="50" cy="75" r="5" 
        fill={isMonochrome ? "#FFFFFF" : "#B026FF"} 
        filter={isMonochrome ? "" : "url(#glow)"} 
      />
      
      {/* Connecting Data Line */}
      <path 
        d="M50 45 L50 70" 
        stroke="url(#carvix-grad)" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
      />
    </svg>
  );

  if (variant === 'icon') {
    return <Icon />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Icon />
      <span className={`font-bold tracking-tight ${textClassName} ${isMonochrome ? 'text-white' : ''}`}>
        <span className={isMonochrome ? 'text-white' : 'text-white'}>Carvix</span>
        <span className={isMonochrome ? 'text-white ml-1' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#2F80ED] to-[#B026FF] ml-1'}>
          AI
        </span>
      </span>
    </div>
  );
};

export default Logo;

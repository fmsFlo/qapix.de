'use client'

interface QapixLogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'full' | 'icon' | 'text'
  className?: string
}

export default function QapixLogo({ 
  size = 'medium', 
  variant = 'full',
  className = '' 
}: QapixLogoProps) {
  const sizes = {
    small: { icon: 24, font: 20 },
    medium: { icon: 32, font: 28 },
    large: { icon: 48, font: 40 },
  }

  const currentSize = sizes[size]

  const QIcon = ({ iconSize }: { iconSize: number }) => (
    <svg width={iconSize} height={iconSize} viewBox="0 0 100 100" fill="none" className="flex-shrink-0">
      {/* Q Shape */}
      <path
        d="M50 10 C70 10, 85 25, 85 45 C85 65, 70 80, 50 80 L50 65 C62 65, 70 57, 70 45 C70 33, 62 25, 50 25 L50 10 Z"
        fill="#00D9FF"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(0,217,255,0.4))'
        }}
      />
      <circle
        cx="50"
        cy="45"
        r="15"
        fill="transparent"
        stroke="#7B61FF"
        strokeWidth="3"
      />
      
      {/* Tail of Q */}
      <rect 
        x="35" 
        y="70" 
        width="8" 
        height="20" 
        fill="#00D9FF"
        rx="2"
      />
      
      {/* X accent */}
      <g style={{
        filter: 'drop-shadow(0 2px 8px rgba(123,97,255,0.5))'
      }}>
        <path 
          d="M65 75 L77 87 L71 93 L59 81 Z" 
          fill="#7B61FF"
        />
        <path 
          d="M77 75 L65 87 L71 93 L83 81 Z" 
          fill="#7B61FF"
        />
      </g>
    </svg>
  )

  if (variant === 'icon') {
    return (
      <div className={className}>
        <QIcon iconSize={currentSize.icon} />
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={`font-heading font-bold text-white ${className}`} style={{
        fontSize: `${currentSize.font}px`,
        letterSpacing: '-0.02em',
      }}>
        qapix
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <QIcon iconSize={currentSize.icon} />
      <span 
        className="font-heading font-bold text-white"
        style={{
          fontSize: `${currentSize.font}px`,
          letterSpacing: '-0.02em',
        }}
      >
        qapix
      </span>
    </div>
  )
}


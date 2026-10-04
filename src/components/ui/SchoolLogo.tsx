interface SchoolLogoProps {
  className?: string
  theme?: 'light' | 'dark'
}

export function SchoolLogo({ className = '', theme = 'light' }: SchoolLogoProps) {
  const isDark = theme === 'dark'
  const textColor = isDark ? 'text-[#F5F1E8]' : 'text-[#14201F]'
  const subtextColor = isDark ? 'text-[rgba(245,241,232,0.6)]' : 'text-[#8E9592]'

  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-2 focus-visible:outline-[#063B31] ${className}`}
      aria-label="Bal Vidyavasham School, Mahadetoli, Senha, Lohardaga — Home"
    >
      {/* Precision Circular Seal Emblem */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#CDA66B] transition-transform duration-300 group-hover:rotate-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer ray/beaded ring */}
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
          {/* 16 Radiating petals */}
          <path
            d="M50 12 L50 22 M50 78 L50 88 M12 50 L22 50 M78 50 L88 50 M23 23 L30 30 M70 70 L77 77 M77 23 L70 30 M23 77 L30 70"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="1.25" />
          {/* Lotus / Flame Emblem in Center */}
          <path
            d="M50 34 C44 42 42 50 42 58 C42 63 45.5 66 50 66 C54.5 66 58 63 58 58 C58 50 56 42 50 34 Z"
            fill="currentColor"
            fillOpacity="0.85"
          />
          <path
            d="M50 46 C41 51 36 57 37 62 C38 65 42 66 46 63 C49 61 50 56 50 46 Z"
            fill="currentColor"
            fillOpacity="0.7"
          />
          <path
            d="M50 46 C59 51 64 57 63 62 C62 65 58 66 54 63 C51 61 50 56 50 46 Z"
            fill="currentColor"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-serif tracking-[0.03em] sm:tracking-[0.04em] text-[15px] sm:text-[17px] font-bold ${textColor} transition-colors`}
        >
          Bal Vidyavasham
        </span>
        <span
          className={`hidden sm:block font-sans tracking-[0.14em] text-[8.5px] sm:text-[9.5px] uppercase font-medium mt-1 ${subtextColor}`}
        >
          Mahadetoli • Senha • Lohardaga
        </span>
      </div>
    </a>
  )
}

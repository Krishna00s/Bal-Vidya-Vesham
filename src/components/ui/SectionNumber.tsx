interface SectionNumberProps {
  number: string
  className?: string
  theme?: 'light' | 'dark'
}

export function SectionNumber({
  number,
  className = '',
  theme = 'light',
}: SectionNumberProps) {
  const colorClass =
    theme === 'dark'
      ? 'text-[rgba(245,241,232,0.4)]'
      : 'text-[#14201F]/80'

  return (
    <span
      className={`font-sans tracking-[-0.05em] leading-none select-none font-normal ${colorClass} ${className}`}
      aria-hidden="true"
    >
      {number}
    </span>
  )
}

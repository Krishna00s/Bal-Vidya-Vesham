import type { ReactNode } from 'react'

interface MicroLabelProps {
  children: ReactNode
  className?: string
  theme?: 'light' | 'dark'
}

export function MicroLabel({
  children,
  className = '',
  theme = 'light',
}: MicroLabelProps) {
  const colorClass =
    theme === 'dark'
      ? 'text-[rgba(245,241,232,0.7)]'
      : 'text-[#4B5552]'

  return (
    <span
      className={`font-sans uppercase text-[10px] sm:text-[11px] font-medium tracking-[0.10em] sm:tracking-[0.16em] leading-tight ${colorClass} ${className}`}
    >
      {children}
    </span>
  )
}

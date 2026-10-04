import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'secondary' | 'institutional' | 'link'
  children: ReactNode
  href?: string
  className?: string
  icon?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  icon,
  ...rest
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-3 font-sans text-[13px] font-medium tracking-[0.01em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#063B31] cursor-pointer'

  const variants = {
    // Primary: Used in Hero ("(→) Explore the School")
    primary:
      'text-[#14201F] hover:text-[#063B31] group',
    // Institutional: Deep green filled CTA button (Header "Enquire Now →")
    institutional:
      'bg-[#063B31] text-[#F5F1E8] px-4 py-2 hover:bg-[#022B24] active:bg-[#063B31] rounded-[2px]',
    // Secondary: Bordered editorial button
    secondary:
      'border border-[rgba(20,32,31,0.2)] px-4 py-2 text-[#14201F] hover:border-[#14201F] rounded-[2px]',
    // Link: Text with arrow
    link:
      'text-[#14201F] hover:underline underline-offset-4',
  }

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...rest}>
      {content}
    </button>
  )
}

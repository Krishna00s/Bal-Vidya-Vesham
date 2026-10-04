import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 ${className}`}
    >
      {children}
    </Component>
  )
}

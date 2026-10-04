interface EditorialRuleProps {
  className?: string
  theme?: 'light' | 'dark'
  vertical?: boolean
}

export function EditorialRule({
  className = '',
  theme = 'light',
  vertical = false,
}: EditorialRuleProps) {
  const lineClass =
    theme === 'dark'
      ? 'border-[rgba(245,241,232,0.18)]'
      : 'border-[rgba(20,32,31,0.14)]'

  if (vertical) {
    return <div className={`border-r h-full ${lineClass} ${className}`} aria-hidden="true" />
  }

  return <hr className={`w-full border-t m-0 ${lineClass} ${className}`} aria-hidden="true" />
}

import { useEffect, useRef } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { NAVIGATION_ITEMS, HEADER_CTA } from '@/content/navigation.data.ts'
import { scrollToTarget } from '@/motion/lenis.ts'
import { SchoolLogo } from '@/components/ui/SchoolLogo.tsx'
import { Button } from '@/components/ui/Button.tsx'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  activeItem?: string
}

export function MobileNav({ isOpen, onClose, activeItem = '01' }: MobileNavProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Handle Escape key and body scroll locking
  useEffect(() => {
    if (!isOpen) return

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Focus close button on mount
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleLinkClick = (href: string) => {
    onClose()
    // Smooth scroll to target section
    setTimeout(() => {
      scrollToTarget(href, -70)
    }, 150)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col bg-[#F5F1E8] px-6 py-5 sm:px-10 transition-opacity duration-300"
    >
      {/* Top bar with Logo and Close trigger */}
      <div className="flex items-center justify-between border-b border-[rgba(20,32,31,0.12)] pb-4">
        <SchoolLogo />
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          aria-label="Close navigation menu"
          className="p-2 text-[#14201F] hover:text-[#063B31] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31]"
        >
          <X className="w-6 h-6 stroke-[1.75]" />
        </button>
      </div>

      {/* Editorial Navigation List */}
      <nav className="flex-1 overflow-y-auto py-8">
        <ul className="flex flex-col divide-y divide-[rgba(20,32,31,0.08)]">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = item.index === activeItem
            return (
              <li key={item.index}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(item.href)
                  }}
                  className={`group flex items-baseline justify-between py-3.5 transition-colors ${
                    isActive ? 'text-[#063B31]' : 'text-[#14201F] hover:text-[#063B31]'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-[#8E9592] tracking-wider">
                      {item.index}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer Area with CTA and School Location */}
      <div className="border-t border-[rgba(20,32,31,0.12)] pt-6 pb-4 flex flex-col gap-4">
        <Button
          variant="institutional"
          href={HEADER_CTA.href}
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick(HEADER_CTA.href)
          }}
          className="w-full justify-center py-3 text-center text-[14px]"
        >
          {HEADER_CTA.label}
        </Button>
        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-[#8E9592]">
          Mahadetoli • Senha • Lohardaga, Jharkhand
        </p>
      </div>
    </div>
  )
}

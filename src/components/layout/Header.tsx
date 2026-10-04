import { useState } from 'react'
import { Menu } from 'lucide-react'
import { NAVIGATION_ITEMS, HEADER_CTA } from '@/content/navigation.data.ts'
import { SchoolLogo } from '@/components/ui/SchoolLogo.tsx'
import { Button } from '@/components/ui/Button.tsx'
import { MobileNav } from '@/components/layout/MobileNav.tsx'
import { scrollToTarget } from '@/motion/lenis.ts'

interface HeaderProps {
  activeSection?: string
}

export function Header({ activeSection = '01' }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    scrollToTarget(href, -70)
  }

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full bg-[#F5F1E8]/95 backdrop-blur-[6px] border-b border-[rgba(20,32,31,0.12)] transition-colors duration-200"
      >
        <div className="mx-auto flex h-14 sm:h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Left: Brand Identity */}
          <div className="shrink-0">
            <SchoolLogo />
          </div>

          {/* Center: Desktop Swiss Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-5 2xl:gap-7"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = item.index === activeSection
              return (
                <a
                  key={item.index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative inline-flex items-baseline gap-1 py-1 text-[12px] font-medium tracking-[0.02em] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31] ${
                    isActive
                      ? 'text-[#063B31] font-semibold'
                      : 'text-[#14201F]/75 hover:text-[#14201F]'
                  }`}
                >
                  <span
                    className={`font-mono text-[9.5px] transition-colors ${
                      isActive ? 'text-[#063B31]' : 'text-[#8E9592] group-hover:text-[#14201F]'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#063B31]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Institutional CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:block">
              <Button
                variant="institutional"
                href={HEADER_CTA.href}
                onClick={(e) => handleNavClick(e, HEADER_CTA.href)}
                className="text-[12px] sm:text-[13px] py-1.5 sm:py-2 px-3 sm:px-4 shrink-0"
              >
                {HEADER_CTA.label}
              </Button>
            </div>

            {/* Mobile Hamburger button for < xl */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileNavOpen}
              className="xl:hidden flex items-center justify-center w-9 h-9 p-1 text-[#14201F] hover:text-[#063B31] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31] shrink-0"
            >
              <Menu className="w-5 h-5 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        activeItem={activeSection}
      />
    </>
  )
}

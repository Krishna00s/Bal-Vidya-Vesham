import { useState } from 'react'
import { Menu, ArrowRight } from 'lucide-react'
import { NAVIGATION_ITEMS, HEADER_CTA } from '@/content/navigation.data.ts'
import { SchoolLogo } from '@/components/ui/SchoolLogo.tsx'
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
      <header className="sticky top-0 z-40 w-full bg-[#F5F1E8]/98 backdrop-blur-[4px] border-b border-[rgba(20,32,31,0.12)]">
        <div className="mx-auto flex h-14 sm:h-16 w-full max-w-[1440px] items-stretch justify-between px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Left: Brand Identity */}
          <div className="flex items-center shrink-0 py-2 pr-4 sm:pr-8">
            <SchoolLogo />
          </div>

          {/* Center: Desktop Swiss Editorial Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 flex-1 px-4"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = item.index === activeSection
              return (
                <a
                  key={item.index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative inline-flex items-baseline gap-1.5 py-1.5 text-[11.5px] 2xl:text-[12px] font-medium tracking-[0.02em] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31] ${
                    isActive
                      ? 'text-[#063B31] font-semibold'
                      : 'text-[#14201F]/70 hover:text-[#14201F]'
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] transition-colors ${
                      isActive ? 'text-[#063B31]' : 'text-[#8E9592] group-hover:text-[#14201F]'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#063B31]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Architectural CTA Block aligned to column 12 & Mobile Menu Trigger */}
          <div className="flex items-stretch shrink-0">
            {/* Desktop Enquire Now block integrated into header height */}
            <div className="hidden sm:flex items-stretch border-l border-[rgba(20,32,31,0.12)]">
              <a
                href={HEADER_CTA.href}
                onClick={(e) => handleNavClick(e, HEADER_CTA.href)}
                className="group flex items-center gap-2 px-5 lg:px-7 bg-[#063B31] text-[#F5F1E8] hover:bg-[#022B24] transition-colors text-[11.5px] lg:text-[12.5px] font-medium tracking-[0.03em] uppercase select-none focus-visible:outline-2 focus-visible:outline-[#063B31]"
              >
                <span>{HEADER_CTA.label}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger button for < xl */}
            <div className="flex items-center pl-3 xl:hidden">
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileNavOpen}
                className="flex items-center justify-center w-9 h-9 text-[#14201F] hover:text-[#063B31] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31]"
              >
                <Menu className="w-5 h-5 stroke-[1.75]" />
              </button>
            </div>
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

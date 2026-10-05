import { useEffect, useState } from 'react'
import { initLenis } from '@/motion/lenis.ts'
import { Header } from '@/components/layout/Header.tsx'
import { HeroSection } from '@/components/sections/HeroSection.tsx'
import { AboutSection } from '@/components/sections/AboutSection.tsx'

export function App() {
  const [activeSection, setActiveSection] = useState('01')

  useEffect(() => {
    // Initialize root smooth scrolling pipeline (Lenis -> GSAP ticker)
    const cleanupLenis = initLenis()

    // Observe active section for header indicator
    const handleScroll = () => {
      const aboutEl = document.getElementById('about')
      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection('02')
          return
        }
      }
      setActiveSection('01')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cleanupLenis()
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#F5F1E8] text-[#14201F] flex flex-col font-sans selection:bg-[#063B31] selection:text-[#F5F1E8]">
      {/* Editorial Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content" className="flex-1 w-full min-w-0">
        {/* Section 01: Hero / School Introduction */}
        <HeroSection />

        {/* Section 02: About Our School */}
        <AboutSection />
      </main>
    </div>
  )
}

export default App

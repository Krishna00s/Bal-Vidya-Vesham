import { useEffect } from 'react'
import { initLenis } from '@/motion/lenis.ts'
import { Header } from '@/components/layout/Header.tsx'
import { HeroSection } from '@/components/sections/HeroSection.tsx'

export function App() {
  useEffect(() => {
    // Initialize root smooth scrolling pipeline (Lenis -> GSAP ticker)
    const cleanupLenis = initLenis()
    return () => {
      cleanupLenis()
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#F5F1E8] text-[#14201F] flex flex-col font-sans selection:bg-[#063B31] selection:text-[#F5F1E8]">
      {/* Editorial Navigation Header */}
      <Header activeSection="01" />

      {/* Main Content: Phase 1 Hero Visual Benchmark */}
      <main id="main-content" className="flex-1 w-full min-w-0">
        <HeroSection />

        {/* Section 02 Transition Anchor / Scroll Runway for testing scroll interactions */}
        <div
          id="about"
          className="relative w-full min-h-[60vh] border-t border-[rgba(20,32,31,0.12)] bg-[#EEE9DD]/30 flex flex-col items-center justify-center py-16 px-6 text-center select-none"
        >
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8E9592]">
            <span className="w-8 h-[1px] bg-[rgba(20,32,31,0.2)]" />
            <span>Section 02 Transition Boundary · Pending Phase 2</span>
            <span className="w-8 h-[1px] bg-[rgba(20,32,31,0.2)]" />
          </div>
          <p className="mt-2 font-mono text-[11px] text-[#4B5552] max-w-md">
            Scroll runway active to validate scroll-linked internal image reveal and bidirectional reversal.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App

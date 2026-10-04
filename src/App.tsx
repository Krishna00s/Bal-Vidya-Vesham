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
      </main>
    </div>
  )
}

export default App

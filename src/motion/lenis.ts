import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function initLenis(): () => void {
  if (typeof window === 'undefined') return () => {}
  if (lenisInstance) {
    return () => {}
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  })

  lenisInstance = lenis

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  const onScroll = () => {
    ScrollTrigger.update()
  }
  lenis.on('scroll', onScroll)

  // Drive Lenis through GSAP's centralized ticker loop
  const tickerUpdate = (time: number) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(tickerUpdate)
  gsap.ticker.lagSmoothing(0)

  return () => {
    lenis.off('scroll', onScroll)
    gsap.ticker.remove(tickerUpdate)
    lenis.destroy()
    lenisInstance = null
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function scrollToTarget(target: string | HTMLElement, offset = 0): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset })
  } else {
    const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

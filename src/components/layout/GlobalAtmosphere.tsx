/**
 * GlobalAtmosphere Component
 * 
 * Living Ivory Atmospheric Background System for Bal Vidyavasham.
 * 
 * Generates an ultra-subtle, organic atmospheric wash:
 * - 80–90% warm ivory/paper base (#F5F1E8)
 * - 5–10% soft champagne / warm sunlight (#CDA66B at ~6-12% opacity)
 * - 2–5% muted botanical green (#063B31 at ~3-8% opacity)
 * 
 * Driven by GPU-composited CSS keyframe transforms with coprime animation periods
 * (48s, 62s, 54s, 70s) for non-repeating, living natural drift.
 * Completely static when prefers-reduced-motion is active.
 */
export function GlobalAtmosphere() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Base Warm Ivory Canvas Foundation */}
      <div className="absolute inset-0 bg-[#F5F1E8]" />

      {/* Atmospheric Field A: Muted Botanical Green Wash (Lower-Left / Foliage light) */}
      <div
        className="atmosphere-layer-a absolute -top-[15vh] -left-[15vw] w-[130vw] h-[130vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 16% 82%, rgba(6, 59, 49, 0.075) 0%, rgba(28, 72, 62, 0.038) 45%, transparent 75%)',
        }}
      />

      {/* Atmospheric Field B: Champagne Sunlight Warmth (Upper-Right / Morning light) */}
      <div
        className="atmosphere-layer-b absolute -top-[15vh] -left-[15vw] w-[130vw] h-[130vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 65% at 86% 22%, rgba(205, 166, 107, 0.115) 0%, rgba(225, 196, 148, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* Atmospheric Field C: Delicate Golden-Ivory Morning Accent (Upper-Left) */}
      <div
        className="atmosphere-layer-c absolute -top-[15vh] -left-[15vw] w-[130vw] h-[130vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 12% 14%, rgba(205, 166, 107, 0.07) 0%, rgba(238, 233, 221, 0.04) 45%, transparent 72%)',
        }}
      />

      {/* Atmospheric Field D: Subtle Warm Paper Depth Field (Lower-Right balance) */}
      <div
        className="atmosphere-layer-d absolute -top-[15vh] -left-[15vw] w-[130vw] h-[130vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 60% at 78% 84%, rgba(205, 166, 107, 0.058) 0%, rgba(6, 59, 49, 0.025) 40%, transparent 75%)',
        }}
      />
    </div>
  )
}

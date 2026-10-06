/**
 * GlobalAtmosphere Component
 * 
 * Living Ivory Atmospheric Background System for Bal Vidyavasham.
 * Matched directly to the visual reference in media_1791192750715.jpg:
 * 
 * - Muted botanical sage green wash sweeping through the lower-left (#9BAB94 tones)
 * - Luminous champagne sunlight glow cascading down the right quadrant (#F2D9AD tones)
 * - Soft morning ambient highlight in the top-left
 * - Overwhelmingly warm ivory / paper base (#F5F1E8)
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
      {/* Base Warm Ivory Paper Foundation */}
      <div className="absolute inset-0 bg-[#F5F1E8]" />

      {/* Layer A: Primary Botanical Sage Field (Sweeps lower-left -> center -> upper-center) */}
      <div
        className="atmosphere-layer-a absolute -top-[45vh] -left-[45vw] w-[190vw] h-[190vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 20% 80%, rgba(118, 150, 128, 0.42) 0%, rgba(142, 172, 150, 0.26) 35%, rgba(180, 200, 185, 0.10) 65%, transparent 85%)',
        }}
      />

      {/* Layer B: Primary Luminous Champagne Sunlight (Cascades upper-right -> center-right -> lower-right) */}
      <div
        className="atmosphere-layer-b absolute -top-[45vh] -left-[45vw] w-[190vw] h-[190vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 86% 18%, rgba(226, 184, 122, 0.46) 0%, rgba(238, 204, 150, 0.28) 40%, rgba(246, 224, 182, 0.12) 68%, transparent 88%)',
        }}
      />

      {/* Layer C: Delicate Golden-Ivory Morning Accent (Drifts top-left -> center -> right) */}
      <div
        className="atmosphere-layer-c absolute -top-[45vh] -left-[45vw] w-[190vw] h-[190vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 14% 18%, rgba(230, 198, 144, 0.30) 0%, rgba(242, 220, 182, 0.12) 50%, transparent 75%)',
        }}
      />

      {/* Layer D: Secondary Botanical Foliage Accent (Glides bottom-right -> bottom-center -> center) */}
      <div
        className="atmosphere-layer-d absolute -top-[45vh] -left-[45vw] w-[190vw] h-[190vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 82% 84%, rgba(130, 160, 140, 0.32) 0%, rgba(160, 185, 168, 0.16) 45%, transparent 78%)',
        }}
      />

      {/* Ambient Diagonal Sunlight-to-Foliage Wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(238, 206, 152, 0.12) 0%, transparent 35%, transparent 65%, rgba(135, 166, 145, 0.14) 100%)',
        }}
      />
    </div>
  )
}

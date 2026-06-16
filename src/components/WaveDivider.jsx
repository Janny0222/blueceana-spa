// Animated SVG wave divider. Two stacked layers drift at different speeds
// to create a gentle, layered ocean motion at section boundaries.
export default function WaveDivider({
  className = '',
  flip = false,
  color = '#ffffff',
}) {
  // A single wave tile; we render it twice side-by-side inside a 200%-wide
  // strip and translate by -50% so the loop is seamless.
  const Wave = ({ opacity, speed, fill }) => (
    <div
      className={`absolute bottom-0 left-0 flex w-[200%] ${
        speed === 'slow' ? 'animate-wave-slow' : 'animate-wave-fast'
      }`}
      style={{ opacity }}
    >
      {[0, 1].map((k) => (
        <svg
          key={k}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-full w-1/2"
        >
          <path
            fill={fill}
            d="M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,50 L1200,120 L0,120 Z"
          />
        </svg>
      ))}
    </div>
  )

  return (
    <div
      className={`relative h-16 w-full overflow-hidden sm:h-24 ${
        flip ? 'rotate-180' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <Wave opacity={0.5} speed="slow" fill={color} />
      <Wave opacity={1} speed="fast" fill={color} />
    </div>
  )
}

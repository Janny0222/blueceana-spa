// Lightweight floating bubbles — pure CSS animation, no JS per frame.
// Positions/sizes are deterministic so there is no layout jank.
const BUBBLES = [
  { left: '8%', size: 14, delay: 0, dur: 13 },
  { left: '20%', size: 24, delay: 4, dur: 17 },
  { left: '33%', size: 10, delay: 2, dur: 11 },
  { left: '47%', size: 30, delay: 6, dur: 19 },
  { left: '58%', size: 16, delay: 1, dur: 14 },
  { left: '70%', size: 12, delay: 5, dur: 12 },
  { left: '82%', size: 26, delay: 3, dur: 18 },
  { left: '92%', size: 18, delay: 7, dur: 15 },
]

export default function Bubbles({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-white/30 ring-1 ring-white/40"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animation: `float-up ${b.dur}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

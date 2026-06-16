// Blueceana wordmark + ocean-drop emblem.
export default function Logo({ light = false, className = '' }) {
  const textColor = light ? 'text-white' : 'text-ocean-900'
  const subColor = light ? 'text-ocean-100/80' : 'text-ocean-500'
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5bb8e8" />
            <stop offset="1" stopColor="#0e7cb0" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="url(#logoGrad)" />
        <path
          d="M10 30c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M24 9c3 3 5.5 6 5.5 10a5.5 5.5 0 0 1-11 0c0-4 2.5-7 5.5-10z"
          fill="#fff"
          opacity="0.95"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${textColor}`}>
          Blueceana
        </span>
        <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${subColor}`}>
          Spa
        </span>
      </span>
    </span>
  )
}

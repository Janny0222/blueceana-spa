// Lightweight inline SVG icon set (stroke-based, inherits currentColor).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className = 'w-7 h-7' }) {
  const paths = {
    massage: (
      <>
        <circle cx="12" cy="6" r="2.4" />
        <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" />
        <path d="M9 13c1-1 5-1 6 0" />
      </>
    ),
    foot: (
      <>
        <path d="M7 4c2 0 4 1.5 4 4 0 2.5-1 4-1 6.5C10 17 8 18 6.5 18 5 18 4 16.8 4 15c0-2 .8-3 .8-5C4.8 6 5.2 4 7 4z" />
        <path d="M13 9c1.2-.3 2.2.4 2.3 1.4M15.5 11.2c1.2-.3 2.2.4 2.3 1.4M17.5 13.6c1.1-.2 2 .5 2 1.5" />
      </>
    ),
    scrub: (
      <>
        <path d="M4 14h16l-1.2 5.2a2 2 0 0 1-2 1.6H7.2a2 2 0 0 1-2-1.6L4 14z" />
        <path d="M8 14V9a4 4 0 0 1 8 0v5" />
        <path d="M7 4.5c.6.6.6 1.4 0 2M12 3.5c.6.6.6 1.4 0 2M17 4.5c.6.6.6 1.4 0 2" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14" />
        <path d="M5 19c3-4 7-7 11-8" />
      </>
    ),
    hands: (
      <>
        <path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V10" />
        <path d="M10 10V5.5a1.5 1.5 0 0 1 3 0V10" />
        <path d="M13 10.5V6.8a1.5 1.5 0 0 1 3 0V13c0 4-2.5 7-6 7s-6-2.5-6-6c0-1.2.7-2 1.7-2 .8 0 1.3.5 1.3 1.3" />
      </>
    ),
    home: (
      <>
        <path d="M4 11l8-6 8 6" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    tag: (
      <>
        <path d="M4 12V5a1 1 0 0 1 1-1h7l8 8-8 8-8-8z" />
        <circle cx="8.5" cy="8.5" r="1.3" />
      </>
    ),
    phone: (
      <>
        <path d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2z" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    facebook: (
      <>
        <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.4.3-.5.6-.5z" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}

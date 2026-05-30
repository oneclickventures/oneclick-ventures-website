export function Footer() {
  return (
    <footer
      style={{
        background: '#0A1628',
        borderTop: '1px solid rgba(147,197,253,0.08)',
        padding: '28px 48px',
      }}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-4"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}
      >
        <span style={{ fontSize: 12, color: '#475569' }}>
          © 2026 OneClick Ventures. All rights reserved.
        </span>
        <span
          className="font-syne"
          style={{ fontSize: 13, fontWeight: 700, color: '#93C5FD' }}
        >
          Explore. Engage. Enable.
        </span>
        <span style={{ fontSize: 12, color: '#475569' }}>
          Pune, India — 2026
        </span>
      </div>
    </footer>
  );
}

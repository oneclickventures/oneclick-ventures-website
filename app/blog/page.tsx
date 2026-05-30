import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { WaFloat } from '@/components/WaFloat';

export const metadata = {
  title: 'Blog — OneClick Ventures',
  description:
    'Insights on building ventures, operating in Indian markets, and the frameworks we use internally. Coming soon.',
};

export default function BlogPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050B18',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
          <Logo size={64} href="/" />
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#1A56DB',
            marginBottom: 20,
          }}
        >
          COMING SOON
        </div>

        <h1
          className="font-syne"
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            color: '#F0F4FF',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Ideas worth sharing.
        </h1>

        <p
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#64748B',
            lineHeight: 1.8,
            marginBottom: 36,
          }}
        >
          We&apos;re working on something thoughtful. Insights on building
          ventures, operating in Indian markets, and the frameworks we use internally
          will live here soon.
        </p>

        <Link
          href="/"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#1A56DB',
            textDecoration: 'none',
          }}
          className="hover:opacity-80 transition-opacity"
        >
          ← Back to Home
        </Link>
      </div>

      <WaFloat />
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: number;
  href?: string | null;
  showWordmark?: boolean;
  className?: string;
}

export function Logo({
  size = 36,
  href = '/',
  showWordmark = false,
  className = '',
}: LogoProps) {
  const content = (
    <div className={`flex items-center gap-3 min-w-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="OneClick Ventures"
        width={size}
        height={size}
        style={{ borderRadius: 6, objectFit: 'contain' }}
        className="shrink-0"
        priority={size >= 36}
      />
      {showWordmark && (
        <span
          className="font-syne truncate"
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: '#F0F4FF',
            letterSpacing: '-0.02em',
          }}
        >
          One<span style={{ color: '#1A56DB' }}>Click</span> Ventures
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}

'use client';
import { useState, FormEvent } from 'react';

const inputStyle: React.CSSProperties = {
  background: 'rgba(10,22,40,0.8)',
  border: '1px solid rgba(147,197,253,0.15)',
  color: '#F0F4FF',
  borderRadius: 4,
  padding: '12px 16px',
  width: '100%',
  fontSize: 14,
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
};

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = 'Full name is required';
    if (!email.trim()) nextErrors.email = 'Email is required';
    if (!message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#1A56DB';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(147,197,253,0.15)';
  };

  return (
    <section
      id="contact"
      style={{
        padding: '96px 48px',
        background: '#050B18',
        borderTop: '1px solid rgba(147,197,253,0.06)',
      }}
    >
      <div style={{ marginBottom: 64 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#475569',
            marginBottom: 10,
          }}
        >
          Get In Touch
        </div>
        <h2
          className="font-syne"
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#F0F4FF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}
        >
          Let&apos;s build something together.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left column — form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p style={{ fontSize: 12, color: '#ef4444', marginTop: 6 }}>{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p style={{ fontSize: 12, color: '#ef4444', marginTop: 6 }}>{errors.email}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Partnership, investment, collaboration..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <div>
            <textarea
              placeholder="Tell us about your idea or how we can work together..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.message && (
              <p style={{ fontSize: 12, color: '#ef4444', marginTop: 6 }}>{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: '#1A56DB',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              padding: '14px 24px',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Send Message
          </button>

          {submitted && (
            <p style={{ fontSize: 14, fontWeight: 500, color: '#1A56DB', marginTop: 4 }}>
              Message sent. We&apos;ll respond within 24 hours.
            </p>
          )}
        </form>

        {/* Right column */}
        <div>
          <h3
            className="font-syne"
            style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 800,
              color: '#F0F4FF',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Have a business idea? We want to hear it.
          </h3>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: '#64748B',
              lineHeight: 1.85,
              marginBottom: 24,
            }}
          >
            Whether you&apos;re an entrepreneur looking for a platform to scale, a
            manufacturer seeking distribution intelligence, or a brand looking for
            operational muscle — we&apos;re open to the conversation. We move fast.
            Expect a response within 24 hours.
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#1A56DB',
              marginBottom: 28,
            }}
          >
            Based in Pune, Maharashtra. Operating across India.
          </p>

          <a
            href="https://wa.me/919970074241?text=Hi%20OneClick%20Ventures%2C%20I%27d%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#25D366',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 4,
              textDecoration: 'none',
              marginBottom: 36,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="tel:+919970074241"
              style={{ fontSize: 15, color: '#F0F4FF', textDecoration: 'none' }}
              className="hover:text-[#93C5FD] transition-colors"
            >
              +91 99700 74241
            </a>
            <a
              href="mailto:info@oneclickventures.in"
              style={{ fontSize: 15, color: '#F0F4FF', textDecoration: 'none' }}
              className="hover:text-[#93C5FD] transition-colors"
            >
              info@oneclickventures.in
            </a>
            <span style={{ fontSize: 15, color: '#64748B' }}>
              Pune, Maharashtra — India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

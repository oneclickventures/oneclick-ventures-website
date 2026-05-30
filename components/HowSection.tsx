'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    num: '01',
    tag: 'VALIDATE',
    title: 'Market Validation First',
    body: 'Every idea goes through structured market validation — customer interviews, competitive mapping, and unit economics modeling — before a single rupee is committed. We only build what the market confirms.',
  },
  {
    num: '02',
    tag: 'BUILD',
    title: 'Rapid Brand Architecture',
    body: 'Brand identity, digital presence, compliance setup, and distribution strategy — built in parallel on our shared platform. What takes most startups six months takes us weeks, because the infrastructure already exists.',
  },
  {
    num: '03',
    tag: 'SCALE',
    title: 'System-Led Growth',
    body: 'We install the operating systems — CRM, fulfilment, customer acquisition, and reporting — that allow a business to grow without proportionally scaling its headcount or complexity.',
  },
];

export function HowSection() {
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      gsap.fromTo(
        panel,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="how"
      style={{
        padding: '96px 48px',
        background: '#0A1628',
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
            color: '#93C5FD',
            marginBottom: 10,
          }}
        >
          How We Work
        </div>
        <h2
          className="font-syne"
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#F0F4FF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: 720,
          }}
        >
          From idea to operating business —{' '}
          <span style={{ color: '#93C5FD' }}>systematically.</span>
        </h2>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          gap: 2,
          background: 'rgba(147,197,253,0.06)',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid rgba(147,197,253,0.06)',
        }}
      >
        {panels.map((p, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) panelsRef.current[i] = el;
            }}
            style={{
              background: '#0A1628',
              padding: '36px 28px',
              position: 'relative',
              overflow: 'hidden',
              opacity: 0,
            }}
          >
            <div
              className="font-syne"
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: 'rgba(26,86,219,0.2)',
                lineHeight: 1,
                marginBottom: 16,
                letterSpacing: '-0.04em',
              }}
            >
              {p.num}
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#93C5FD',
                marginBottom: 10,
              }}
            >
              {p.tag}
            </div>
            <h3
              className="font-syne"
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: '#F0F4FF',
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: '#64748B',
                lineHeight: 1.75,
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

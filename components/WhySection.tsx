'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: 'Shared Operating System',
    desc: 'Technology, finance, legal, and GTM infrastructure built once and deployed across every venture.',
    detail:
      'Technology, finance, legal, and GTM systems are built once and shared across every venture. Founders focus on growth while operational infrastructure is already in place from day one.',
  },
  {
    title: 'Speed to Market',
    desc: 'Pre-built launch frameworks cut time from validated idea to first revenue.',
    detail:
      'Our launch frameworks eliminate months of setup work. Ventures can move from idea validation to customer acquisition and revenue generation significantly faster.',
  },
  {
    title: 'Founder-Operator Model',
    desc: 'Lean. Each venture led by operators with capital efficiency baked in.',
    detail:
      'Every company is led by execution-focused operators who understand how to build sustainably. Capital efficiency and accountability are embedded into every decision.',
  },
  {
    title: 'India-First by Design',
    desc: 'GST compliance, regional distribution, and deep buyer understanding.',
    detail:
      'Built specifically for Indian markets with compliance systems, regional distribution networks, and insights into both B2B and D2C customer behavior.',
  },
];

export function WhySection() {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="why"
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
          Why OneClick Ventures
        </div>
        <h2
          className="font-syne"
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            color: '#F0F4FF',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: 640,
          }}
        >
          The platform that builds the platform.
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
        {/* Left column */}
        <div>
          <h3
            className="font-syne"
            style={{
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 800,
              color: '#F0F4FF',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            We don&apos;t just fund ideas. We{' '}
            <span style={{ color: '#1A56DB' }}>build them</span> with you.
          </h3>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: '#64748B',
              lineHeight: 1.85,
              marginBottom: 32,
            }}
          >
            {items[activeItem].detail}
          </p>
          <button
            onClick={scrollToContact}
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#1A56DB',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'Inter, sans-serif',
            }}
            className="hover:opacity-80 transition-opacity"
          >
            Start a conversation →
          </button>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              onMouseEnter={() => setActiveItem(i)}
              onClick={() => setActiveItem(i)}
              style={{
                background:
                 activeItem === i
                   ? 'rgba(26,86,219,0.15)'
                   : 'rgba(10,22,40,0.8)',

                border:
                 activeItem === i
                   ? '1px solid rgba(26,86,219,0.6)'
                   : '1px solid rgba(147,197,253,0.1)',

                borderLeft: '3px solid #1A56DB',
                borderRadius: 12,
                padding: '24px 28px',

                transform:
                 activeItem === i
                   ? 'translateY(-8px) scale(1.02)'
                   : 'translateY(0)',

                boxShadow:
                 activeItem === i
                   ? '0 20px 40px rgba(26,86,219,0.25)'
                   : 'none',

                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <h4
                className="font-syne"
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#F0F4FF',
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: '#64748B',
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

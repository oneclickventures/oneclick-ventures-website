'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: 'Shared Operating System',
    desc: 'Technology, finance, legal, and GTM infrastructure built once and deployed across every venture.',
  },
  {
    title: 'Speed to Market',
    desc: 'Pre-built launch frameworks cut time from validated idea to first revenue. No starting from zero.',
  },
  {
    title: 'Founder-Operator Model',
    desc: 'Lean. Each venture led by operators with capital efficiency baked in from day one.',
  },
  {
    title: 'India-First by Design',
    desc: 'GST compliance, regional distribution, deep understanding of B2B and D2C buyer behavior.',
  },
];

export function WhySection() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

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
            Most holding companies write a check and step back. We operate
            differently. OneClick Ventures embeds itself in the architecture of every
            business it launches — from the first customer conversation to the systems
            that make scaling inevitable. Our ventures share a common operating system:
            proven playbooks, live technology, compliance infrastructure, and a network
            built specifically for Indian markets.
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
              style={{
                background: 'rgba(10,22,40,0.8)',
                border: '1px solid rgba(147,197,253,0.1)',
                borderLeft: '3px solid #1A56DB',
                borderRadius: 12,
                padding: '24px 28px',
                opacity: 0,
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

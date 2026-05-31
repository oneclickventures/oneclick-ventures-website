'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: 'Shared Operating System',
    desc: 'Technology, finance, legal, and GTM infrastructure built once and deployed across every venture.',
    detail:
      'We build core business infrastructure once and leverage it across every venture within the ecosystem. This includes technology platforms, financial management systems, legal frameworks, compliance processes, and go-to-market capabilities that are standardized and scalable. By sharing these foundational resources, new ventures can avoid duplicating costs, reducing both time and capital requirements. Teams gain immediate access to proven tools, expertise, and operational support, allowing them to focus on innovation and growth rather than administrative setup. This unified operating model creates efficiencies, improves consistency, and accelerates execution across the portfolio. The result is a stronger, more resilient venture ecosystem capable of scaling faster and more cost-effectively.',
  },
  {
    title: 'Speed to Market',
    desc: 'Pre-built launch frameworks cut time from validated idea to first revenue.',
    detail:
      'Our pre-built launch frameworks help founders and businesses move from a validated idea to their first paying customers significantly faster. Instead of spending months building processes, systems, and go-to-market strategies from scratch, we provide proven structures that are ready to deploy. This reduces execution delays, minimizes costly trial-and-error, and allows teams to focus on product development and customer acquisition. From market positioning and sales funnels to operational workflows and growth playbooks, every component is designed to accelerate launch readiness. By leveraging frameworks tested across multiple business scenarios, companies can reach revenue-generating milestones with greater confidence and efficiency. The result is a faster, more predictable path from concept to commercial success.',
  },
  {
    title: 'Founder-Operator Model',
    desc: 'Lean. Each venture led by operators with capital efficiency baked in.',
    detail:
      'Every venture is led by hands-on operators who combine strategic leadership with day-to-day execution. Rather than building large teams and complex structures early, we prioritize lean operations that maximize output while maintaining strict capital discipline. From the outset, resources are allocated efficiently, ensuring that every investment directly contributes to growth, customer value, or operational improvement. This approach encourages rapid decision-making, accountability, and a deep understanding of the business at every level. By keeping teams agile and focused, ventures can adapt quickly to market opportunities while minimizing unnecessary overhead. Capital efficiency is embedded into the company’s DNA from day one, creating a strong foundation for sustainable growth and long-term value creation.',
  },
  {
    title: 'India-First by Design',
    desc: 'GST compliance, regional distribution, and deep buyer understanding.',
    detail:
      'Our ventures are built specifically for the realities and opportunities of the Indian market. From GST compliance and regulatory requirements to regional distribution networks and local business practices, every aspect of the operating model is designed with India in mind. We leverage a deep understanding of both B2B and D2C buyer behavior, enabling products and services to align closely with customer expectations across diverse markets. By recognizing regional preferences, purchasing patterns, and channel dynamics, we create solutions that are practical, scalable, and market-ready. This localized approach helps reduce execution risk, improve customer adoption, and accelerate growth. Rather than adapting global models to fit India, we design businesses from the ground up to succeed within India’s unique economic, cultural, and commercial landscape. The result is stronger market relevance, faster traction, and sustainable long-term growth.',
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

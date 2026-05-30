'use client';
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ParticleField } from './three/ParticleField';

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headlineRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .fromTo(btnsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
  }, []);

  const stats = [
    { num: 'B2B+', label: 'D2C Ventures' },
    { num: 'Platform', label: 'First Approach' },
    { num: 'Pune', label: 'India HQ — 2026' },
    { num: '3+', label: 'Ventures In Build' },
  ];

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      
      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
          <ParticleField count={2500} />
        </Canvas>
      </div>

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,86,219,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '120px 48px 80px', maxWidth: 1200, width: '100%' }}>
        
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1A56DB', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'block', width: 28, height: 2, background: '#1A56DB', borderRadius: 1 }} />
          Platform-First Venture Engine — Pune, 2026
        </div>

        <h1 ref={headlineRef} className="font-syne" style={{ fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.04em', color: '#F0F4FF', maxWidth: 740, marginBottom: 24, opacity: 0 }}>
          One snap.<br />
          <span style={{ color: '#1A56DB' }}>Infinite</span> potential.
        </h1>

        <p ref={subRef} style={{ fontSize: 16, fontWeight: 300, color: '#64748B', maxWidth: 560, lineHeight: 1.8, marginBottom: 40, opacity: 0 }}>
          OneClick Ventures identifies market opportunities, builds businesses from the ground up, and gives every brand we launch the infrastructure, systems, and market access to scale fast — across B2B and D2C sectors simultaneously.
        </p>

        <div ref={btnsRef} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 80, opacity: 0 }}>
          <button
            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: '#1A56DB', color: '#fff', fontSize: 13, fontWeight: 600, padding: '14px 32px', borderRadius: 4, border: 'none', cursor: 'pointer', letterSpacing: '0.02em' }}>
            See What We Build
          </button>
          <button
            onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'transparent', color: '#F0F4FF', fontSize: 13, fontWeight: 500, padding: '14px 32px', borderRadius: 4, border: '1px solid rgba(147,197,253,0.25)', cursor: 'pointer' }}>
            How We Work
          </button>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(147,197,253,0.1)', paddingTop: 44, opacity: 0 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ paddingRight: 28, ...(i > 0 ? { borderLeft: '1px solid rgba(147,197,253,0.1)', paddingLeft: 28 } : {}) }}>
              <div className="font-syne" style={{ fontSize: i === 1 || i === 2 ? 26 : 38, fontWeight: 800, color: i === 1 ? '#1A56DB' : '#F0F4FF', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(transparent, #050B18)', pointerEvents: 'none', zIndex: 2 }} />
    </section>
  );
}

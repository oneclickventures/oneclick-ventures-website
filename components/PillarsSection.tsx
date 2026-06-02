'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobeScene } from './three/GlobeScene';
import { NetworkScene } from './three/NetworkScene';
import { PlatformScene } from './three/PlatformScene';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: '01',
    tag: 'EXPLORE',
    title: 'Explore',
    desc: 'We scan markets before they become obvious. Primary research, ground-level validation, and pattern recognition across B2B and consumer sectors — finding gaps others overlook before capital rushes in.',
    scene: 'globe',
  },
  {
    num: '02',
    tag: 'ENGAGE',
    title: 'Engage',
    desc: 'Strategy without market pull is theory. We get brands in front of the right buyers, activate distribution channels, and build early traction that turns validated ideas into operating businesses with real revenue.',
    scene: 'network',
  },
  {
    num: '03',
    tag: 'ENABLE',
    title: 'Enable',
    desc: 'Every venture in our portfolio runs on shared infrastructure — technology, compliance, finance, and GTM frameworks. Built once, hardened over time, and deployed across every brand we launch.',
    scene: 'platform',
  },
];

function SceneRenderer({ scene }: { scene: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      {scene === 'globe' && <GlobeScene />}
      {scene === 'network' && <NetworkScene />}
      {scene === 'platform' && <PlatformScene />}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}

export function PillarsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.15,
        }
      );
    });

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="pillars" ref={sectionRef} style={{ padding: '96px 48px', background: '#050B18', borderTop: '1px solid rgba(147,197,253,0.06)' }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#475569', marginBottom: 10 }}>
          Our Foundation
        </div>
        <h2 className="font-syne" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#F0F4FF', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: 500 }}>
          Everything we do runs on three principles.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 2, background: 'rgba(147,197,253,0.06)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(147,197,253,0.06)' }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            ref={el => { if (el) cardsRef.current[i] = el; }}
            style={{ background: '#050B18', padding: '36px 28px 32px', position: 'relative', opacity: 0 }}
          >
            {/* 3D Scene */}
            {!isMobile && (
              <div style={{ width: '100%', height: 200, marginBottom: 24 }}>
                <SceneRenderer scene={p.scene} />
              </div>
            )}
            {/* Mobile: show icon instead */}
            {isMobile && (
              <div style={{ width: 48, height: 48, background: 'rgba(26,86,219,0.15)', borderRadius: 8, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#1A56DB', fontSize: 20, fontWeight: 800 }}>{p.num}</span>
              </div>
            )}

            <div style={{ fontSize: 10, fontWeight: 700, color: '#C4967A', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>
              {p.num} / {p.tag}
            </div>
            <h3 className="font-syne" style={{ fontSize: 24, fontWeight: 800, color: '#F0F4FF', marginBottom: 12 }}>
              {p.title}
            </h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#64748B', lineHeight: 1.75 }}>
              {p.desc}
            </p>
            {/* Blue bottom bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#C4967A', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scaleX(1)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scaleX(0)')}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

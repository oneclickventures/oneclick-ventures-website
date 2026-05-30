'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,11,24,0.92)] backdrop-blur-md border-b border-[rgba(147,197,253,0.1)]'
            : 'bg-transparent'
        }`}
        style={{ height: 68 }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="OneClick Ventures"
            width={36}
            height={36}
            style={{ borderRadius: 6 }}
            className="shrink-0"
          />
          <span
            className="font-syne truncate"
            style={{ fontSize: 16, fontWeight: 800, color: '#F0F4FF', letterSpacing: '-0.02em' }}
          >
            One<span style={{ color: '#1A56DB' }}>Click</span> Ventures
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['pillars', 'why', 'how', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ fontSize: 13, color: '#64748B', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
              className="hover:text-white transition-colors"
            >
              {id === 'pillars' ? 'What We Do' : id === 'why' ? 'Our Approach' : id === 'how' ? 'How We Work' : 'Contact'}
            </button>
          ))}
          <Link href="/blog" style={{ fontSize: 13, color: '#64748B' }} className="hover:text-white transition-colors">
            Blog
          </Link>
          <button
            onClick={() => scrollTo('contact')}
            style={{ fontSize: 12, fontWeight: 600, padding: '9px 22px', background: '#1A56DB', color: '#fff', borderRadius: 4, border: 'none', cursor: 'pointer' }}
          >
            Partner With Us
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 rounded-sm transition-transform duration-200"
              style={{
                background: '#F0F4FF',
                transform:
                  menuOpen && i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2
                      ? 'translateY(-7px) rotate(-45deg)'
                      : menuOpen && i === 1
                        ? 'opacity-0'
                        : undefined,
              }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-30 bg-black/40"
            style={{ top: 68 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div
            className="md:hidden fixed z-40 left-0 right-0 overflow-y-auto"
            style={{
              top: 68,
              maxHeight: 'calc(100dvh - 68px)',
              background: '#0A1628',
              borderBottom: '1px solid rgba(147,197,253,0.1)',
              padding: '24px 24px 32px',
            }}
          >
            <div className="flex flex-col gap-1">
              {['pillars', 'why', 'how', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left py-4 min-h-[48px]"
                  style={{
                    fontSize: 15,
                    color: '#F0F4FF',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderBottom: '1px solid rgba(147,197,253,0.08)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {id === 'pillars' ? 'What We Do' : id === 'why' ? 'Our Approach' : id === 'how' ? 'How We Work' : 'Contact'}
                </button>
              ))}
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="py-4 min-h-[48px] flex items-center"
                style={{ fontSize: 15, color: '#F0F4FF', borderBottom: '1px solid rgba(147,197,253,0.08)' }}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollTo('contact')}
                className="mt-4 w-full min-h-[48px]"
                style={{ fontSize: 13, fontWeight: 600, padding: '14px', background: '#1A56DB', color: '#fff', borderRadius: 4, border: 'none', cursor: 'pointer' }}
              >
                Partner With Us
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

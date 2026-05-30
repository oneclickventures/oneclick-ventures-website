'use client';
import dynamic from 'next/dynamic';
import { useLenis } from '@/lib/useLenis';
import { Navbar } from '@/components/Navbar';
import { WhySection } from '@/components/WhySection';
import { HowSection } from '@/components/HowSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WaFloat } from '@/components/WaFloat';

const Hero = dynamic(
  () => import('@/components/Hero').then((m) => m.Hero),
  { ssr: false }
);
const PillarsSection = dynamic(
  () => import('@/components/PillarsSection').then((m) => m.PillarsSection),
  { ssr: false }
);

export default function Home() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PillarsSection />
        <WhySection />
        <HowSection />
        <ContactSection />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}

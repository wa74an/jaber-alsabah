'use client';
import { useEffect } from 'react';
import Cursor from '../components/Cursor';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Results from '../components/Results';
import Gallery from '../components/Gallery';
import Video from '../components/Video';
import Footer from '../components/Footer';

export default function Page() {
  useEffect(() => {
    let lenis;
    let raf;
    (async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const tick = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    })();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Results />
      <Gallery />
      <Video />
      <Footer />
    </main>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/content';

const spanClass = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
};

export default function Gallery() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const gsapMod = (await import('gsap')).default;
      const ST = (await import('gsap/ScrollTrigger')).ScrollTrigger;
      gsapMod.registerPlugin(ST);

      ctx = gsapMod.context(() => {
        itemsRef.current.forEach((el) => {
          if (!el) return;
          const img = el.querySelector('img');
          gsapMod.fromTo(
            img,
            { y: -30 },
            {
              y: 30,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
      }, sectionRef);
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-20 md:py-44 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
          <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
            03 — Gallery
          </span>
        </motion.div>

        <h2
          className="font-display leading-[0.9] mb-16 md:mb-24"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          ON / <span style={{ color: 'var(--pink)' }}>TRACK</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 md:[grid-auto-rows:260px] [grid-auto-rows:180px]">
          {gallery.map((g, i) => (
            <motion.button
              key={g.src}
              ref={(el) => (itemsRef.current[i] = el)}
              data-hover
              onClick={() => setOpen(g)}
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group overflow-hidden ${spanClass[g.span]}`}
              style={{ height: g.span === 'tall' ? '100%' : '100%' }}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: 'inset 0 0 80px rgba(30,79,194,0.6)',
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9998] flex items-center justify-center p-6 md:p-12"
            style={{ background: 'rgba(6,13,31,0.95)', backdropFilter: 'blur(8px)' }}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={open.src}
              alt={open.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

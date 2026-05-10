'use client';
import { motion } from 'framer-motion';
import { driver } from '../data/content';

export default function Video() {
  return (
    <section
      id="video"
      className="relative py-20 md:py-44 overflow-hidden"
      style={{ background: 'var(--blue-mid)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
          <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
            04 — Latest
          </span>
        </motion.div>

        <h2
          className="font-display leading-[0.9] mb-16 md:mb-20 text-center"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          ON / <span style={{ color: 'var(--pink)' }}>CAM</span>
        </h2>

        <motion.a
          href={driver.highlightVideo}
          target="_blank"
          rel="noreferrer"
          data-hover
          initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="block relative max-w-3xl mx-auto group"
        >
          <div
            className="relative aspect-video overflow-hidden border"
            style={{
              borderColor: 'var(--pink)',
              background: 'var(--blue-deep)',
            }}
          >
            <img
              src="/images/racing.jpg"
              alt="Highlight reel"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--pink)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="font-display tracking-wide text-2xl md:text-3xl">
                  Watch on Instagram
                </div>
                <div className="font-mono-label mt-2" style={{ color: 'var(--grey-light)' }}>
                  {driver.instagramHandle}
                </div>
              </div>
            </div>
          </div>
          <p
            className="font-mono-label text-center mt-6"
            style={{ color: 'var(--grey-steel)' }}
          >
            Donington Park · Race Weekend · 2026
          </p>
        </motion.a>
      </div>
    </section>
  );
}

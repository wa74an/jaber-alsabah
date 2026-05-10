'use client';
import { motion } from 'framer-motion';
import { results } from '../data/content';

const wipe = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
  visible: (i) => ({
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Results() {
  return (
    <section
      id="results"
      className="relative py-20 md:py-44 overflow-hidden"
      style={{ background: 'var(--blue-mid)' }}
    >
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-display pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: 'clamp(12rem, 28vw, 32rem)',
          color: 'var(--pink)',
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        RESULTS
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
          <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
            02 — Race Results
          </span>
        </motion.div>

        <h2
          className="font-display leading-[0.9] mb-16 md:mb-24"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          2026 /{' '}
          <span style={{ color: 'var(--pink)' }}>SEASON</span>
        </h2>

        <div className="space-y-1">
          {results.map((r, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={wipe}
              data-hover
              className="group relative grid grid-cols-12 gap-3 md:gap-8 items-start md:items-center py-7 md:py-10 border-b transition-colors hover:bg-white/[0.02]"
              style={{
                borderColor: 'rgba(200,212,232,0.08)',
                borderLeft: r.highlight ? '3px solid var(--pink)' : '3px solid transparent',
                paddingLeft: r.highlight ? '1rem' : '0',
              }}
            >
              <div className="col-span-4 md:col-span-2">
                <div
                  className="font-display leading-none"
                  style={{
                    fontSize: 'clamp(2.75rem, 9vw, 5.5rem)',
                    color: r.highlight ? 'var(--pink)' : 'var(--white)',
                  }}
                >
                  {r.position}
                </div>
                <div
                  className="font-mono-label mt-2"
                  style={{ color: 'var(--grey-steel)', fontSize: '0.65rem' }}
                >
                  {r.label}
                </div>
              </div>

              <div className="col-span-8 md:col-span-8">
                <div
                  className="font-display tracking-wide mb-2"
                  style={{ fontSize: 'clamp(1.05rem, 2.5vw, 2rem)', fontWeight: 700 }}
                >
                  {r.event}
                </div>
                <div
                  className="leading-snug"
                  style={{ color: 'var(--grey-light)', fontSize: 'clamp(0.8rem, 1.6vw, 1rem)' }}
                >
                  {r.detail}
                </div>
                {r.badge && (
                  <span
                    className="md:hidden inline-block font-mono-label px-2.5 py-1 border mt-3"
                    style={{ borderColor: 'var(--pink)', color: 'var(--pink)', fontSize: '0.6rem' }}
                  >
                    {r.badge}
                  </span>
                )}
              </div>

              <div className="hidden md:flex col-span-2 justify-end">
                {r.badge && (
                  <span
                    className="font-mono-label px-3 py-1.5 border"
                    style={{ borderColor: 'var(--pink)', color: 'var(--pink)' }}
                  >
                    {r.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="font-mono-label text-right mt-10"
          style={{ color: 'var(--grey-steel)' }}
        >
          Season ongoing · More results to follow
        </p>
      </div>
    </section>
  );
}

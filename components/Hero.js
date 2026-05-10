'use client';
import { motion } from 'framer-motion';
import { driver, tagline } from '../data/content';

const charVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 + i * 0.04, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SplitText({ text, baseDelay = 0 }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split('').map((c, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            custom={i + baseDelay}
            variants={charVariants}
            initial="hidden"
            animate="visible"
          >
            {c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/images/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/ontrack.jpg"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,13,31,0.35) 0%, rgba(6,13,31,0.55) 70%, rgba(6,13,31,0.95) 100%)',
          }}
        />
      </div>

      {/* Giant 83 watermark */}
      <div
        aria-hidden
        className="absolute right-[-2vw] top-[6vh] font-display pointer-events-none select-none"
        style={{
          fontSize: 'clamp(20rem, 45vw, 50rem)',
          color: 'var(--pink)',
          opacity: 0.05,
          lineHeight: 0.85,
        }}
      >
        83
      </div>

      {/* Right edge pink line */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-px h-full"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, var(--pink) 35%, var(--pink) 65%, transparent 100%)',
        }}
      />

      <div className="relative h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
          <span className="font-mono-label text-grey-light" style={{ color: 'var(--grey-light)' }}>
            {driver.series} · {driver.team}
          </span>
        </motion.div>

        <h1
          className="font-display leading-[0.85] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 14vw, 16rem)' }}
        >
          <span className="block">
            <SplitText text={driver.firstName} />
          </span>
          <span className="block">
            <SplitText text={driver.lastName} baseDelay={driver.firstName.length} />
          </span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px w-full max-w-[600px] my-8"
          style={{ background: 'var(--pink)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-wrap items-center gap-5"
        >
          <p className="text-base md:text-lg max-w-xl" style={{ color: 'var(--grey-light)' }}>
            {tagline}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-10 right-6 md:right-12 flex-col items-center gap-3"
      >
        <span
          className="font-mono-label"
          style={{
            writingMode: 'vertical-rl',
            color: 'var(--grey-steel)',
          }}
        >
          Scroll
        </span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-16"
          style={{
            background: 'linear-gradient(180deg, var(--pink) 0%, transparent 100%)',
          }}
        />
      </motion.div>
    </section>
  );
}

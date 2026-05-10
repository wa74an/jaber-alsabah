'use client';
import { motion } from 'framer-motion';
import { management } from '../data/content';

export default function Partner() {
  return (
    <section
      id="partner"
      className="relative py-20 md:py-44 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
          <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
            05 — Partnership
          </span>
          <span className="block w-10 h-px" style={{ background: 'var(--pink)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display leading-[0.9] mb-8"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
        >
          PARTNER /{' '}
          <span style={{ color: 'var(--pink)' }}>WITH ME</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto text-base md:text-lg mb-12"
          style={{ color: 'var(--grey-light)' }}
        >
          Open to commercial partnerships, sponsorship, and brand collaborations across the 2026 season and beyond.
        </motion.p>

        <motion.a
          href={`mailto:${management.contact}?subject=Partnership%20Enquiry%20—%20Jaber%20AlSabah`}
          data-hover
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="inline-block font-mono-label px-8 py-4 border transition-all duration-300 hover:bg-[#E8005A] hover:border-[#E8005A] hover:text-white"
          style={{ borderColor: 'var(--pink)', color: 'var(--pink)' }}
        >
          Get in touch
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-20">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              data-hover
              className="group h-32 flex items-center justify-center border transition-all duration-500 hover:border-[#E8005A]"
              style={{
                borderColor: 'rgba(30,79,194,0.3)',
                background: 'rgba(14,30,69,0.3)',
              }}
            >
              <span
                className="font-mono-label transition-colors group-hover:text-[#E8005A]"
                style={{ color: 'var(--grey-steel)' }}
              >
                Your Brand Here
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

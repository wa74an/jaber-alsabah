'use client';
import { motion } from 'framer-motion';
import { bio, tags, stats, driver } from '../data/content';

const wipe = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-44 overflow-hidden">
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
            01 — Driver Profile
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={wipe}
              className="font-display leading-[0.9] mb-10"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
            >
              THE
              <br />
              <span style={{ color: 'var(--pink)' }}>DRIVER</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--grey-light)' }}
            >
              {bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono-label px-3 py-1.5 border"
                  style={{ borderColor: 'rgba(200,212,232,0.2)', color: 'var(--grey-light)' }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={wipe}
            className="relative"
          >
            <img
              src="/images/garage.jpg"
              alt="Jaber AlSabah in garage"
              className="w-full h-[55vh] md:h-[80vh] object-cover"
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: '2px solid var(--pink)', zIndex: -1 }}
            />
            <div
              className="absolute top-4 left-4 font-mono-label px-3 py-1.5"
              style={{ background: 'rgba(6,13,31,0.7)', color: 'var(--pink)' }}
            >
              {driver.monogram} · #{driver.carNumber}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 border-t border-b"
          style={{ borderColor: 'rgba(200,212,232,0.1)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`py-10 px-4 text-center ${
                i < stats.length - 1 ? 'md:border-r' : ''
              } ${i % 2 === 0 ? 'border-r md:border-r' : ''} ${
                i < 2 ? 'border-b md:border-b-0' : ''
              }`}
              style={{ borderColor: 'rgba(200,212,232,0.1)' }}
            >
              <div
                className="font-display"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div
                className="font-mono-label mt-3"
                style={{ color: 'var(--grey-steel)' }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

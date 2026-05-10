'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { driver } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#partner', label: 'Partner' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'backdrop-blur-md bg-[#060D1F]/80 border-b border-[#E8005A]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-4 md:py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" data-hover>
            <span className="font-display text-xl md:text-2xl tracking-wider">{driver.monogram}</span>
            <span className="font-mono-label" style={{ color: 'var(--pink)' }}>
              #{driver.carNumber}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-label hover:text-[#E8005A] transition-colors"
                data-hover
              >
                {l.label}
              </a>
            ))}
            <a
              href={driver.instagram}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="font-mono-label px-4 py-2 border border-[#E8005A] text-[#E8005A] hover:bg-[#E8005A] hover:text-white transition-all duration-300"
            >
              Follow
            </a>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end w-9 h-9 gap-[5px]"
          >
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '22px',
                background: 'var(--white)',
                transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '14px',
                background: 'var(--pink)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{
                width: '22px',
                background: 'var(--white)',
                transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-start justify-center gap-8 px-8"
            style={{ background: 'rgba(6,13,31,0.97)', backdropFilter: 'blur(12px)' }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="font-display tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 12vw, 4rem)' }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={driver.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="font-mono-label mt-4 px-5 py-3 border"
              style={{ borderColor: 'var(--pink)', color: 'var(--pink)' }}
            >
              Follow {driver.instagramHandle}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

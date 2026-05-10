'use client';
import { driver, management } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="h-px w-full" style={{ background: 'var(--pink)' }} />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center text-center md:text-left">
        <p className="font-mono-label" style={{ color: 'var(--grey-steel)' }}>
          © 2026 {driver.name}
        </p>

        <div className="flex justify-center">
          <a
            href={driver.instagram}
            target="_blank"
            rel="noreferrer"
            data-hover
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center border transition-colors hover:bg-[#E8005A] hover:border-[#E8005A]"
            style={{ borderColor: 'rgba(200,212,232,0.2)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
        </div>

        <a
          href={management.url}
          target="_blank"
          rel="noreferrer"
          data-hover
          className="flex items-center justify-center md:justify-end gap-2 hover:opacity-100 transition-opacity"
          style={{ color: 'var(--grey-steel)', opacity: 0.7 }}
        >
          <span className="font-mono-label">Built by</span>
          <img
            src="/images/beult.png"
            alt="Beult"
            className="h-4 w-auto object-contain"
          />
        </a>
      </div>
    </footer>
  );
}

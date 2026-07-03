import heroBg from "@/assets/hero-bg.png";
import { Reveal } from "../shared/Reveal";

export function HeroDesktop() {
  return (
    <div
      className="flex flex-col justify-between relative w-full h-[calc(100vh-80px)] min-h-[640px] bg-cover bg-no-repeat bg-[position:right_center]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Main area */}
      <div className="mx-auto w-full max-w-[1400px] px-8 md:px-14 flex-1 flex flex-col justify-center pt-24 pb-8">
        <Reveal className="w-full max-w-[580px] lg:max-w-[660px] z-10 flex flex-col items-start">
          {/* Title: PORTFOLIO with star inside first O */}
          <h1 className="font-[family-name:var(--font-display)] font-semibold text-7xl lg:text-[110px] xl:text-[124px] text-[color:var(--color-dark-brown)] leading-[0.88] tracking-[-0.04em] select-none uppercase w-full">
            P
            <span className="relative inline-block">
              O
              <span className="absolute inset-0 flex items-center justify-center text-[0.55em] text-[color:var(--color-rose-gold)] translate-y-[-4%] font-normal">✦</span>
            </span>
            RTFOLIO
          </h1>

          {/* Ornament Line */}
          <div className="relative my-5 flex items-center gap-2 w-full">
            <div className="h-px bg-[color:var(--color-rose-gold)]/45 w-4" />
            <div className="h-px flex-1 bg-[color:var(--color-rose-gold)]/45" />
            <svg width="28" height="12" viewBox="0 0 28 12" className="text-[color:var(--color-rose-gold)] shrink-0">
              <path d="M14 2 L19 6 L14 10 L9 6 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="20" y1="6" x2="28" y2="6" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <div className="h-px flex-1 bg-[color:var(--color-rose-gold)]/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D02323] shrink-0 ml-1" />
          </div>

          {/* Sub-tagline */}
          <p className="tracking-[0.28em] text-[12px] lg:text-[13px] text-[color:var(--color-accent-brown)] font-medium leading-relaxed">
            Preserving memories through art.<br />Self taught resin artist
          </p>

          {/* Description quote */}
          <blockquote className="mt-6 border-l border-[color:var(--color-rose-gold)] pl-6 py-1 max-w-[460px] text-left">
            <p className="text-[15px] lg:text-[16px] leading-[1.85] font-light text-[color:var(--color-chocolate)]">
              I create timeless resin art and customized gifts that preserve
              your special moments with elegance and creativity.
            </p>
          </blockquote>

          {/* Signature */}
          <div className="mt-8 text-left">
            <p className="script text-5xl lg:text-6xl text-[color:var(--color-accent-brown)]">Sachida Sharma</p>
            <p className="mt-2 tracking-[0.28em] uppercase text-[10px] lg:text-[11px] text-[color:var(--color-accent-brown)] font-semibold">
              Founder of Sachida Artistry
            </p>
          </div>
        </Reveal>
      </div>

      {/* Bottom dark bar */}
      <div className="w-full bg-[color:var(--color-chocolate)] py-3 text-center text-[10px] md:text-[11px] tracking-[0.36em] uppercase text-[color:var(--color-rose-gold)]">
        ✦  Handcrafted with Love  ✦
      </div>
    </div>
  );
}

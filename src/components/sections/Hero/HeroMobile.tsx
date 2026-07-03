import heroBg from "@/assets/hero-bg.png";
import { Reveal } from "../shared/Reveal";

export function HeroMobile() {
  return (
    <div className="flex flex-col w-full">
      {/* Arch image container showing the right portion of the heroBg */}
      <div
        className="w-full h-[280px] sm:h-[340px] bg-cover bg-no-repeat bg-[position:82%_center]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content container stacked below */}
      <div className="px-5 sm:px-6 py-8 sm:py-10 bg-[color:var(--color-cream)] border-t border-[color:var(--color-border)]">
        <Reveal className="flex flex-col gap-3 sm:gap-4">

          <h1 className="font-[family-name:var(--font-display)] text-[2.75rem] sm:text-5xl text-[color:var(--color-dark-brown)] leading-[0.95] uppercase">
            P
            <span className="relative inline-block">
              O
              <span className="absolute inset-0 flex items-center justify-center text-[0.45em] text-[color:var(--color-rose-gold)] translate-y-[-2%]">✦</span>
            </span>
            RTFOLIO
          </h1>

          {/* Ornament Line */}
          <div className="relative my-1 sm:my-2 flex items-center gap-2 sm:gap-3 max-w-[280px]">
            <div className="h-px flex-1 bg-[color:var(--color-rose-gold)]/45" />
            <svg width="24" height="12" viewBox="0 0 24 12" className="text-[color:var(--color-rose-gold)] shrink-0">
              <path d="M12 2 L17 6 L12 10 L7 6 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <line x1="0" y1="6" x2="6" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="18" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <div className="h-px flex-1 bg-[color:var(--color-rose-gold)]/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-red-700 shrink-0" />
          </div>

          <p className="tracking-[0.20em] sm:tracking-[0.24em] uppercase text-[10px] sm:text-[11px] text-[color:var(--color-accent-brown)] font-medium">
            Preserving memories through art.
            Self taught resin artist
          </p>

          <blockquote className="border-l-2 border-[color:var(--color-rose-gold)] pl-3 sm:pl-4 my-1 sm:my-2">
            <p className="text-[13.5px] sm:text-[14px] leading-[1.65] sm:leading-[1.7] font-light text-[color:var(--color-chocolate)]">
              I create timeless resin art and customized gifts that preserve
              your special moments with elegance and creativity.
            </p>
          </blockquote>

          <div className="mt-1 sm:mt-2">
            <p className="script text-[2.25rem] sm:text-4xl text-[color:var(--color-accent-brown)]">Sachida Sharma</p>
            <p className="mt-1 tracking-[0.20em] sm:tracking-[0.24em] uppercase text-[9px] sm:text-[10px] text-[color:var(--color-accent-brown)] font-semibold">
              Founder of Sachida Artistry
            </p>
          </div>
        </Reveal>
      </div>

      {/* Bottom dark bar */}
      <div className="w-full bg-[color:var(--color-chocolate)] py-2.5 sm:py-3 text-center text-[9px] sm:text-[10px] tracking-[0.26em] sm:tracking-[0.3em] uppercase text-[color:var(--color-rose-gold)]">
        ✦  Handcrafted with Love  ✦
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import portraitHero from "@/assets/dc30023a-9d90-43ac-a980-590523d4679d.png";
import heroBg from "@/assets/hero-bg.png";
import portraitAbout from "@/assets/portrait-about.png";
import engagementPlatter from "@/assets/engagementplatter1.jpeg";
import resinFrame from "@/assets/section4(3).jpeg";
import trousseau from "@/assets/section4(5).jpeg";
import weddingCards from "@/assets/Weddingcard1.jpeg";
import returnGifts from "@/assets/Journey1.jpeg";
import processImg from "@/assets/process.jpg";
import homeDecorClock from "@/assets/section10.jpeg";
import nameplate from "@/assets/sectiion4(1).jpeg";
import logo from "@/assets/logo.png";
import aboutTheArt from "@/assets/abouttheart.jpeg";
import engagementPlatter1 from "@/assets/engagementplatter1.jpeg";
import instaQr from "@/assets/instagramqr.jpeg";
import journey1 from "@/assets/Journey1.jpeg";
import journey2 from "@/assets/journey2.jpeg";
import journey3 from "@/assets/journey3.jpeg";
import journey4 from "@/assets/journey4.png";
import journey5 from "@/assets/journey5.jpeg";
import journey6 from "@/assets/journey6.png";
import journey7 from "@/assets/journey7.jpeg";
import sec4_1 from "@/assets/sectiion4(1).jpeg";
import sec4_2 from "@/assets/section4(2).jpeg";
import sec4_3 from "@/assets/section4(3).jpeg";
import sec4_5 from "@/assets/section4(5).jpeg";
import varmalaPreservation from "@/assets/varnmalapreservation.png";
import section10Img from "@/assets/section10.jpeg";
import sec14 from "@/assets/section14.jpeg";
import sec14_2 from "@/assets/section14 (2).jpeg";
import weddingCardMain from "@/assets/weddingcardmain.jpeg";
import engagementPlatter2 from "@/assets/engagementplatter2.jpeg";
import engagementPlatter3 from "@/assets/engagementplatter3.jpeg";
import homeDecor1 from "@/assets/homedecor1.jpeg";
import weddingCard3 from "@/assets/weddingcard3.jpeg";
import whatsapp1 from "@/assets/WhatsApp Image 2026-07-02 at 11.20.16 (2).jpeg";
import sec14_3 from "@/assets/section14 (3).jpeg";
import sec14_4 from "@/assets/section14 (4).jpeg";
import bulkOrderImg from "@/assets/bulkorder.png";
import contactImage from "@/assets/contactimage.jpeg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ─────────── shared editorial atoms ─────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[color:var(--color-accent-brown)] tracking-eyebrow">
      <span className="h-px w-8 bg-[color:var(--color-rose-gold)]" />
      <span>{children}</span>
    </div>
  );
}

function PageNumber({ n }: { n: string }) {
  return (
    <div className="font-[family-name:var(--font-display)] text-sm tracking-widest text-[color:var(--color-accent-brown)]">
      — {n} —
    </div>
  );
}

function SectionHeader({
  n,
  eyebrow,
  title,
}: {
  n: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-14 flex flex-col items-center text-center gap-3 sm:gap-4 px-4">
      <PageNumber n={n} />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.05] text-[color:var(--color-dark-brown)] max-w-4xl">
        {title}
      </h2>
      <Ornament />
    </div>
  );
}

function Ornament() {
  return (
    <svg width="120" height="14" viewBox="0 0 120 14" className="text-[color:var(--color-rose-gold)]">
      <line x1="0" y1="7" x2="50" y2="7" stroke="currentColor" strokeWidth="0.6" />
      <line x1="70" y1="7" x2="120" y2="7" stroke="currentColor" strokeWidth="0.6" />
      <path d="M60 1 L62 7 L60 13 L58 7 Z" fill="currentColor" />
    </svg>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true));
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1200ms] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────── page ─────────── */

function Portfolio() {
  return (
    <main className="bg-[color:var(--color-cream)] text-[color:var(--color-ink)] overflow-x-clip">
      <Nav />
      <Cover />
      <About />
      <Journey />
      <ArtForms />
      <MyStory />
      <WhyHandmade />
      <Signature />
      <VarmalaPreservation />
      <WeddingCards />
      <HomeDecorClocks />
      <BulkOrders />
      <Process />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

/* ─────────── nav ─────────── */

function Nav() {
  const items = [
    ["01", "About", "#about"],
    ["02", "Journey", "#journey"],
    ["03", "Work", "#work"],
    ["04", "Story", "#story"],
    ["05", "Process", "#process"],
    ["06", "Contact", "#contact"],
  ] as const;
  
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    // Small delay to allow sheet to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--color-cream)]/85 border-b border-[color:var(--color-border)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 py-1.5 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="Sachida Artistry logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
          <span className="lg:hidden script text-[color:var(--color-accent-brown)] text-xl sm:text-2xl">
            sachidaartistry
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {items.map(([, label, href]) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase text-[color:var(--color-accent-brown)] hover:text-[color:var(--color-dark-brown)] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-[color:var(--color-dark-brown)] hover:text-[color:var(--color-accent-brown)] transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] sm:w-[320px] bg-[color:var(--color-cream)] border-l border-[color:var(--color-border)]"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <img
                  src={logo}
                  alt="Sachida Artistry"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {items.map(([num, label, href]) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="text-left py-4 px-4 rounded-sm hover:bg-[color:var(--color-cream-2)] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[color:var(--color-rose-gold)] font-[family-name:var(--font-display)] text-lg">
                        {num}
                      </span>
                      <span className="text-[color:var(--color-dark-brown)] tracking-[0.18em] uppercase text-[13px] group-hover:text-[color:var(--color-accent-brown)] transition-colors">
                        {label}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Footer - Social Links */}
              <div className="mt-auto pt-8 border-t border-[color:var(--color-border)]">
                <div className="space-y-3">
                  <a
                    href="https://www.instagram.com/sachidaartistry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[color:var(--color-accent-brown)] hover:text-[color:var(--color-dark-brown)] transition-colors"
                  >
                    @sachidaartistry
                  </a>
                  <a
                    href="https://wa.me/919541887431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[color:var(--color-accent-brown)] hover:text-[color:var(--color-dark-brown)] transition-colors"
                  >
                    +91 95418 87431
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/* ─────────── 01 cover ─────────── */

function Cover() {
  return (
    <section
      id="top"
      className="relative flex flex-col bg-[color:var(--color-cream)] overflow-hidden"
    >
      {/* Desktop Layout (md and up) */}
      <div
        className="hidden md:flex flex-col justify-between relative w-full h-[calc(100vh-80px)] min-h-[640px] bg-cover bg-no-repeat bg-[position:right_center]"
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
            <p className="tracking-[0.32em] uppercase text-[12px] lg:text-[13px] text-[color:var(--color-accent-brown)] font-medium">
              Preserving Moments in Resin
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

      {/* Mobile Layout (below md) */}
      <div className="md:hidden flex flex-col w-full">
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
              Full Time Artist &amp; Part Time Doctor
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
    </section>
  );
}

function FloralRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 220" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      <path d="M80 210 C80 165, 95 130, 88 90 C83 55, 108 22, 98 6" />
      <circle cx="98" cy="6" r="13" strokeWidth="0.7" />
      <path d="M88 18 C68 36, 58 62, 73 78" />
      <path d="M108 18 C128 36, 138 62, 123 78" />
      <path d="M84 90 C62 105, 52 128, 67 143" />
      <path d="M93 90 C115 105, 125 128, 110 143" />
      <circle cx="67" cy="145" r="8" strokeWidth="0.7" />
      <circle cx="112" cy="145" r="8" strokeWidth="0.7" />
      <circle cx="73" cy="188" r="6" strokeWidth="0.7" />
      <path d="M83 118 C58 108, 42 122, 52 138" />
      <path d="M91 150 C118 143, 133 158, 122 174" />
    </svg>
  );
}

function Botanicals({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M50 10 C 50 60, 30 110, 50 190" />
      <path d="M50 40 C 70 45, 78 55, 82 70" />
      <path d="M50 70 C 30 75, 22 85, 18 100" />
      <path d="M50 105 C 72 112, 80 125, 84 140" />
      <circle cx="82" cy="70" r="4" />
      <circle cx="18" cy="100" r="4" />
      <circle cx="84" cy="140" r="4" />
      <circle cx="50" cy="190" r="3" />
    </svg>
  );
}

/* ─────────── 02 about ─────────── */

function About() {
  return (
    <section id="about" className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="absolute -inset-3 sm:-inset-4 border border-[color:var(--color-rose-gold)]/40" />
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={contactImage}
                  alt="Sachida in her studio"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="col-span-12 md:col-span-7 md:pl-10">
            <Eyebrow>About the Artist</Eyebrow>
            <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl text-[color:var(--color-dark-brown)] leading-[1.05]">
              Hi, I&rsquo;m <span className="script text-[color:var(--color-accent-brown)] text-[2.75rem] sm:text-6xl md:text-7xl">Sachida</span>
            </h2>
            <p className="mt-6 sm:mt-8 max-w-xl text-[14px] sm:text-[15px] leading-[1.75] sm:leading-8 font-light text-[color:var(--color-chocolate)]">
              I&rsquo;m Sachida Sharma — a doctor by profession and an artist by heart.
              My journey as an artist began in 2020 during the COVID lockdown, when I
              discovered a creative side of myself I had never explored before. What
              started as curiosity soon turned into passion. Like every creative journey,
              mine was filled with experiments, challenges, and countless learning experiences.
            </p>
            <p className="mt-4 sm:mt-6 max-w-xl text-[14px] sm:text-[15px] leading-[1.75] sm:leading-8 font-light text-[color:var(--color-chocolate)]">
              I explored different art forms before discovering resin art — the medium
              that truly felt like home. I began by creating resin photo frames, and as my
              skills evolved, I introduced engagement platters, which soon became my
              signature and best-selling creations.
            </p>
            <p className="mt-4 sm:mt-6 max-w-xl text-[14px] sm:text-[15px] leading-[1.75] sm:leading-8 font-light text-[color:var(--color-chocolate)]">
              Today, my work also includes varmala preservation, wedding cards, customized
              gifts and other keepsake pieces that transform precious moments into
              timeless memories.
            </p>

            <div className="mt-8 sm:mt-12 flex items-end gap-8">
              <div>

              </div>
              <div className="hidden md:block h-px flex-1 bg-[color:var(--color-rose-gold)]/60 mb-3" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 03 journey ─────────── */

const journey = [
  ["2020", "First Order", "Received my very first order — the moment everything began.", journey1],
  ["2021", "First Resin Frame", "Crafted my first pressed-flower resin frame with quiet perfection.", journey2],
  ["2022", "First Varmala Preservation", "Designed my first varmala preservation piece — a memory sealed forever.", journey3],
  ["2023", "First Platter", "Made my first resin engagement platter with dedication and creativity.", journey4],
  ["2024", "First Workshop", "Conducted my first workshop and shared my craft with kindred souls.", journey5],
  ["2025", "Best-Seller Platter", "Proudly created my best-selling platter, loved by so many.", journey6],
  ["Present", "Still Learning, Still Creating", "The art grows quietly — each piece a new lesson in patience.", journey7],
];

function Journey() {
  return (
    <section id="journey" className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <SectionHeader n="03" eyebrow="My Journey" title="A quiet, unfolding timeline" />

        {/* Desktop Layout (md and up) */}
        <div className="hidden md:block relative mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[color:var(--color-rose-gold)]/50" />
          <ul className="space-y-24">
            {journey.map(([year, title, text, img], i) => {
              const left = i % 2 === 0;
              return (
                <li key={year} className="grid grid-cols-9 items-center gap-10">
                  {/* Left Column */}
                  {left ? (
                    <Reveal className="col-span-4 text-right flex flex-col items-end gap-1">
                      <div className="font-[family-name:var(--font-display)] text-5xl text-[color:var(--color-dark-brown)]">
                        {year}
                      </div>
                      <div className="tracking-eyebrow text-[color:var(--color-accent-brown)] mt-1">
                        {title}
                      </div>
                      <p className="mt-3 text-[14px] leading-7 font-light text-[color:var(--color-chocolate)] max-w-sm">
                        {text}
                      </p>
                    </Reveal>
                  ) : (
                    <Reveal delay={80} className="col-span-4 flex justify-end">
                      <div className="relative overflow-hidden w-[80%] aspect-[3/2] rounded-[3px] border border-[color:var(--color-border)]/65 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] bg-[color:var(--color-beige)] group">
                        <img
                          src={img as string}
                          alt={title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        />
                      </div>
                    </Reveal>
                  )}

                  {/* Middle Dot */}
                  <div className="col-span-1 flex justify-center z-10">
                    <span className="h-3.5 w-3.5 rounded-full bg-[color:var(--color-rose-gold)] ring-4 ring-[color:var(--color-cream)] shadow-sm" />
                  </div>

                  {/* Right Column */}
                  {left ? (
                    <Reveal delay={80} className="col-span-4 flex justify-start">
                      <div className="relative overflow-hidden w-[80%] aspect-[3/2] rounded-[3px] border border-[color:var(--color-border)]/65 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] bg-[color:var(--color-beige)] group">
                        <img
                          src={img as string}
                          alt={title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                        />
                      </div>
                    </Reveal>
                  ) : (
                    <Reveal className="col-span-4 text-left flex flex-col items-start gap-1">
                      <div className="font-[family-name:var(--font-display)] text-5xl text-[color:var(--color-dark-brown)]">
                        {year}
                      </div>
                      <div className="tracking-eyebrow text-[color:var(--color-accent-brown)] mt-1">
                        {title}
                      </div>
                      <p className="mt-3 text-[14px] leading-7 font-light text-[color:var(--color-chocolate)] max-w-sm">
                        {text}
                      </p>
                    </Reveal>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="md:hidden relative mt-8 sm:mt-12 pl-5 sm:pl-6">
          {/* Vertical timeline line on the left */}
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-[color:var(--color-rose-gold)]/40" />

          <ul className="space-y-12 sm:space-y-16">
            {journey.map(([year, title, text, img]) => (
              <li key={year} className="relative flex flex-col gap-2 sm:gap-3">
                {/* Timeline dot */}
                <span className="absolute -left-[22px] top-2.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-rose-gold)] ring-4 ring-[color:var(--color-cream)]" />

                <Reveal className="flex flex-col gap-1">
                  <div className="font-[family-name:var(--font-display)] text-[2rem] sm:text-3xl text-[color:var(--color-dark-brown)] leading-none">
                    {year}
                  </div>
                  <div className="tracking-[0.20em] sm:tracking-[0.24em] uppercase text-[9px] sm:text-[10px] text-[color:var(--color-accent-brown)] mt-1">
                    {title}
                  </div>
                </Reveal>

                {/* Milestone Image */}
                <Reveal delay={60} className="w-full max-w-[340px] mt-2">
                  <div className="relative overflow-hidden aspect-[3/2] rounded-[3px] border border-[color:var(--color-border)]/60 shadow-sm bg-[color:var(--color-beige)]">
                    <img
                      src={img as string}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={100} className="max-w-[340px]">
                  <p className="text-[12.5px] sm:text-[13px] leading-[1.6] sm:leading-6 font-light text-[color:var(--color-chocolate)]">
                    {text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 04 art forms ─────────── */

const artForms = [
  { img: sec4_1, name: "Engagement Platters", cat: "Signature" },
  { img: sec4_2, name: "Varmala Preservation", cat: "Heirloom" },
  { img: sec4_3, name: "Resin Photo Frames", cat: "Keepsake" },
  { img: homeDecorClock, name: "Home Decor Clocks", cat: "Artistic" },
  { img: sec4_5, name: "Trousseau Packaging", cat: "Wedding" },
  { img: weddingCards, name: "Wedding Cards", cat: "Stationery" },
];

function ArtForms() {
  return (
    <section id="work" className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <SectionHeader n="04" eyebrow="My Art Forms" title="Small objects, kept for a long time" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {artForms.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <figure className="group">
                <div className="overflow-hidden bg-[color:var(--color-beige)]">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-6 text-center">
                  <div className="tracking-eyebrow text-[color:var(--color-rose-gold)]">
                    {f.cat}
                  </div>
                  <div className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-dark-brown)]">
                    {f.name}
                  </div>
                  <div className="mt-3 mx-auto h-px w-10 bg-[color:var(--color-rose-gold)]/70" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 text-center script text-3xl text-[color:var(--color-accent-brown)]">
          … and many more keepsakes made to hold a moment.
        </p>
      </div>
    </section>
  );
}

/* ─────────── 05 my story ─────────── */

function MyStory() {
  return (
    <section id="story" className="bg-[color:var(--color-chocolate)] text-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-6">
            <div className="text-[color:var(--color-rose-gold)] tracking-eyebrow">— 05 —</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-[family-name:var(--font-display)] leading-[1.05]">
              About <span className="script text-[color:var(--color-rose-gold)]">My Art</span>
            </h2>
            <p className="mt-8 max-w-lg text-[15px] leading-8 font-light text-[color:var(--color-cream)]/85">
              For me, art is more than creating something beautiful—it's about
              turning memories into treasures that can be cherished forever.
              Every piece is handcrafted with patience, love, and attention to detail.
              Even when I create the same design, no two pieces are ever truly alike.
              That's the beauty of handmade art—each creation carries its own character,
              its own story, and a little piece of my heart.
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-8 font-light text-[color:var(--color-cream)]/85">

              This portfolio is a reflection of my journey, my passion, and the memories
              I've been privileged to preserve through art.
            </p>

            <blockquote className="mt-12 border-l border-[color:var(--color-rose-gold)] pl-6">
              <p className="font-[family-name:var(--font-display)] italic text-xl md:text-2xl leading-relaxed text-[color:var(--color-cream)]/90">
                &ldquo;For me, art is more than making something beautiful — it&rsquo;s
                turning memories into treasures that can be kept forever.&rdquo;
              </p>
              <p className="mt-4 tracking-eyebrow text-[color:var(--color-rose-gold)]">— Sachida</p>
            </blockquote>
          </Reveal>

          <Reveal delay={150} className="col-span-12 md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 border border-[color:var(--color-rose-gold)]/40" />
              <img
                src={aboutTheArt}
                alt="About my art"
                loading="lazy"
                className="relative w-full aspect-square object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 06 why handmade ─────────── */

const values = [
  ["One of a kind", "Every piece is made just once — no two are ever truly alike."],
  ["Made with love", "Slow, patient work. Nothing rushed, nothing mass-produced."],
  ["High-quality materials", "Considered resins, real preserved flowers, archival finishes."],
  ["Timeless & elegant", "Designed to look beautiful decades from now."],
  ["Crafted to preserve", "Built to hold emotion, not just a moment."],
];

function WhyHandmade() {
  return (
    <section className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <PageNumber n="06" />
            <Eyebrow>Why Handmade</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              Even when I create the <span className="script text-[color:var(--color-accent-brown)]">same design</span>, no two pieces are ever alike.
            </h2>
            <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              That&rsquo;s the beauty of handmade. Small differences — a petal
              turned this way, a stem caught in the light — become the
              signature of the piece itself.
            </p>
          </Reveal>

          <Reveal delay={150} className="col-span-12 md:col-span-7 md:pl-10">
            <ul className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
              {values.map(([t, d], i) => (
                <li key={t} className="grid grid-cols-12 items-baseline gap-6 py-7">
                  <div className="col-span-2 font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-rose-gold)]">
                    0{i + 1}
                  </div>
                  <div className="col-span-4 font-[family-name:var(--font-display)] text-xl text-[color:var(--color-dark-brown)]">
                    {t}
                  </div>
                  <p className="col-span-6 text-[14px] leading-7 font-light text-[color:var(--color-chocolate)]">
                    {d}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 07 signature ─────────── */

function Signature() {
  return (
    <section className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-6">
            <img
              src={engagementPlatter1}
              alt="Signature engagement platter close up"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="col-span-12 md:col-span-6 md:pl-6">
            <PageNumber n="07" />
            <Eyebrow>Signature Collection</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              The <span className="script text-[color:var(--color-accent-brown)]">Engagement Platter</span>
            </h2>
            <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              A quiet centrepiece for the ring — pressed florals, gold leaf,
              and the couple&rsquo;s names set into clear resin. Made to be kept
              on a mantel long after the day has ended.
            </p>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 08 varmala preservation ─────────── */

function VarmalaPreservation() {
  return (
    <section className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-6 md:pr-6 flex flex-col justify-start">
            <PageNumber n="08" />
            <Eyebrow>Heirloom Collection</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              Varmala <span className="script text-[color:var(--color-accent-brown)]">Preservation</span>
            </h2>
            <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              Preserve the blooms from your special day forever. We take your wedding varmala,
              dry the flowers with care to lock in their natural colors, and suspend them in
              a custom, crystal-clear resin design to create a timeless keepsake.
            </p>
          </Reveal>
          <Reveal delay={150} className="col-span-12 md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 border border-[color:var(--color-rose-gold)]/40" />
              <img
                src={varmalaPreservation}
                alt="Varmala preservation resin art"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 09 wedding cards ─────────── */

function WeddingCards() {
  return (
    <section className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-6">
            <img
              src={weddingCards}
              alt="Bespoke wedding cards design"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="col-span-12 md:col-span-6 md:pl-6 flex flex-col justify-start">
            <PageNumber n="09" />
            <Eyebrow>Stationery Collection</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              Wedding <span className="script text-[color:var(--color-accent-brown)]">Cards</span>
            </h2>
            <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              Beautifully custom-designed stationery and invitations. Combining artistic
              illustrations with premium paper stock and elegant typography to set the
              perfect tone for your wedding.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 10 home decor clocks ─────────── */

function HomeDecorClocks() {
  return (
    <section className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-6 md:pr-6 flex flex-col justify-start">
            <PageNumber n="10" />
            <Eyebrow>Artistic Collection</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              Home Decor <span className="script text-[color:var(--color-accent-brown)]">Clocks</span>
            </h2>
            <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              A functional timepiece that doubles as a stunning work of art. Featuring
              preserved floral arrangements, delicate gold accents, and silent high-quality
              sweeps, all cast in a bespoke resin frame.
            </p>
          </Reveal>
          <Reveal delay={150} className="col-span-12 md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 border border-[color:var(--color-rose-gold)]/40" />
              <img
                src={section10Img}
                alt="Bespoke resin wall clock"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 11 bulk orders ─────────── */

const bulk = [
  "Corporate Gifts",
  "Wedding Gifts",
  "Event Gifting",
  "Return Gifts",
  "Custom Packaging",
  "Hospital Hampers",
  "Trousseau",
];

function BulkOrders() {
  return (
    <section className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-7">
            <img
              src={bulkOrderImg}
              alt="Bulk and wedding order collection"
              loading="lazy"
              className="w-full aspect-[5/4] object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="col-span-12 md:col-span-5 md:pl-4 flex flex-col justify-center">
            <PageNumber n="11" />
            <Eyebrow>Bulk & Wedding Orders</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
              We accept <span className="script text-[color:var(--color-accent-brown)]">bulk orders</span>
            </h2>
            <p className="mt-6 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
              For weddings, events and corporate gifting — carefully assembled
              in small runs, without losing the handmade feel.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {bulk.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-[14px] font-light text-[color:var(--color-chocolate)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[color:var(--color-rose-gold)]" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919541887431?text=Hello%20Sachida,%20I%20would%20like%20to%20enquire%20about%20bulk%20and%20wedding%20orders."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 self-start text-[12px] tracking-[0.24em] uppercase border border-[color:var(--color-dark-brown)] text-[color:var(--color-dark-brown)] px-6 py-3 hover:bg-[color:var(--color-dark-brown)] hover:text-[color:var(--color-cream)] transition-colors"
            >
              Enquire for Bulk
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 12 process ─────────── */

const steps = [
  ["Idea", "We begin with a conversation — the memory, the mood, the meaning."],
  ["Sketch", "Layout, proportion and floral placement decided by hand."],
  ["Material Selection", "Flowers preserved, pigments mixed, gold leaf chosen."],
  ["Flower Preservation", "Blooms dried slowly to keep colour and structure intact."],
  ["Resin Pouring", "Multiple thin layers, cured with patience over days."],
  ["Finishing", "Sanding, polishing, edging — the quiet part of the craft."],
  ["Packaging", "Wrapped in linen and tissue, boxed like a keepsake should be."],
  ["Delivery", "Hand-couriered to your door, ready to be kept."],
];

function Process() {
  return (
    <section id="process" className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <SectionHeader n="12" eyebrow="Creative Process" title="Eight quiet steps" />

        <div className="grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <img
              src={processImg}
              alt="Hands placing dried flowers into resin"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>

          <Reveal delay={150} className="col-span-12 md:col-span-7 md:pl-6">
            <ol className="relative border-l border-[color:var(--color-rose-gold)]/60">
              {steps.map(([t, d], i) => (
                <li key={t} className="pl-8 pb-10 last:pb-0 relative">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[color:var(--color-rose-gold)] ring-4 ring-[color:var(--color-cream-2)]" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-[family-name:var(--font-display)] text-xl text-[color:var(--color-rose-gold)]">
                      0{i + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-dark-brown)]">
                      {t}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-7 font-light text-[color:var(--color-chocolate)] max-w-md">
                    {d}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 13 testimonials ─────────── */

const kind = [
  ["The engagement platter was beyond beautiful. Every guest paused to look at it — it felt like the memory itself was on the table.", "Kritika & Kanav"],
  ["Thank you for preserving our varmala so perfectly. It means the world to us — a piece of our wedding day we can hold.", "Rohit & Aishwarya"],
  ["The return gifts were elegant, considered and loved by every one of our guests. Sachida&rsquo;s taste is unmatched.", "Mehek & Sumit"],
];

function Testimonials() {
  return (
    <section className="bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <SectionHeader n="13" eyebrow="Kind Words" title="From the people we have made for" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kind.map(([q, name], i) => (
            <Reveal key={name} delay={i * 100}>
              <figure className="page-frame h-full bg-[color:var(--color-cream-2)]/60 flex flex-col">
                <div className="text-[color:var(--color-rose-gold)] tracking-widest">★ ★ ★ ★ ★</div>
                <blockquote
                  className="mt-6 font-[family-name:var(--font-display)] italic text-lg leading-relaxed text-[color:var(--color-dark-brown)]"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${q}&rdquo;` }}
                />
                <figcaption className="mt-8 pt-6 border-t border-[color:var(--color-border)]">
                  <p className="script text-2xl text-[color:var(--color-accent-brown)]">{name}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 text-center text-[color:var(--color-accent-brown)] tracking-eyebrow">
          Your trust and happiness are our greatest achievements
        </p>
      </div>
    </section>
  );
}

/* ─────────── 14 gallery ─────────── */

const gallery = [
  { img: sec14, span: "row-span-2" },
  { img: engagementPlatter2, span: "" },
  { img: weddingCardMain, span: "" },
  { img: sec14_2, span: "row-span-2" },
  { img: engagementPlatter3, span: "" },
  { img: homeDecor1, span: "" },
  { img: journey7, span: "" },
  { img: processImg, span: "" },
  { img: bulkOrderImg, span: "" },
  { img: journey1, span: "" },
  { img: weddingCard3, span: "" },
  { img: whatsapp1, span: "" },
  { img: sec14_3, span: "" },
  { img: sec14_4, span: "" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="bg-[color:var(--color-cream-2)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-32">
        <SectionHeader n="14" eyebrow="Portfolio Gallery" title="Every piece has a story" />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={i * 60} className={g.span}>
              <div
                className="h-full w-full overflow-hidden bg-[color:var(--color-beige)] group cursor-zoom-in"
                onClick={() => setLightbox(g.img)}
              >
                <img
                  src={g.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-14 text-center script text-3xl text-[color:var(--color-accent-brown)]">
          Every piece is precious.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-4xl leading-none hover:text-[color:var(--color-rose-gold)] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* ─────────── 15 contact ─────────── */

function Contact() {
  return (
    <section id="contact" className="bg-[color:var(--color-dark-brown)] text-[color:var(--color-cream)]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 sm:gap-10 items-center">

          {/* Portrait */}
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-x-4 sm:inset-x-6 top-0 h-[92%] rounded-t-full bg-[color:var(--color-chocolate)]" />
              <div className="relative overflow-hidden rounded-t-full aspect-[3/4] mx-4 sm:mx-6">
                <img
                  src={portraitAbout}
                  alt="Sachida Sharma"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="script text-3xl sm:text-4xl md:text-5xl text-[color:var(--color-rose-gold)] absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                Let&rsquo;s Connect
              </p>
            </div>
          </Reveal>

          {/* Right side content */}
          <Reveal delay={150} className="col-span-12 md:col-span-7 md:pl-6">
            <div className="text-[color:var(--color-rose-gold)] tracking-eyebrow text-center md:text-left">— 15 —</div>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] leading-[1.15] sm:leading-[1.1] md:leading-[1.05] text-center md:text-left">
              Let&rsquo;s create something <span className="script text-[color:var(--color-rose-gold)]">beautiful</span>
            </h2>
            <p className="mt-5 sm:mt-6 max-w-lg mx-auto md:mx-0 text-[13.5px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.75] md:leading-8 font-light text-[color:var(--color-cream)]/85 text-center md:text-left">
              I&rsquo;d love to craft something meaningful for you. Tell me about
              the moment you&rsquo;d like to preserve — a wedding, an engagement,
              a name, a first — and we will take it slowly from there.
            </p>

            {/* Contact Details */}
            <dl className="mt-8 sm:mt-10 flex flex-col gap-5 sm:gap-6 max-w-md mx-auto md:mx-0">
              <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center md:text-left">
                <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[10px] sm:text-[11px]">Instagram</dt>
                <dd className="mt-1.5 sm:mt-2 font-[family-name:var(--font-display)] text-lg sm:text-xl">
                  <a 
                    href="https://www.instagram.com/sachidaartistry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--color-rose-gold)] transition-colors"
                  >
                    @sachidaartistry
                  </a>
                </dd>
              </div>
              <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center md:text-left">
                <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[10px] sm:text-[11px]">Phone</dt>
                <dd className="mt-1.5 sm:mt-2 font-[family-name:var(--font-display)] text-lg sm:text-xl">
                  <a 
                    href="https://wa.me/919541887431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[color:var(--color-rose-gold)] transition-colors"
                  >
                    +91 95418 87431
                  </a>
                </dd>
              </div>
              <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center md:text-left">
                <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[10px] sm:text-[11px]">Location</dt>
                <dd className="mt-1.5 sm:mt-2 font-[family-name:var(--font-display)] text-base sm:text-lg leading-relaxed">
                  📍 Jammu<br />🚚 Shipping Pan India
                </dd>
              </div>
            </dl>

            {/* QR Code - Centered on mobile */}
            <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
              <div className="border border-[color:var(--color-rose-gold)]/40 p-4 sm:p-5 flex flex-col items-center gap-3 sm:gap-4 w-48 sm:w-52">
                <img
                  src={instaQr}
                  alt="Instagram QR code"
                  className="w-36 h-36 sm:w-40 sm:h-40 object-cover"
                />
                <div className="text-center">
                  <p className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[9px] sm:text-[10px]">Follow on Instagram</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-base sm:text-lg text-[color:var(--color-cream)]">@sachidaartistry</p>
                  <p className="mt-1 text-[10px] sm:text-[11px] font-light text-[color:var(--color-cream)]/60">Scan to follow ✦</p>
                </div>
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ─────────── footer strip ─────────── */

function Footer() {
  return (
    <footer className="bg-[color:var(--color-chocolate)] text-[color:var(--color-cream)]/80 border-t border-[color:var(--color-rose-gold)]/30">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 py-5 sm:py-6 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.24em] sm:tracking-eyebrow text-[color:var(--color-rose-gold)]">
        <span>📍 Jammu</span>
        <span className="opacity-60">✦</span>
        <span>🚚 Pan India</span>
        <span className="opacity-60">✦</span>
        <span className="hidden sm:inline">@sachidaartistry</span>
        <span className="sm:hidden">Est. 2020</span>
        <span className="hidden sm:inline opacity-60">✦</span>
        <span className="hidden sm:inline">Est. 2020</span>
      </div>
    </footer>
  );
}

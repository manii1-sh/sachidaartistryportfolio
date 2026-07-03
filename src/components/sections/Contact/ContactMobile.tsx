import portraitAbout from "@/assets/portrait-about.png";
import instaQr from "@/assets/instagramqr.jpeg";
import { Reveal } from "../shared/Reveal";

export function ContactMobile() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-12 gap-8 sm:gap-10 items-center">

        {/* Portrait - NO arched background overflow on mobile */}
        <Reveal className="col-span-12">
          <div className="relative max-w-sm mx-auto">
            <div className="relative overflow-hidden rounded-t-full aspect-[3/4]">
              <img
                src={portraitAbout}
                alt="Sachida Sharma"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="script text-3xl sm:text-4xl text-[color:var(--color-rose-gold)] text-center mt-4">
              Let&rsquo;s Connect
            </p>
          </div>
        </Reveal>

        {/* Right side content */}
        <Reveal delay={150} className="col-span-12">
          <div className="text-[color:var(--color-rose-gold)] tracking-eyebrow text-center">— 15 —</div>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-[family-name:var(--font-display)] leading-[1.15] sm:leading-[1.1] text-center">
            Let&rsquo;s create something <span className="script text-[color:var(--color-rose-gold)]">beautiful</span>
          </h2>
          <p className="mt-5 sm:mt-6 max-w-lg mx-auto text-[13.5px] sm:text-[14px] leading-[1.7] sm:leading-[1.75] font-light text-[color:var(--color-cream)]/85 text-center">
            I&rsquo;d love to craft something meaningful for you. Tell me about
            the moment you&rsquo;d like to preserve — a wedding, an engagement,
            a name, a first — and we will take it slowly from there.
          </p>

          {/* Contact Details */}
          <dl className="mt-8 sm:mt-10 flex flex-col gap-5 sm:gap-6 max-w-md mx-auto">
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center">
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
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center">
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
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-3 sm:pt-4 text-center">
              <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[10px] sm:text-[11px]">Location</dt>
              <dd className="mt-1.5 sm:mt-2 font-[family-name:var(--font-display)] text-base sm:text-lg leading-relaxed">
                📍 Jammu<br />🚚 Shipping Pan India
              </dd>
            </div>
          </dl>

          {/* QR Code - Centered on mobile */}
          <div className="mt-8 sm:mt-10 flex justify-center">
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
  );
}

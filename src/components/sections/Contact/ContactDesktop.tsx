import portraitAbout from "@/assets/portrait-about.png";
import instaQr from "@/assets/instagramqr.jpeg";
import { Reveal } from "../shared/Reveal";

export function ContactDesktop() {
  return (
    <div className="mx-auto max-w-[1400px] px-12 py-32">
      <div className="grid grid-cols-12 gap-10 items-center">

        {/* Portrait */}
        <Reveal className="col-span-5">
          <div className="relative max-w-none">
            <div className="absolute inset-x-6 top-0 h-[92%] rounded-t-full bg-[color:var(--color-chocolate)]" />
            <div className="relative overflow-hidden rounded-t-full aspect-[3/4] mx-6">
              <img
                src={portraitAbout}
                alt="Sachida Sharma"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="script text-5xl text-[color:var(--color-rose-gold)] absolute bottom-4 left-4">
              Let&rsquo;s Connect
            </p>
          </div>
        </Reveal>

        {/* Right side content */}
        <Reveal delay={150} className="col-span-7 pl-6">
          <div className="text-[color:var(--color-rose-gold)] tracking-eyebrow">— 15 —</div>
          <h2 className="mt-4 text-6xl font-[family-name:var(--font-display)] leading-[1.05]">
            Let&rsquo;s create something <span className="script text-[color:var(--color-rose-gold)]">beautiful</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-8 font-light text-[color:var(--color-cream)]/85">
            I&rsquo;d love to craft something meaningful for you. Tell me about
            the moment you&rsquo;d like to preserve — a wedding, an engagement,
            a name, a first — and we will take it slowly from there.
          </p>

          {/* Contact Details */}
          <dl className="mt-10 flex flex-col gap-6 max-w-md">
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-4">
              <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[11px]">Instagram</dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-xl">
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
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-4">
              <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[11px]">Phone</dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-xl">
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
            <div className="border-t border-[color:var(--color-rose-gold)]/40 pt-4">
              <dt className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[11px]">Location</dt>
              <dd className="mt-2 font-[family-name:var(--font-display)] text-lg leading-relaxed">
                📍 Jammu<br />🚚 Shipping Pan India
              </dd>
            </div>
          </dl>

          {/* QR Code */}
          <div className="mt-10 flex justify-start">
            <div className="border border-[color:var(--color-rose-gold)]/40 p-5 flex flex-col items-center gap-4 w-52">
              <img
                src={instaQr}
                alt="Instagram QR code"
                className="w-40 h-40 object-cover"
              />
              <div className="text-center">
                <p className="tracking-eyebrow text-[color:var(--color-rose-gold)] text-[10px]">Follow on Instagram</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg text-[color:var(--color-cream)]">@sachidaartistry</p>
                <p className="mt-1 text-[11px] font-light text-[color:var(--color-cream)]/60">Scan to follow ✦</p>
              </div>
            </div>
          </div>

        </Reveal>

      </div>
    </div>
  );
}

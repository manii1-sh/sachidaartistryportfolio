import section10Img from "@/assets/section10.jpeg";
import { Reveal } from "../shared/Reveal";
import { PageNumber } from "../shared/PageNumber";
import { Eyebrow } from "../shared/Eyebrow";

export function HomeDecorClocks() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 sm:py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Text Area */}
        <Reveal className="col-span-1 md:col-span-6 md:pr-6 flex flex-col justify-start">
          <PageNumber n="10" />
          <Eyebrow>Artistic Collection</Eyebrow>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.1] sm:leading-[1.05]">
            Home Decor <span className="script text-[color:var(--color-accent-brown)]">Clocks</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
            A functional timepiece that doubles as a stunning work of art. Featuring
            preserved floral arrangements, delicate gold accents, and silent high-quality
            sweeps, all cast in a bespoke resin frame.
          </p>
        </Reveal>

        {/* Image Area */}
        <Reveal delay={150} className="col-span-1 md:col-span-6">
          <div className="relative max-w-md mx-auto md:max-w-none">
            <div className="hidden md:block absolute -inset-3 border border-[color:var(--color-rose-gold)]/40" />
            <img
              src={section10Img}
              alt="Bespoke resin wall clock"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm md:rounded-none"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

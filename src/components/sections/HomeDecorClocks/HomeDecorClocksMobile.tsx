import section10Img from "@/assets/section10.jpeg";
import { Reveal } from "../shared/Reveal";
import { PageNumber } from "../shared/PageNumber";
import { Eyebrow } from "../shared/Eyebrow";

export function HomeDecorClocksMobile() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24">
      <div className="grid grid-cols-12 gap-10 items-start">
        <Reveal className="col-span-12 flex flex-col justify-start">
          <PageNumber n="10" />
          <Eyebrow>Artistic Collection</Eyebrow>
          <h2 className="mt-6 text-5xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
            Home Decor <span className="script text-[color:var(--color-accent-brown)]">Clocks</span>
          </h2>
          <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
            A functional timepiece that doubles as a stunning work of art. Featuring
            preserved floral arrangements, delicate gold accents, and silent high-quality
            sweeps, all cast in a bespoke resin frame.
          </p>
        </Reveal>
        {/* Image - NO border frame on mobile */}
        <Reveal delay={150} className="col-span-12">
          <div className="relative">
            <img
              src={section10Img}
              alt="Bespoke resin wall clock"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

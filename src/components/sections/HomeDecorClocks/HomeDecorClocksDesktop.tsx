import section10Img from "@/assets/section10.jpeg";
import { Reveal } from "../shared/Reveal";
import { PageNumber } from "../shared/PageNumber";
import { Eyebrow } from "../shared/Eyebrow";

export function HomeDecorClocksDesktop() {
  return (
    <div className="mx-auto max-w-[1400px] px-12 py-32">
      <div className="grid grid-cols-12 gap-10 items-start">
        <Reveal className="col-span-6 pr-6 flex flex-col justify-start">
          <PageNumber n="10" />
          <Eyebrow>Artistic Collection</Eyebrow>
          <h2 className="mt-6 text-6xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
            Home Decor <span className="script text-[color:var(--color-accent-brown)]">Clocks</span>
          </h2>
          <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
            A functional timepiece that doubles as a stunning work of art. Featuring
            preserved floral arrangements, delicate gold accents, and silent high-quality
            sweeps, all cast in a bespoke resin frame.
          </p>
        </Reveal>
        <Reveal delay={150} className="col-span-6">
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
  );
}

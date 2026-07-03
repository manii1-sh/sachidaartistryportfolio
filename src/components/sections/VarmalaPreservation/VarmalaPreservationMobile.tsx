import varmalaPreservation from "@/assets/varnmalapreservation.png";
import { Reveal } from "../shared/Reveal";
import { PageNumber } from "../shared/PageNumber";
import { Eyebrow } from "../shared/Eyebrow";

export function VarmalaPreservationMobile() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24">
      <div className="grid grid-cols-12 gap-10 items-start">
        <Reveal className="col-span-12 flex flex-col justify-start">
          <PageNumber n="08" />
          <Eyebrow>Heirloom Collection</Eyebrow>
          <h2 className="mt-6 text-5xl font-[family-name:var(--font-display)] text-[color:var(--color-dark-brown)] leading-[1.05]">
            Varmala <span className="script text-[color:var(--color-accent-brown)]">Preservation</span>
          </h2>
          <p className="mt-8 text-[15px] leading-8 font-light text-[color:var(--color-chocolate)] max-w-md">
            Preserve the blooms from your special day forever. We take your wedding varmala,
            dry the flowers with care to lock in their natural colors, and suspend them in
            a custom, crystal-clear resin design to create a timeless keepsake.
          </p>
        </Reveal>
        {/* Image - NO border frame on mobile */}
        <Reveal delay={150} className="col-span-12">
          <div className="relative">
            <img
              src={varmalaPreservation}
              alt="Varmala preservation resin art"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

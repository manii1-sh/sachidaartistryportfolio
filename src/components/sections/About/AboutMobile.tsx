import contactImage from "@/assets/contactimage.jpeg";
import { Reveal } from "../shared/Reveal";
import { Eyebrow } from "../shared/Eyebrow";

export function AboutMobile() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Image - NO border frame on mobile to avoid viewport overflow */}
        <Reveal className="col-span-12">
          <div className="relative max-w-sm mx-auto">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={contactImage}
                alt="Sachida in her studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="col-span-12">
          <Eyebrow>About the Artist</Eyebrow>
          <h2 className="mt-4 sm:mt-6 text-4xl sm:text-5xl text-[color:var(--color-dark-brown)] leading-[1.05]">
            Hi, I&rsquo;m <span className="script text-[color:var(--color-accent-brown)] text-[2.75rem] sm:text-6xl">Sachida</span>
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
          </div>
        </Reveal>
      </div>
    </div>
  );
}

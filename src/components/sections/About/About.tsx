import contactImage from "@/assets/contactimage.jpeg";
import { Reveal } from "../shared/Reveal";
import { Eyebrow } from "../shared/Eyebrow";

export function About() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-12 py-16 sm:py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Image Container */}
        <Reveal className="col-span-1 md:col-span-5">
          <div className="relative max-w-sm mx-auto md:max-w-none">
            {/* Elegant border frame shown only on md/desktop to avoid mobile overflow */}
            <div className="hidden md:block absolute -inset-4 border border-[color:var(--color-rose-gold)]/40" />
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={contactImage}
                alt="Sachida in her studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover rounded-sm md:rounded-none"
              />
            </div>
          </div>
        </Reveal>

        {/* Text Container */}
        <Reveal delay={150} className="col-span-1 md:col-span-7 md:pl-10">
          <Eyebrow>About the Artist</Eyebrow>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[color:var(--color-dark-brown)] leading-[1.1] sm:leading-[1.05]">
            Hi, I&rsquo;m <span className="script text-[color:var(--color-accent-brown)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sachida</span>
          </h2>
          <p className="mt-6 sm:mt-8 max-w-xl text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light text-[color:var(--color-chocolate)]">
            I&rsquo;m Sachida Sharma — a doctor by profession and an artist by heart.
            My journey as an artist began in 2020 during the COVID lockdown, when I
            discovered a creative side of myself I had never explored before. What
            started as curiosity soon turned into passion. Like every creative journey,
            mine was filled with experiments, challenges, and countless learning experiences.
          </p>
          <p className="mt-4 sm:mt-6 max-w-xl text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light text-[color:var(--color-chocolate)]">
            I explored different art forms before discovering resin art — the medium
            that truly felt like home. I began by creating resin photo frames, and as my
            skills evolved, I introduced engagement platters, which soon became my
            signature and best-selling creations.
          </p>
          <p className="mt-4 sm:mt-6 max-w-xl text-[14px] sm:text-[15px] leading-7 sm:leading-8 font-light text-[color:var(--color-chocolate)]">
            Today, my work also includes varmala preservation, wedding cards, customized
            gifts and other keepsake pieces that transform precious moments into
            timeless memories.
          </p>

          <div className="mt-8 sm:mt-12 flex items-end gap-8">
            <div className="h-px flex-1 bg-[color:var(--color-rose-gold)]/60 mb-3" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

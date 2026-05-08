import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={alt} className="h-full w-full object-cover opacity-30 animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      </div>
      <div className="mx-auto max-w-[1300px] text-center">
        <Reveal>
          <span className="eyebrow mx-auto">{eyebrow}</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-cream">
            {title}{" "}
            {italic && <em className="italic text-gold-gradient font-light">{italic}</em>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl mx-auto font-serif italic text-lg md:text-xl text-cream/70 leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

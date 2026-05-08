import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import jazz from "@/assets/jazz.jpg";
import interior from "@/assets/interior.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — The Grey | Jazz, Bar & Private Dining" },
      { name: "description", content: "From the first cocktail to the last note of jazz, every detail at The Grey is composed to slow time. Jazz nights, the bar, and private dining." },
      { property: "og:title", content: "The Experience at The Grey" },
      { property: "og:description", content: "More than dinner — an evening." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const items = [
    { img: jazz, title: "Jazz Nights", desc: "Live trios on Thursdays — soft horns, slow tempo, room for conversation." },
    { img: dishNegroni, title: "The Bar", desc: "Cocktails built around the season. Negronis stirred behind the original brass." },
    { img: interior, title: "Private Dining", desc: "Intimate rooms inside the historic terminal, designed for the unforgettable evening." },
    { img: chef, title: "Chef's Counter", desc: "Six seats facing the open pass — a front-row view of the kitchen at full tilt." },
  ];

  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title="More than dinner —"
        italic="an evening."
        subtitle="From the first cocktail to the last note of jazz, every detail is composed to slow time."
        image={interior}
        alt="Restaurant interior with candlelight"
      />

      <section className="relative py-20 md:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-6 lg:gap-10">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) as 0 | 1 | 2}>
              <div className="group relative aspect-[4/5] md:aspect-[5/4] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <h3 className="font-display text-3xl md:text-4xl text-cream">{it.title}</h3>
                  <div className="hairline w-12 my-4" />
                  <p className="font-serif text-cream/75 text-base md:text-lg leading-relaxed max-w-md">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-10 bg-charcoal/40 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-cream max-w-3xl mx-auto leading-[1.1]">
            Reserve a private room, a chef's counter, or your <em className="italic text-gold-gradient font-light">table for two.</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10"><Link to="/reservations" className="btn-solid">Reserve Now <ArrowRight size={14} /></Link></div>
        </Reveal>
      </section>
    </>
  );
}

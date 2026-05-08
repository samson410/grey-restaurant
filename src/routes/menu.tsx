import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { dishes, categories } from "@/lib/grey-data";
import dishSnapper from "@/assets/dish-snapper.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Grey | Port City Southern Cuisine" },
      { name: "description", content: "Composed daily from the season, the coast and the field. Explore the chef-driven Southern menu at The Grey in Savannah, GA." },
      { property: "og:title", content: "The Grey — Menu" },
      { property: "og:description", content: "Raw bar, starters, mains, dessert, and bar — a chef-driven Port City Southern menu." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="An evening,"
        italic="in courses."
        subtitle="Composed daily from the season, the coast and the field. A few favorites that have come to define the Grey's table."
        image={dishSnapper}
        alt="Pan-seared red snapper"
      />

      <section className="relative py-16 md:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative px-5 py-2 text-[0.7rem] tracking-[0.28em] uppercase transition-colors ${
                  active === c ? "text-gold" : "text-cream/55 hover:text-cream"
                }`}
              >
                {c}
                <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-gold transition-all duration-500 ${active === c ? "w-8" : "w-0"}`} />
              </button>
            ))}
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((d, i) => (
              <Reveal key={d.name + i} delay={(i % 3) as 0 | 1 | 2}>
                <article className="group relative overflow-hidden bg-ink border border-border hover:border-gold/40 transition-all duration-700">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                    <div className="absolute top-4 left-4 text-[0.6rem] tracking-[0.32em] uppercase text-gold/90">{d.category}</div>
                    <div className="absolute top-4 right-4 font-display text-xl text-gold">${d.price}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                    <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors duration-500">{d.name}</h3>
                    <p className="mt-2 font-serif italic text-sm text-cream/60 leading-relaxed">{d.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="text-center mt-20">
            <Link to="/reservations" className="btn-solid">Reserve Your Evening <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

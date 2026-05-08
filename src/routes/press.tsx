import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { reviews } from "@/lib/grey-data";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — The Grey | In the News" },
      { name: "description", content: "Press, awards, and recognition for The Grey — featured in The New York Times, Bon Appétit, Eater, CBS Sunday Morning and more." },
      { property: "og:title", content: "Press — The Grey" },
      { property: "og:description", content: "What the world is saying about The Grey." },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="In the Press"
        title="Words"
        italic="from the world."
        subtitle="A decade of recognition from the publications that shape American dining."
        image={interior}
        alt="The Grey dining room"
      />

      <section className="relative py-16 md:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-20">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={20} className="fill-gold text-gold" />))}
              <span className="ml-3 font-display text-2xl text-cream">4.9</span>
              <span className="text-cream/50 text-sm tracking-widest uppercase ml-2">2,600+ reviews</span>
            </div>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
                <figure className="text-center">
                  <blockquote className="font-display italic text-2xl md:text-4xl leading-snug text-cream max-w-3xl mx-auto">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-8 text-[0.7rem] tracking-[0.36em] uppercase text-gold">
                    — {r.author}
                  </figcaption>
                  {i < reviews.length - 1 && <div className="hairline w-24 mx-auto mt-16" />}
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["NY Times", "Bon Appétit", "Eater", "CBS Sunday Morning"].map((p, i) => (
            <Reveal key={p} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="font-display text-xl md:text-2xl text-cream/70 hover:text-gold transition-colors duration-500">{p}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

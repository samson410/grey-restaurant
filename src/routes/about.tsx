import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import cofounders from "@/assets/ceo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Grey | Mashama Bailey & Johno Morisano" },
      { name: "description", content: "Meet Chef Mashama Bailey and Johno Morisano — co-founders of The Grey, the Savannah landmark restaurant inside a restored 1938 Greyhound bus terminal." },
      { property: "og:title", content: "About The Grey & Grey Spaces" },
      { property: "og:description", content: "Bonded by a common viewpoint on what makes for delicious food, Johno and Mashama built The Grey in Historic Downtown Savannah." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Welcoming strangers"
        italic="as friends."
        subtitle="Grey Spaces is a hospitality and lifestyle company committed to reaching people through Southern-inspired products and experiences — on the plate and beyond."
        image={interior}
        alt="The Grey interior"
      />

      {/* Story */}
      <section className="relative py-24 md:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={exterior} alt="Restored Greyhound terminal" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-gold/20" />
            </div>
            <div className="mt-6 text-[0.65rem] tracking-[0.32em] uppercase text-cream/50">
              The 1938 Art Deco Greyhound Bus Terminal · Downtown Savannah
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8 font-serif text-lg md:text-xl leading-relaxed text-cream/80">
            <Reveal>
              <span className="eyebrow">Grey Spaces</span>
              <h2 className="mt-6 font-display text-3xl md:text-5xl text-cream leading-[1.1]">
                Southern food <em className="italic text-gold-gradient font-light">on the move.</em>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p>
                Bonded by a common viewpoint on what makes for delicious food, Johno Morisano and
                Chef Mashama Bailey partnered to build The Grey in Historic Downtown Savannah.
                Occupying a 1938 art deco Greyhound Bus Terminal that they painstakingly restored
                to its original luster, The Grey offers a food, wine and service experience that
                is simultaneously familiar and elevated.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                Bringing her personal take on Port City Southern food to a city of her youth allows
                Mashama to tap into all her experiences to create dishes that are deeply layered,
                contextual, and provocative.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                After celebrating the 10th Anniversary of The Grey, the Grey Spaces team is
                expanding its presence to include new sites, products, and curated encounters —
                taking Southern Food on the Move.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-charcoal/40">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-16">
            <Reveal><span className="eyebrow mx-auto">Co-Founders</span></Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream">
                Meet <em className="italic text-gold-gradient font-light">Johno & Mashama.</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-6 gap-12 lg:gap-16 items-center">
           <Reveal className="lg:col-span-6">
  <div className="relative group flex justify-center">
    <div className="relative w-full max-w-[520px] aspect-[4/5] overflow-hidden bg-ink border border-gold/20">
      <img
        src={cofounders}
        alt="Johno Morisano and Chef Mashama Bailey, co-founders of The Grey"
        className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]"
        loading="lazy"
        width={700}
        height={700}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-[0.6rem] tracking-[0.32em] uppercase text-gold/90">
          C.E.O
        </div>
        <div className="mt-1 font-display italic text-cream/80 text-sm">
          Johno Morisano & Chef Mashama Bailey
        </div>
      </div>
    </div>

    <div className="absolute -inset-2 -z-10 bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  </div>
</Reveal>

            <div className="lg:col-span-6 space-y-8">
              <Reveal delay={1}>
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-2">Co-Founder & Managing Partner</div>
                  <h3 className="font-display text-3xl md:text-4xl text-cream">John o. Morisano</h3>
                  <p className="mt-4 font-serif text-cream/75 leading-relaxed">
                    Johno is the product of a tight-knit Italian family, born and raised in New York City. He has been working in the world of media startups for most of his career which gave him the opportunity to travel extensively and develop his love for food and wine. In his free time, he and his wife travelled some more always driven by the location of their next meal. Food and wine has been their primary hobby and the common thread for their personal and professional relationships for the past two decades. After buying a home in Savannah in 2011, Johno started investing in the community he has come to love. The Grey, which was named Eater’s restaurant of the Year for 2017/18, is the result of his passions for building businesses, food, wine, people and energy coming together under one roof. Johno remained active in the Savannah community, giving back to local organizations by hosting lively events in The Yard, The Grey’s outdoor area, the proceeds of each benefitting a different local organization. He is also helping to reshape and expand the mission of the Edna Lewis Foundation, a Board he joined as Treasurer in 2016, which revives, preserves and celebrates the rich history of African American cookery in America. Johno spends time in Savannah and NYC, he adores his wife Carol more than words can express and he would be lost without his dogs Anchovy and Otter.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={2}>
                <div className="hairline max-w-xs" />
              </Reveal>

              <Reveal delay={2}>
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-2">Co-Founder & Executive Chef</div>
                  <h3 className="font-display text-3xl md:text-4xl text-cream">Chef Mashama Bailey</h3>
                  <p className="mt-4 font-serif text-cream/75 leading-relaxed">
                    Mashama is a New York City girl – born in the Bronx and raised in Queens. Her maternal roots hail from Waynseboro, GA and as a result Mashama attended grammar school in Savannah at Charles Ellis and spent many summers at her grandmother’s in Waynesboro. Mashama learned to cook at the hands of the women in her family with grandmothers, aunts and her mom giving her the best kind of education – a real world one. She attended ICE to round out that education and has studied in France and travelled far for food. She spent a dozen years cooking throughout New York City the last four of which were at Prune on Manhattan’s Lower East Side under the tutelage of her friend and mentor, Gabrielle Hamilton. As executive chef of The Grey, Mashama has earned a number of accolades, including James Beard Foundation’s Best Chef Southeast award in 2019. She also serves as Vice Chairman on the board of the Edna Lewis Foundation, working to preserve and celebrate Edna’s legacy that heavily influenced her menu at The Grey. Mashama surrounds herself with family, friends and food and she is a firm believer in the old adage that you learn something new every day.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-8 p-6 border border-gold/20 bg-ink/50 flex items-start gap-4">
                  <BookOpen className="text-gold mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-display text-xl text-cream">Black, White and The Grey</div>
                    <p className="mt-2 font-serif italic text-cream/65 text-sm leading-relaxed">
                      Together, Mashama and Johno co-wrote a memoir exploring the partnership's
                      challenges navigating race, class and culture in the American South — as
                      featured on CBS Sunday Morning.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "10+", l: "Years of Craft" },
            { n: "1938", l: "Terminal Restored" },
            { n: "James Beard", l: "Recognized" },
            { n: "CBS", l: "Sunday Morning" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="font-display text-3xl md:text-4xl text-gold-gradient">{s.n}</div>
              <div className="mt-3 text-[0.65rem] tracking-[0.28em] uppercase text-cream/55">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-cream max-w-3xl mx-auto">
            Join us at the <em className="italic text-gold-gradient font-light">table.</em>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/reservations" className="btn-solid">Reserve a Table <ArrowRight size={14} /></Link>
            <Link to="/menu" className="btn-gold">Explore the Menu</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

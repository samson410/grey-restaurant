import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishPudding from "@/assets/dish-pudding.jpg";
import dishOysters from "@/assets/dish-oysters.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "The Grey Market — Southern Pantry & Keepsakes" },
      { name: "description", content: "Shop the ingredients we use in our kitchens, plus beanies, sweatshirts, tees, and ball caps from The Grey." },
      { property: "og:title", content: "The Grey Market" },
      { property: "og:description", content: "Southern Food is on the move." },
    ],
  }),
  component: MarketPage,
});

function MarketPage() {
  const products = [
    { name: "House Sorghum Hot Sauce", price: "14", img: dishCarpaccio, tag: "Pantry" },
    { name: "Stone-Ground Cornmeal", price: "12", img: dishPudding, tag: "Pantry" },
    { name: "Smoked Sea Salt", price: "18", img: dishOysters, tag: "Pantry" },
    { name: "The Grey Beanie", price: "32", img: dishNegroni, tag: "Apparel" },
    { name: "Heritage Sweatshirt", price: "68", img: dishCarpaccio, tag: "Apparel" },
    { name: "Greyhound Ball Cap", price: "38", img: dishOysters, tag: "Apparel" },
  ];
  return (
    <>
      <PageHero
        eyebrow="The Market"
        title="Southern food,"
        italic="on the move."
        subtitle="Ingredients we use in our own kitchens, plus keepsakes from The Grey Restaurant — beanies and sweatshirts to keep you warm, tees and ball caps for any time of year."
        image={dishCarpaccio}
        alt="Pantry products"
      />

      <section className="relative py-16 md:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) as 0 | 1 | 2}>
                <article className="group relative overflow-hidden bg-ink border border-border hover:border-gold/40 transition-all duration-700">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-4 left-4 text-[0.6rem] tracking-[0.32em] uppercase text-gold/90 bg-ink/60 backdrop-blur px-2 py-1">{p.tag}</div>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-500">{p.name}</h3>
                      <div className="mt-1 font-display text-gold-gradient">${p.price}</div>
                    </div>
                    <button className="text-[0.65rem] tracking-[0.32em] uppercase text-cream/60 hover:text-gold link-line">Add</button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="text-center mt-20">
            <a href="#" className="btn-gold">Browse the Full Market <ArrowRight size={14} /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

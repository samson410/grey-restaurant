import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import interior from "@/assets/interior.jpg";
import exterior from "@/assets/exterior.jpg";
import jazz from "@/assets/jazz.jpg";
import chef from "@/assets/chef.jpg";
import dishOysters from "@/assets/dish-oysters.jpg";
import dishSnapper from "@/assets/dish-snapper.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPudding from "@/assets/dish-pudding.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishFish from "@/assets/dish-fish.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Grey | Savannah, GA" },
      { name: "description", content: "A visual journey through The Grey — the restored 1938 Greyhound terminal, the kitchen, the dishes, and the moments." },
      { property: "og:title", content: "Gallery — The Grey" },
      { property: "og:description", content: "Moments at The Grey." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const items = [
    { img: interior, h: "row-span-2" },
    { img: dishOysters, h: "" },
    { img: jazz, h: "" },
    { img: dishSnapper, h: "row-span-2" },
    { img: exterior, h: "" },
    { img: dishNegroni, h: "" },
    { img: chef, h: "row-span-2" },
    { img: dishChicken, h: "" },
    { img: dishPudding, h: "" },
    { img: dishCarpaccio, h: "" },
    { img: dishFish, h: "row-span-2" },
    { img: jazz, h: "" },
  ];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments at"
        italic="The Grey."
        subtitle="A visual archive of the restored terminal, the kitchen, and the table."
        image={interior}
        alt="The Grey interior"
      />

      <section className="relative pb-28 md:pb-40 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-5">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 3) as 0 | 1 | 2} className={`relative group overflow-hidden cursor-pointer ${it.h}`}>
                <button onClick={() => setOpen(it.img)} className="block w-full h-full">
                  <img src={it.img} alt="" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-700" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-700" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {open && (
          <div onClick={() => setOpen(null)} className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-ink/90 backdrop-blur-md animate-fade-in cursor-pointer">
            <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" />
          </div>
        )}
      </section>
    </>
  );
}

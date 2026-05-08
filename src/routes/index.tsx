import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Calendar,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Star,
  Users,
  Facebook,
  Twitter,
} from "lucide-react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import hero from "@/assets/hero.jpg";
import chef from "@/assets/chef.jpg";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import jazz from "@/assets/jazz.jpg";
import dishOysters from "@/assets/dish-oysters.jpg";
import dishSnapper from "@/assets/dish-snapper.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPudding from "@/assets/dish-pudding.jpg";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Grey — Port City Southern Cuisine | Savannah, GA" },
      {
        name: "description",
        content:
          "Award-winning fine dining inside a restored Greyhound bus terminal. Chef-driven Southern cuisine, jazz nights and warm hospitality in the heart of Savannah, Georgia.",
      },
      { property: "og:title", content: "The Grey — Port City Southern Cuisine Reimagined" },
      {
        property: "og:description",
        content:
          "An unforgettable Southern fine dining experience in a 1938 Greyhound terminal. Reserve your evening.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

const dishes = [
  { name: "Dozen Fresh Oysters", category: "Raw Bar", price: "32", img: dishOysters, desc: "Atlantic & Gulf selection · mignonette · cocktail" },
  { name: "Beef Carpaccio", category: "Starter", price: "24", img: dishCarpaccio, desc: "Aged parmesan · arugula · lemon · black pepper" },
  { name: "Rabbit Mortadella", category: "Starter", price: "22", img: dishCarpaccio, desc: "Pistachio · house pickles · grilled sourdough" },
  { name: "Lamb Heart", category: "Starter", price: "26", img: dishCarpaccio, desc: "Charred · chimichurri · smoked sea salt" },
  { name: "Red Snapper", category: "Main", price: "48", img: dishSnapper, desc: "Pan-seared · brown butter jus · seasonal greens" },
  { name: "Whole Grilled Fish", category: "Main", price: "62", img: dishFish, desc: "Wood-fired · Meyer lemon · herb oil · sea salt" },
  { name: "Fried Chicken & Hoecakes", category: "Main", price: "38", img: dishChicken, desc: "Buttermilk · sorghum · stone-ground hoecakes" },
  { name: "Butterscotch Pudding", category: "Dessert", price: "14", img: dishPudding, desc: "Bourbon caramel · sea salt · crème fraîche" },
  { name: "Chocolate Parfait", category: "Dessert", price: "16", img: dishPudding, desc: "Dark chocolate · espresso cream · cocoa nib" },
  { name: "Negroni", category: "Bar", price: "18", img: dishNegroni, desc: "Campari · sweet vermouth · house gin · orange" },
];

const categories = ["All", "Raw Bar", "Starter", "Main", "Dessert", "Bar"];

const reviews = [
  { quote: "Elegant atmosphere, divine food and impeccable service.", author: "The New York Times" },
  { quote: "One of the best dining experiences in Savannah.", author: "Condé Nast Traveler" },
  { quote: "An unforgettable culinary journey through the modern South.", author: "Bon Appétit" },
  { quote: "A masterclass in storytelling on a plate.", author: "Eater" },
];

function Index() {
  return (
    <div className="grain min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-cream">
      <Loader />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <Marquee />
      <About />
      <Menu />
      <ChefSection />
      <Experience />
      <Gallery />
      <Reviews />
      <Reservation />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="The Grey restaurant interior — candlelit dining"
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-gold/40 blur-[2px] animate-float"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animationDelay: `${(i % 5) * 0.6}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Side meta */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 text-[0.62rem] tracking-[0.4em] uppercase text-cream/50 [writing-mode:vertical-rl] rotate-180">
        <span>Est. 2014 · Savannah, GA</span>
      </div>
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 text-[0.62rem] tracking-[0.4em] uppercase text-cream/50 [writing-mode:vertical-rl]">
        <span>Port City Southern · Fine Dining</span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.4s" }}>
          A Savannah Institution
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-[2.6rem] sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-cream">
          {["Port City", "Southern Cuisine", <em key="r" className="text-gold-gradient italic font-light">Reimagined</em>].map(
            (word, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-fade-up mr-3"
                style={{ animationDelay: `${0.6 + i * 0.18}s` }}
              >
                {word}
              </span>
            )
          )}
        </h1>

        <p
          className="mt-8 max-w-xl font-serif text-lg lg:text-xl text-cream/70 leading-relaxed opacity-0 animate-fade-up italic"
          style={{ animationDelay: "1.3s" }}
        >
          Inside a 1938 Greyhound bus terminal, an evening unfolds — candlelight, jazz,
          and the unhurried storytelling of the modern South.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.5s" }}
        >
          <a href="#reservations" className="btn-solid">
            Reserve a Table <ArrowRight size={14} />
          </a>
          <a href="#menu" className="btn-gold">
            Explore the Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[0.62rem] tracking-[0.4em] uppercase text-cream/60 hover:text-gold transition-colors"
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-float" />
      </a>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Port City Southern",
    "Est. 2014",
    "Savannah, Georgia",
    "James Beard Recognized",
    "Chef-Driven",
    "Jazz Nights",
    "Vintage Greyhound Terminal",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative py-10 border-y border-border overflow-hidden bg-charcoal/40">
      <div className="marquee-track gap-16">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-16 shrink-0">
            <span className="font-display italic text-2xl md:text-4xl text-cream/70">{t}</span>
            <span className="text-gold text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-[1300px] grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={exterior}
              alt="Restored Greyhound bus terminal at dusk"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-gold/20" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 w-44 lg:w-64 aspect-[3/4] overflow-hidden hidden md:block shadow-[0_30px_80px_-30px_oklch(0_0_0/0.6)]">
            <img src={interior} alt="Restaurant interior" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">Our Story</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-cream">
              A 1938 terminal,<br />
              <em className="italic text-gold-gradient font-light">reimagined.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="hairline mt-10 mb-10 max-w-xs" />
          </Reveal>
          <Reveal delay={2}>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream/75 max-w-xl">
              Set inside a meticulously restored Greyhound bus terminal in downtown
              Savannah, The Grey is a love letter to Southern cuisine, vintage Americana,
              and the hospitality of a slower, more elegant era.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-5 font-serif text-lg md:text-xl leading-relaxed text-cream/65 max-w-xl">
              From the gleaming brass of the original bar to the soft glow of brass
              sconces, every detail invites you to linger over an evening of
              chef-driven storytelling.
            </p>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "10", l: "Years of Craft" },
                { n: "2,600+", l: "Five-Star Reviews" },
                { n: "4.9", l: "Guest Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-gold-gradient">{s.n}</div>
                  <div className="mt-2 text-[0.65rem] tracking-[0.28em] uppercase text-cream/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU ---------------- */
function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section id="menu" className="relative py-28 md:py-40 px-6 lg:px-10 bg-charcoal/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <Reveal>
            <span className="eyebrow mx-auto">The Menu</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream">
              An evening, <em className="italic text-gold-gradient font-light">in courses.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl mx-auto font-serif text-lg text-cream/65">
              Composed daily from the season, the coast and the field. A few favorites that have come to
              define the Grey's table.
            </p>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={2} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 text-[0.7rem] tracking-[0.28em] uppercase transition-colors ${
                active === c ? "text-gold" : "text-cream/55 hover:text-cream"
              }`}
            >
              {c}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-gold transition-all duration-500 ${
                  active === c ? "w-8" : "w-0"
                }`}
              />
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((d, i) => (
            <Reveal key={d.name + i} delay={(i % 3) as 0 | 1 | 2}>
              <article className="group relative overflow-hidden bg-ink border border-border hover:border-gold/40 transition-all duration-700">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 text-[0.6rem] tracking-[0.32em] uppercase text-gold/90">
                    {d.category}
                  </div>
                  <div className="absolute top-4 right-4 font-display text-xl text-gold">
                    ${d.price}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-gold transition-colors duration-500">
                    {d.name}
                  </h3>
                  <p className="mt-2 font-serif italic text-sm text-cream/60 leading-relaxed">{d.desc}</p>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-700 pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="text-center mt-16">
          <a href="#reservations" className="btn-gold">View Full Menu <ArrowRight size={14} /></a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CHEF ---------------- */
function ChefSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <span className="eyebrow">The Chef</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-cream">
            A Southern table,<br />
            <em className="italic text-gold-gradient font-light">told by hand.</em>
          </h2>
          <div className="hairline mt-10 mb-10 max-w-xs" />
          <p className="font-serif text-lg md:text-xl leading-relaxed text-cream/75">
            For more than a decade, our award-winning kitchen has translated the
            heritage of Southern cooking through the lens of seasonal Lowcountry
            ingredients — quietly insistent, never showy.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { y: "2014", t: "The Grey opens inside a 1938 Greyhound terminal" },
              { y: "2017", t: "James Beard Best Chef nomination" },
              { y: "2019", t: "Eater Restaurant of the Year" },
              { y: "2023", t: "Named one of America's classics" },
            ].map((m, i) => (
              <Reveal key={m.y} delay={(i % 3) as 0 | 1 | 2}>
                <div className="flex gap-6 items-baseline border-b border-border pb-5">
                  <span className="font-display text-gold text-xl w-16 shrink-0">{m.y}</span>
                  <p className="font-serif text-cream/75 text-lg">{m.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={chef} alt="Chef plating a dish" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="font-display text-2xl text-cream">The Kitchen</div>
                <div className="text-[0.65rem] tracking-[0.32em] uppercase text-gold/80 mt-1">
                  In residence
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const items = [
    {
      img: jazz,
      title: "Jazz Nights",
      desc: "Live trios on Thursdays — soft horns, slow tempo, room for conversation.",
    },
    {
      img: dishNegroni,
      title: "The Bar",
      desc: "Cocktails built around the season. Negronis stirred behind the original brass.",
    },
    {
      img: interior,
      title: "Private Dining",
      desc: "Intimate rooms inside the historic terminal, designed for the unforgettable evening.",
    },
  ];
  return (
    <section id="experience" className="relative py-28 md:py-40 px-6 lg:px-10 bg-charcoal/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal><span className="eyebrow">The Experience</span></Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream max-w-xl leading-[1.05]">
                More than dinner — <em className="italic text-gold-gradient font-light">an evening.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="font-serif text-lg text-cream/65 max-w-md">
              From the first cocktail to the last note of jazz, every detail is composed to slow time.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group relative aspect-[3/4] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-3xl text-cream">{it.title}</h3>
                  <div className="hairline w-12 my-4" />
                  <p className="font-serif text-cream/75 text-base leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
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
  ];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <Reveal><span className="eyebrow mx-auto">Gallery</span></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream">
              Moments at <em className="italic text-gold-gradient font-light">The Grey</em>
            </h2>
          </Reveal>
        </div>

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

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-ink/90 backdrop-blur-md animate-fade-in cursor-pointer"
        >
          <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" />
        </div>
      )}
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-28 md:py-40 px-6 lg:px-10 bg-charcoal/40 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={interior} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal><span className="eyebrow mx-auto">In the Press</span></Reveal>
        <Reveal delay={1}>
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-gold text-gold" />
            ))}
            <span className="ml-3 font-display text-2xl text-cream">4.9</span>
            <span className="text-cream/50 text-sm tracking-widest uppercase ml-2">2,600+ reviews</span>
          </div>
        </Reveal>

        <div className="mt-14 min-h-[180px] relative">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-display italic text-2xl md:text-4xl leading-snug text-cream max-w-3xl mx-auto">
                "{r.quote}"
              </p>
              <p className="mt-8 text-[0.7rem] tracking-[0.36em] uppercase text-gold">— {r.author}</p>
            </div>
          ))}
        </div>

        <Reveal delay={2} className="mt-16 flex items-center justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-gold" : "w-6 bg-cream/20"}`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- RESERVATION ---------------- */
function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="reservations" className="relative py-28 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-[1300px] grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow">Reservations</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream leading-[1.05]">
            Reserve<br />
            <em className="italic text-gold-gradient font-light">your evening.</em>
          </h2>
          <div className="hairline mt-10 mb-10 max-w-xs" />
          <p className="font-serif text-lg text-cream/70 max-w-md leading-relaxed">
            Tables are released thirty days in advance. For private dining or events of more
            than eight, please contact our reservations desk directly.
          </p>

          <div className="mt-12 space-y-5 text-cream/75 font-serif">
            <div className="flex items-start gap-4">
              <Clock className="text-gold mt-1" size={18} />
              <div>
                <div className="text-[0.7rem] tracking-[0.28em] uppercase text-cream/50 mb-1">Hours</div>
                <div>Tue – Sat · 5:30pm – 10:00pm</div>
                <div>Sun · Brunch 11am – 2pm</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-1" size={18} />
              <div>
                <div className="text-[0.7rem] tracking-[0.28em] uppercase text-cream/50 mb-1">Direct</div>
                <div>+1 (912) 662-5999</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="glass p-8 md:p-12 relative"
          >
            <div className="absolute inset-0 ring-1 ring-gold/10 pointer-events-none" />
            {submitted ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="font-display text-3xl text-gold-gradient">Thank you.</div>
                <p className="mt-4 font-serif text-cream/70">
                  We've received your request. A reservationist will confirm your evening shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <Field icon={<Users size={16} />} label="Guests">
                  <select className="luxury-input">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </Field>
                <div className="grid grid-cols-2 gap-5">
                  <Field icon={<Calendar size={16} />} label="Date">
                    <input type="date" className="luxury-input" required />
                  </Field>
                  <Field icon={<Clock size={16} />} label="Time">
                    <select className="luxury-input">
                      {["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map(
                        (t) => <option key={t}>{t}</option>
                      )}
                    </select>
                  </Field>
                </div>
                <Field label="Full Name">
                  <input type="text" placeholder="Your name" className="luxury-input" required />
                </Field>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Email">
                    <input type="email" placeholder="you@email.com" className="luxury-input" required />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" placeholder="(912) 000-0000" className="luxury-input" />
                  </Field>
                </div>
                <Field label="Special Requests">
                  <textarea rows={3} placeholder="Anniversary, allergies, seating preference..." className="luxury-input resize-none" />
                </Field>

                <button type="submit" className="btn-solid w-full mt-2">
                  Reserve Your Evening <ArrowRight size={14} />
                </button>
              </div>
            )}

            <style>{`
              .luxury-input {
                width: 100%;
                background: transparent;
                border: 0;
                border-bottom: 1px solid oklch(0.78 0.13 78 / 0.25);
                color: var(--cream);
                font-family: var(--font-serif);
                font-size: 1rem;
                padding: 0.6rem 0;
                outline: none;
                transition: border-color 0.4s ease, box-shadow 0.4s ease;
              }
              .luxury-input:focus {
                border-color: var(--gold);
                box-shadow: 0 1px 0 0 var(--gold);
              }
              .luxury-input::placeholder { color: oklch(0.94 0.018 80 / 0.35); }
              .luxury-input option { background: oklch(0.16 0.012 60); color: var(--cream); }
            `}</style>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ icon, label, children }: { icon?: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[0.65rem] tracking-[0.32em] uppercase text-cream/55 mb-1">
        {icon && <span className="text-gold">{icon}</span>}
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 px-6 lg:px-10 bg-ink border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 pb-16">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl tracking-[0.18em] text-cream">
              THE <span className="text-gold-gradient">GREY</span>
            </div>
            <p className="mt-6 font-serif italic text-cream/60 max-w-md leading-relaxed">
              Port City Southern cuisine, served inside a 1938 Greyhound bus terminal in
              the heart of historic Savannah, Georgia.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex items-center border-b border-gold/30 max-w-md"
            >
              <input
                type="email"
                placeholder="Join the list"
                className="flex-1 bg-transparent border-0 outline-none py-3 text-cream placeholder:text-cream/40"
              />
              <button className="text-[0.7rem] tracking-[0.32em] uppercase text-gold link-line">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-5">Visit</h4>
            <div className="flex items-start gap-3 text-cream/75 font-serif">
              <MapPin size={18} className="text-gold mt-1 shrink-0" />
              <div>
                109 Martin Luther King Jr Blvd<br />
                Savannah, Georgia 31401
              </div>
            </div>
            <div className="flex items-start gap-3 text-cream/75 font-serif mt-4">
              <Phone size={18} className="text-gold mt-1 shrink-0" />
              <div>+1 (912) 662-5999</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-5">Hours</h4>
            <ul className="space-y-2 font-serif text-cream/75">
              <li>Tue – Sat · 5:30 – 10pm</li>
              <li>Sun · 11am – 2pm</li>
              <li>Mon · Closed</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-5">Follow</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 text-cream/70 hover:text-ink hover:bg-gold hover:border-gold transition-all duration-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[0.65rem] tracking-[0.32em] uppercase text-cream/40">
          <div>© {new Date().getFullYear()} The Grey · Savannah, GA</div>
          <div className="flex gap-6">
            <a href="#" className="link-line">Privacy</a>
            <a href="#" className="link-line">Press</a>
            <a href="#" className="link-line">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

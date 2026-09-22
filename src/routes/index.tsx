import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import { dishes, reviews } from "@/lib/grey-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Grey — Port City Southern Cuisine | Savannah, GA" },
      { name: "description", content: "Award-winning fine dining inside a restored Greyhound bus terminal. Chef-driven Southern cuisine and warm hospitality in the heart of Savannah, Georgia." },
      { property: "og:title", content: "The Grey — Port City Southern Cuisine Reimagined" },
      { property: "og:description", content: "An unforgettable Southern fine dining experience in a 1938 Greyhound terminal. Reserve your evening." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <FeaturedDishes />
      <PressStrip />
      <ReserveCTA />
    </>
  );
}

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
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="The Grey restaurant interior — candlelit dining"
          className="h-full w-full object-cover animate-slow-zoom"
          style={{ transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
      </div>

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

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="eyebrow animate-fade-up" style={{ animationDelay: "0.4s" }}>A Savannah Institution</div>

        <h1 className="mt-8 max-w-5xl font-display text-[2.6rem] sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-cream">
          {["Port City", "Southern Cuisine", <em key="r" className="text-gold-gradient italic font-light">Reimagined</em>].map((word, i) => (
            <span key={i} className="inline-block opacity-0 animate-fade-up mr-3" style={{ animationDelay: `${0.6 + i * 0.18}s` }}>
              {word}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-xl font-serif text-lg lg:text-xl text-cream/70 leading-relaxed opacity-0 animate-fade-up italic" style={{ animationDelay: "1.3s" }}>
          Inside a 1938 Greyhound bus terminal, an evening unfolds — candlelight, jazz,
          and the unhurried storytelling of the modern South.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "1.5s" }}>
          <Link to="/reservations" className="btn-solid">Reserve a Table <ArrowRight size={14} /></Link>
          <Link to="/menu" className="btn-gold">Explore the Menu</Link>
        </div>
      </div>

      <a href="#story" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[0.62rem] tracking-[0.4em] uppercase text-cream/60 hover:text-gold transition-colors">
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-float" />
      </a>
    </section>
  );
}

function Marquee() {
  const items = ["Port City Southern", "Est. 2014", "Savannah, Georgia", "James Beard Recognized", "Chef-Driven", "Vintage Greyhound Terminal"];
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

function AboutTeaser() {
  return (
    <section id="story" className="relative py-28 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-[1300px] grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={exterior} alt="Restored Greyhound bus terminal at dusk" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 ring-1 ring-gold/20" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 w-44 lg:w-64 aspect-[3/4] overflow-hidden hidden md:block shadow-[0_30px_80px_-30px_oklch(0_0_0/0.6)]">
            <img src={interior} alt="Restaurant interior" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal><span className="eyebrow">Our Story</span></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-cream">
              A 1938 terminal,<br />
              <em className="italic text-gold-gradient font-light">reimagined.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}><div className="hairline mt-10 mb-10 max-w-xs" /></Reveal>
          <Reveal delay={2}>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-cream/75 max-w-xl">
              Set inside a meticulously restored Greyhound bus terminal in downtown Savannah, The Grey is
              a love letter to Southern cuisine and the hospitality of a slower, more elegant era.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10">
              <Link to="/about" className="btn-gold">Read Our Story <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedDishes() {
  const featured = dishes.slice(0, 6);
  return (
    <section className="relative py-28 md:py-40 px-6 lg:px-10 bg-charcoal/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <Reveal><span className="eyebrow mx-auto">From the Menu</span></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream">
              An evening, <em className="italic text-gold-gradient font-light">in courses.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) as 0 | 1 | 2}>
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

        <Reveal delay={2} className="text-center mt-16">
          <Link to="/menu" className="btn-gold">View Full Menu <ArrowRight size={14} /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function PressStrip() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-28 md:py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 ">
        <img src={interior} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal><span className="eyebrow mx-auto">In the Press</span></Reveal>
        <Reveal delay={1}>
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={20} className="fill-gold text-gold" />))}
            <span className="ml-3 font-display text-2xl text-cream">4.9</span>
          </div>
        </Reveal>
        <div className="mt-14 min-h-[180px] relative">
          {reviews.map((r, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
              <p className="font-display italic text-2xl md:text-4xl leading-snug text-cream max-w-3xl mx-auto">"{r.quote}"</p>
              <p className="mt-8 text-[0.7rem] tracking-[0.36em] uppercase text-gold">— {r.author}</p>
            </div>
          ))}
        </div>
        <Reveal delay={2} className="mt-12">
          <Link to="/press" className="btn-gold">Read All Press</Link>
        </Reveal>
      </div>
    </section>
  );
}

function ReserveCTA() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-10 text-center">
      <Reveal><span className="eyebrow mx-auto">Reservations</span></Reveal>
      <Reveal delay={1}>
        <h2 className="mt-6 font-display text-4xl md:text-6xl text-cream max-w-3xl mx-auto leading-[1.05]">
          Reserve <em className="italic text-gold-gradient font-light">your evening.</em>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="mt-8 max-w-xl mx-auto font-serif text-lg text-cream/70">
          Tables are released thirty days in advance. Welcome strangers as friends.
        </p>
      </Reveal>
      <Reveal delay={3}>
        <div className="mt-10"><Link to="/reservations" className="btn-solid">Reserve a Table <ArrowRight size={14} /></Link></div>
      </Reveal>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Grey | Savannah, GA" },
      { name: "description", content: "Visit The Grey at 109 Martin Luther King Jr Blvd, Savannah, GA. Phone, email, hours, and directions." },
      { property: "og:title", content: "Contact — The Grey" },
      { property: "og:description", content: "Visit, call, or write to The Grey in Savannah, Georgia." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Find us in"
        italic="Savannah."
        subtitle="Inside the restored 1938 Greyhound terminal, on Martin Luther King Jr Blvd in historic downtown."
        image={exterior}
        alt="Greyhound terminal exterior"
      />

      <section className="relative py-16 md:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-cream leading-[1.1]">
              Visit <em className="italic text-gold-gradient font-light">The Grey.</em>
            </h2>
            <div className="hairline mt-8 mb-10 max-w-xs" />

            <ul className="space-y-7 font-serif">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-cream/55 mb-1">Address</div>
                  <div className="text-cream/85">109 Martin Luther King Jr Blvd<br />Savannah, Georgia 31401</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-cream/55 mb-1">Phone</div>
                  <div className="text-cream/85">+1 (912) 662-5999</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-cream/55 mb-1">Email</div>
                  <div className="text-cream/85">hello@thegreyrestaurant.com</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-[0.7rem] tracking-[0.32em] uppercase text-cream/55 mb-1">Hours</div>
                  <div className="text-cream/85">
                    Tue – Sat · 5:30pm – 10:00pm<br />
                    Sun · 11am – 2pm (Brunch)<br />
                    Mon · Closed
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <Link to="/reservations" className="btn-solid">Reserve a Table <ArrowRight size={14} /></Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
              <img src={exterior} alt="The Grey exterior at dusk" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream">
                <div className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-2">Historic Downtown</div>
                <div className="font-display text-2xl">Savannah, Georgia</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

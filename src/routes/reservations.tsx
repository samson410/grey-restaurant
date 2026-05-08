import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Phone, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — The Grey | Savannah, GA" },
      { name: "description", content: "Reserve your evening at The Grey. Tables released thirty days in advance. Private dining for parties of more than eight available on request." },
      { property: "og:title", content: "Reserve at The Grey" },
      { property: "og:description", content: "Reserve your evening at The Grey." },
    ],
  }),
  component: ReservationsPage,
});

function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve"
        italic="your evening."
        subtitle="Tables are released thirty days in advance. For private dining or parties larger than eight, please contact our reservations desk directly."
        image={interior}
        alt="Candlelit table"
      />

      <section className="relative py-16 md:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-cream leading-[1.1]">
              We welcome strangers <em className="italic text-gold-gradient font-light">as friends.</em>
            </h2>
            <div className="hairline mt-8 mb-8 max-w-xs" />
            <div className="space-y-6 text-cream/75 font-serif">
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1" size={18} />
                <div>
                  <div className="text-[0.7rem] tracking-[0.28em] uppercase text-cream/50 mb-1">Hours</div>
                  <div>Tue – Sat · 5:30pm – 10:00pm</div>
                  <div>Sun · Brunch 11am – 2pm</div>
                  <div>Mon · Closed</div>
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
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
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
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (<option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>))}
                    </select>
                  </Field>
                  <div className="grid grid-cols-2 gap-5">
                    <Field icon={<Calendar size={16} />} label="Date">
                      <input type="date" className="luxury-input" required />
                    </Field>
                    <Field icon={<Clock size={16} />} label="Time">
                      <select className="luxury-input">
                        {["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map((t) => (<option key={t}>{t}</option>))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Full Name"><input type="text" placeholder="Your name" className="luxury-input" required /></Field>
                  <div className="grid grid-cols-2 gap-5">
                    <Field label="Email"><input type="email" placeholder="you@email.com" className="luxury-input" required /></Field>
                    <Field label="Phone"><input type="tel" placeholder="(912) 000-0000" className="luxury-input" /></Field>
                  </div>
                  <Field label="Special Requests">
                    <textarea rows={3} placeholder="Anniversary, allergies, seating preference..." className="luxury-input resize-none" />
                  </Field>
                  <button type="submit" className="btn-solid w-full mt-2">Reserve Your Evening <ArrowRight size={14} /></button>
                </div>
              )}
              <style>{`
                .luxury-input { width: 100%; background: transparent; border: 0; border-bottom: 1px solid oklch(0.78 0.13 78 / 0.25); color: var(--cream); font-family: var(--font-serif); font-size: 1rem; padding: 0.6rem 0; outline: none; transition: border-color 0.4s ease, box-shadow 0.4s ease; }
                .luxury-input:focus { border-color: var(--gold); box-shadow: 0 1px 0 0 var(--gold); }
                .luxury-input::placeholder { color: color-mix(in oklab, var(--cream) 35%, transparent); }
                .luxury-input option { background: var(--card); color: var(--cream); }
              `}</style>
            </form>
          </Reveal>
        </div>
      </section>
    </>
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

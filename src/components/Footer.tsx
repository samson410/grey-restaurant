import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, MapPin, Phone } from "lucide-react";

export function Footer() {
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
            <h4 className="text-[0.7rem] tracking-[0.32em] uppercase text-gold mb-5">Explore</h4>
            <ul className="space-y-2 font-serif text-cream/75">
              <li><Link to="/menu" className="link-line">Menu</Link></li>
              <li><Link to="/about" className="link-line">About</Link></li>
              <li><Link to="/market" className="link-line">Market</Link></li>
              <li><Link to="/press" className="link-line">Press</Link></li>
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
            <Link to="/contact" className="link-line">Contact</Link>
            <a href="#" className="link-line">Privacy</a>
            <a href="#" className="link-line">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

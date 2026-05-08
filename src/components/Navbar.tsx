import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Menu", to: "#menu" },
  { label: "Experience", to: "#experience" },
  { label: "Gallery", to: "#gallery" },
  { label: "Reviews", to: "#reviews" },
  { label: "Contact", to: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto max-w-[1400px] px-6 lg:px-10 transition-all duration-700 ${
            scrolled ? "" : ""
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-700 ${
              scrolled
                ? "glass rounded-full px-6 py-3"
                : "px-2 py-2"
            }`}
          >
            <a href="#home" className="flex items-center gap-3 group">
              <span className="font-display text-2xl tracking-[0.18em] text-cream">
                THE <span className="text-gold-gradient">GREY</span>
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-9">
              {links.slice(0, -1).map((l) => (
                <li key={l.to}>
                  <a
                    href={l.to}
                    className="link-line text-[0.72rem] tracking-[0.28em] uppercase text-cream/80 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#reservations" className="hidden lg:inline-flex btn-gold !py-3 !px-6 text-[0.7rem]">
              Reserve
            </a>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-cream p-2"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/98 backdrop-blur-xl transition-all duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.11 0.01 60 / 0.98)" }}
      >
        <div className="flex items-center justify-between p-6 lg:p-10">
          <span className="font-display text-2xl tracking-[0.18em] text-cream">
            THE <span className="text-gold-gradient">GREY</span>
          </span>
          <button onClick={() => setOpen(false)} className="text-cream p-2" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-7 mt-16">
          {links.map((l, i) => (
            <li
              key={l.to}
              className={`transition-all duration-700 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <a
                href={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-cream hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a href="#reservations" onClick={() => setOpen(false)} className="btn-solid">
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

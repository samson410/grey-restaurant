import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center transition-all duration-1000 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "oklch(0.09 0.01 60)" }}
    >
      <div className="text-center">
        <div className="font-display text-3xl md:text-5xl tracking-[0.32em] text-cream animate-fade-in">
          THE <span className="text-gold-gradient">GREY</span>
        </div>
        <div className="mt-6 mx-auto h-px w-40 overflow-hidden bg-cream/10">
          <div
            className="h-full bg-gold"
            style={{ animation: "draw-line 1.4s cubic-bezier(0.7,0,0.2,1) forwards", transformOrigin: "left" }}
          />
        </div>
        <p className="mt-5 text-[0.65rem] tracking-[0.4em] uppercase text-cream/50">Savannah · Georgia</p>
      </div>
    </div>
  );
}

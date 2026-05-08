import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[55] h-[2px] bg-transparent">
      <div
        className="h-full origin-left"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, transparent, oklch(0.78 0.13 78), transparent)",
        }}
      />
    </div>
  );
}

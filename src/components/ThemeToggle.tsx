// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// type Theme = "dark" | "light";

// function getInitial(): Theme {
//   if (typeof window === "undefined") return "dark";
//   const stored = localStorage.getItem("theme") as Theme | null;
//   if (stored === "light" || stored === "dark") return stored;
//   return "dark";
// }

// export function applyTheme(theme: Theme) {
//   if (typeof document === "undefined") return;
//   const root = document.documentElement;
//   root.classList.remove("light", "dark");
//   root.classList.add(theme);
// }

// export function ThemeToggle({ className = "" }: { className?: string }) {
//   const [theme, setTheme] = useState<Theme>("dark");

//   useEffect(() => {
//     const t = getInitial();
//     setTheme(t);
//     applyTheme(t);
//   }, []);

//   const toggle = () => {
//     const next: Theme = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     applyTheme(next);
//     try { localStorage.setItem("theme", next); } catch {}
//   };

//   return (
//     <button
//       onClick={toggle}
//       aria-label="Toggle theme"
//       className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 text-cream/80 hover:text-gold hover:border-gold/60 transition-all duration-500 ${className}`}
//     >
//       <Sun size={15} className={`absolute transition-all duration-500 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
//       <Moon size={15} className={`absolute transition-all duration-500 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`} />
//     </button>
//   );
// }

"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative right-edge dotted pattern with a scroll-driven parallax.
 * Purely visual: pointer-events none, aria-hidden. Hidden below 1100px and
 * frozen when the user prefers reduced motion.
 */
export const RailPattern = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset;
        if (dotsRef.current) {
          dotsRef.current.style.transform = `translateY(${y * -0.25}px)`;
        }
        if (glowRef.current) {
          glowRef.current.style.transform = `translateY(${y * 0.12}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 z-[1] hidden w-[120px] overflow-hidden border-l border-border xl:block"
      style={{
        maskImage:
          "linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div
        ref={dotsRef}
        className="absolute inset-x-0 -top-[40%] h-[180%] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1.4px, transparent 1.6px)",
          backgroundSize: "22px 22px",
          willChange: "transform",
        }}
      />
      <div
        ref={glowRef}
        className="absolute right-[-40px] top-[20%] h-40 w-40 rounded-full blur-[10px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)/0.18), transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

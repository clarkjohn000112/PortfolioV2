"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/config/portfolio";

const { stats } = PORTFOLIO_DATA;

/** Counts up the leading number of a value like "3+", leaving text like "Banking" as-is. */
const CountUp = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2] ?? "";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target + suffix);
      return;
    }

    setDisplay("0" + suffix);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || done.current) return;
          done.current = true;
          const duration = 1200;
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-gradient block font-display text-[2rem] font-bold">
      {display}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-[10px] pb-[30px]">
      <div className="mx-auto grid max-w-[880px] grid-cols-2 gap-3.5 px-6 lg:px-12">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[var(--radius)] p-[26px_22px] glass">
            <CountUp value={stat.value} />
            <span className="mt-1.5 block text-sm text-dim">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

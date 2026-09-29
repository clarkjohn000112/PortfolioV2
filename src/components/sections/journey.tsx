"use client";

import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const { career } = PORTFOLIO_DATA;

const WEEKS = 53;
const DAYS = 7;

const LEVEL_CLASS = [
  "bg-muted",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

const pickLevel = () => {
  const r = Math.random();
  if (r < 0.4) return 0;
  if (r < 0.65) return 1;
  if (r < 0.85) return 2;
  if (r < 0.96) return 3;
  return 4;
};

/**
 * Decorative GitHub-style contribution heatmap. Generated client-side after
 * mount (random levels) so it never causes a server/client hydration mismatch.
 */
const Heatmap = () => {
  const [cells, setCells] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const generated: number[] = [];
    let tally = 0;
    for (let i = 0; i < WEEKS * DAYS; i++) {
      const level = pickLevel();
      generated.push(level);
      tally += level * 2;
    }
    setCells(generated);
    setTotal(tally);
  }, []);

  return (
    <div className="rounded-[var(--radius)] p-[26px] glass">
      <div
        className="grid grid-flow-col gap-1 overflow-hidden"
        style={{ gridTemplateRows: `repeat(${DAYS}, 1fr)` }}
        aria-hidden="true"
      >
        {cells.map((level, i) => (
          <span
            key={i}
            className={cn("aspect-square w-full rounded-[3px]", LEVEL_CLASS[level])}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {total > 0
          ? `${total.toLocaleString()}+ contributions in the last year`
          : "A year of building, shipping, and automating."}
      </p>
    </div>
  );
};

export const Journey = () => {
  return (
    <section
      id="journey"
      className="bg-gradient-to-b from-card/50 to-transparent py-[72px]"
    >
      <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-12 px-6 lg:px-12">
        <div>
          <SectionHeading num="04" label="journey" />
          <ol className="flex flex-col">
            {career.map((c, i) => (
              <li
                key={`${c.year}-${i}`}
                className="grid grid-cols-[64px_1fr] gap-[18px] border-b border-border py-[18px] transition-all last:border-0 hover:pl-2"
              >
                <span className="font-display text-base font-bold text-primary">{c.year}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold">{c.role}</span>
                  <span className="text-sm text-muted-foreground">{c.company}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHeading num="★" label="activity" />
          <Heatmap />
        </div>
      </div>
    </section>
  );
};

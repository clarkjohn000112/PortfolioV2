"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const { experience } = PORTFOLIO_DATA;

const getYear = (period: string) => period.match(/\d{4}/)?.[0] ?? "";

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-card/50 to-transparent py-[72px]"
    >
      <div className="mx-auto max-w-[880px] px-6 lg:px-12">
        <SectionHeading num="02" label="experience" action="full history →" />

        <div className="flex flex-col">
          {experience.map((job, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={`${job.company}-${i}`} className="border-b border-border last:border-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[50px_1fr_auto] items-center gap-4 py-[18px] text-left transition-all hover:pl-2.5 sm:grid-cols-[60px_1fr_auto_20px]"
                >
                  <span className="font-mono text-sm text-muted-foreground">
                    {getYear(job.period)}
                  </span>
                  <span className="flex items-center gap-2.5 font-semibold">
                    <span>{job.role}</span>
                    {job.current ? <Badge variant="live">Current</Badge> : null}
                  </span>
                  <span className="hidden text-right text-sm text-muted-foreground sm:block">
                    {job.company}
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "hidden text-muted-foreground transition-transform duration-300 sm:block",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-col gap-2.5 pb-6 pl-[62px] pr-1 sm:pl-[76px]">
                        {job.highlights.map((h) => (
                          <li
                            key={h.title}
                            className="text-dim relative pl-4 text-sm before:absolute before:left-0 before:text-primary before:content-['▹']"
                          >
                            <strong className="font-semibold text-foreground">
                              {h.title}:
                            </strong>{" "}
                            {h.detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

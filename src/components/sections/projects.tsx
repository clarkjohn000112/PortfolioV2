"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PORTFOLIO_DATA, type Project } from "@/config/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { TechIcon } from "@/components/tech-icon";
import { cn } from "@/lib/utils";

const { projects } = PORTFOLIO_DATA;

const trackOpen = (name: string) => {
  // Client-side engagement tracking hook (RULES.md analytics note).
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("project:open", { detail: { name } }));
  }
};

export const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  // Lock scroll + close on Escape while a project is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const open = (p: Project) => {
    trackOpen(p.name);
    setActive(p);
  };

  return (
    <section id="projects" className="py-[72px]">
      <div className="mx-auto max-w-[880px] px-6 lg:px-12">
        <SectionHeading num="05" label="projects" action="tap a card for details" />

        {/* Asymmetric bento grid: featured projects span two columns. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={cn(p.featured && "sm:col-span-2")}
            >
              <motion.button
                type="button"
                layoutId={`project-${p.name}`}
                onClick={() => open(p)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View details for ${p.name}`}
                className="group flex h-full w-full flex-col gap-3 rounded-[var(--radius)] p-[26px] text-left glass"
              >
                {p.badges.length ? (
                  <motion.div layout="position" className="flex flex-wrap gap-1.5">
                    {p.badges.map((b) => (
                      <Badge key={b} variant="mono">
                        {b}
                      </Badge>
                    ))}
                  </motion.div>
                ) : null}
                <motion.h3
                  layoutId={`project-title-${p.name}`}
                  className="font-display text-[1.15rem] font-semibold"
                >
                  {p.name}
                </motion.h3>
                <span className="font-mono text-xs text-muted-foreground">{p.org}</span>
                <p className="text-dim flex-1 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="tag" className="gap-1.5">
                      <TechIcon name={t} size={13} className="shrink-0" />
                      {t}
                    </Badge>
                  ))}
                </div>
                <span className="mt-1 font-mono text-[0.7rem] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  view details →
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded detail overlay */}
      <AnimatePresence>
        {active ? (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
};

const ProjectModal = ({
  project: p,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />

      {/* Card morphs from the grid via shared layoutId */}
      <motion.div
        layoutId={`project-${p.name}`}
        className="glass relative z-10 w-full max-w-[560px] overflow-hidden rounded-[var(--radius)] p-7 sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-border text-dim transition-colors hover:border-primary hover:text-primary"
        >
          <X size={16} />
        </button>

        {p.badges.length ? (
          <motion.div layout="position" className="flex flex-wrap gap-1.5 pr-10">
            {p.badges.map((b) => (
              <Badge key={b} variant="mono">
                {b}
              </Badge>
            ))}
          </motion.div>
        ) : null}

        <motion.h3
          layoutId={`project-title-${p.name}`}
          className="mt-3 font-display text-2xl font-bold"
        >
          {p.name}
        </motion.h3>
        <span className="font-mono text-xs text-muted-foreground">{p.org}</span>

        {/* Content below fades in after the card settles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <p className="text-dim mt-4 text-sm leading-relaxed">{p.description}</p>

          {p.details?.length ? (
            <ul className="mt-5 flex flex-col gap-2.5">
              {p.details.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
                  className="text-dim relative pl-4 text-sm before:absolute before:left-0 before:text-primary before:content-['▹']"
                >
                  {d}
                </motion.li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-[7px]">
            {p.tags.map((t) => (
              <Badge key={t} variant="tag" className="gap-1.5">
                <TechIcon name={t} size={13} className="shrink-0" />
                {t}
              </Badge>
            ))}
          </div>

          {(p.liveUrl || p.githubUrl) && (
            <div className="mt-6 flex gap-3">
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
                >
                  <Icon name="external-link" size={15} /> Live
                </a>
              ) : null}
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon name="github" size={15} /> Code
                </a>
              ) : null}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

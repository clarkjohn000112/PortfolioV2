"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#journey", label: "Journey" },
];

const { profile } = PORTFOLIO_DATA;

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-[60] flex h-[60px] items-center justify-between border-b border-border px-5 glass-strong lg:hidden">
        <a href="#top" className="font-display text-base font-bold">
          {profile.shortName}
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Scrim */}
      {open ? (
        <div
          className="fixed inset-0 z-[54] bg-black/30 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      ) : null}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-[55] flex w-[280px] flex-col border-r border-border p-8 glass-strong transition-transform duration-300",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between">
            <a href="#top" className="font-display text-xl font-bold tracking-tight" onClick={close}>
              {profile.shortName}
            </a>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </div>
          <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
            {profile.title}
          </p>
        </div>

        <nav className="mt-10 flex flex-col gap-0.5" aria-label="Primary">
          <span className="mb-2.5 font-mono text-[0.66rem] uppercase tracking-widest text-muted-foreground">
            Sections
          </span>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "relative py-1.5 text-sm font-medium transition-all",
                  isActive
                    ? "pl-2.5 text-foreground"
                    : "text-dim hover:pl-2.5 hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-primary transition-transform",
                    isActive ? "scale-y-100" : "scale-y-0"
                  )}
                />
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex gap-2">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-border text-dim transition-colors hover:border-primary hover:text-primary"
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
          <p className="mb-1 text-xs text-muted-foreground">
            For work &amp; collabs, reach me at
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="break-all font-mono text-sm text-primary"
          >
            {profile.email}
          </a>
        </div>
      </aside>
    </>
  );
};

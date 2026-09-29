"use client";

import { useState, type FormEvent } from "react";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const { profile } = PORTFOLIO_DATA;

/**
 * No backend/API routes (RULES.md). The form composes a mailto: URI on submit
 * and hands off to the user's mail client entirely client-side.
 */
export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { icon: "mail" as const, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "phone" as const, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    ...profile.socials
      .filter((s) => s.icon !== "mail")
      .map((s) => ({ icon: s.icon, label: s.label, value: s.handle, href: s.url })),
  ];

  const inputClass =
    "rounded-xl border border-border bg-card/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary";

  return (
    <section id="contact" className="bg-gradient-to-b from-card/50 to-transparent py-[72px]">
      <div className="mx-auto max-w-[880px] px-6 lg:px-12">
        <SectionHeading num="07" label="contact" action="let's talk" />

        <div className="glass grid grid-cols-1 gap-8 rounded-[var(--radius)] p-6 sm:p-8 md:grid-cols-[1.1fr_1fr]">
          {/* Left: pitch + quick contact links */}
          <div className="flex flex-col">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight">
              Let&apos;s build something
            </h2>
            <p className="text-dim mt-3 text-sm leading-relaxed">
              Open to roles in software engineering, backend systems, and DevOps.
              Drop a message or reach me directly.
            </p>

            <div className="mt-6 flex flex-col gap-1.5">
              {links.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={c.icon} size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.62rem] uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm transition-colors group-hover:text-primary">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: compact mailto form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={5}
              className={`${inputClass} flex-1 resize-none`}
            />
            <Button type="submit" variant="primary" className="w-full">
              <Icon name="mail" size={16} /> Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

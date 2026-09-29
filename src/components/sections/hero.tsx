"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";

const { profile } = PORTFOLIO_DATA;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden py-[120px] lg:py-[120px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(650px circle at 20% 25%, hsl(var(--primary)/0.12), transparent 50%), radial-gradient(700px circle at 82% 18%, hsl(var(--cyan)/0.12), transparent 50%)",
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[880px] px-6 lg:px-12"
      >
        {/* <motion.span
          variants={item}
          className="mb-6 inline-grid h-[50px] w-[50px] place-items-center rounded-[22px] font-display text-2xl font-bold text-white"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--cyan)))",
            boxShadow: "0 12px 30px -10px hsl(var(--primary)/0.4)",
          }}
          aria-hidden="true"
        >
          {profile.initials}
        </motion.span> */}

        <motion.p
          variants={item}
          className="mf-14px mb-5 inline-flex items-center gap-4 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-dim glass-strong"
        >
          <span className="h-4 w-4 animate-pulse-dot rounded-full bg-[hsl(var(--online))]" />
          Available for engineering &amp; DevOps roles
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient font-display text-[clamp(2.6rem,6.5vw,4.8rem)] font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 font-display text-[clamp(1.1rem,2.6vw,1.55rem)] font-semibold"
        >
          {profile.title}
        </motion.p>

        <motion.div variants={item} className="mt-5 max-w-[640px] space-y-3.5">
          {profile.intro.map((line, i) => (
            <p key={i} className="text-dim text-[1.15rem] leading-relaxed">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Icon name="map-pin" size={17} /> {profile.location}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3.5">
          <a href="#contact">
            <Button variant="primary">Get in touch</Button>
          </a>
          <a href="#projects">
            <Button variant="ghost">See my work</Button>
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-7 flex gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-[46px] w-[46px] place-items-center rounded-2xl text-dim transition-all hover:-translate-y-1 hover:border-primary hover:text-primary glass"
            >
              <Icon name={s.icon} size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

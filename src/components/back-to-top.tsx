"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible((window.scrollY || 0) > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-2xl text-primary transition-all glass-strong hover:border-primary",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3.5 opacity-0"
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
};

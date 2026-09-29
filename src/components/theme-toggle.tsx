"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark toggle. Persists the choice in localStorage under "theme".
 * The initial class is applied pre-hydration by the inline script in layout.tsx,
 * so here we only sync the button's icon state after mount.
 */
export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-dim transition-colors hover:border-primary hover:text-primary"
    >
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

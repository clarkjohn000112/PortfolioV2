import type { ReactNode } from "react";

/**
 * Self-contained inline SVG brand/tech glyphs (no external dependency).
 * Each is drawn on a 24x24 viewBox and inherits currentColor so it adapts to
 * light/dark themes. Keys are matched case-insensitively against skill names.
 */

type Glyph = { node: ReactNode; color?: string };

const G = (node: ReactNode, color?: string): Glyph => ({ node, color });

// Simple, recognizable marks. Where a precise logo isn't practical inline,
// we use a clean monogram/abstract mark that still reads well at small sizes.
const GLYPHS: Record<string, Glyph> = {
  // Languages
  "c#": G(<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />, "#68217A"),
  typescript: G(
    <>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="monospace">TS</text>
    </>,
    "#3178C6"
  ),
  javascript: G(
    <>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fill="#111" fontFamily="monospace">JS</text>
    </>,
    "#F7DF1E"
  ),
  python: G(
    <path
      fill="currentColor"
      d="M12 2c-2.5 0-4 1.2-4 3v2h4v1H6c-1.8 0-3 1.5-3 4s1.2 4 3 4h1v-2.5c0-1.9 1.5-3.5 3.5-3.5h3c1.6 0 3-1.3 3-3V5c0-1.8-1.5-3-4-3zm-1.5 2.2a1 1 0 110 2 1 1 0 010-2z"
    />,
    "#3776AB"
  ),
  php: G(<ellipse cx="12" cy="12" rx="10" ry="6" fill="currentColor" opacity="0.2" />, "#777BB4"),
  java: G(
    <path
      fill="currentColor"
      d="M9 14c-2 1-1 3 3 3s6-1 6-2-2-1-2-1 1 0 1-1-3-1-3-1m-3-3s-3 1-1 2 6 1 8 0m-6-3s-2 1 0 2 5 1 6 0"
    />,
    "#E76F00"
  ),
  "c++": G(<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />, "#00599C"),
  sql: G(<path fill="currentColor" d="M12 3c4 0 7 1.3 7 3v12c0 1.7-3 3-7 3s-7-1.3-7-3V6c0-1.7 3-3 7-3z" opacity="0.3" />, "#336791"),
  html5: G(
    <path fill="currentColor" d="M4 3l1.6 18L12 23l6.4-2L20 3H4zm12 5H9l.2 2H16l-.5 6-3.5 1-3.5-1-.2-2.5h1.8l.1 1.3 1.8.5 1.8-.5.2-2.3H8L7.5 8H16V6z" />,
    "#E34F26"
  ),
  css3: G(
    <path fill="currentColor" d="M4 3l1.6 18L12 23l6.4-2L20 3H4zm12.3 5l-.2 2-.4 5-3.7 1v.02L8.3 15l-.2-2h1.9l.1 1.3 1.9.5 1.9-.5.2-2.3H8L7.6 8h8.7z" />,
    "#1572B6"
  ),

  // Frameworks & Web
  ".net 10": G(<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />, "#512BD4"),
  ".net": G(<circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />, "#512BD4"),
  "asp.net core api": G(<rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.2" />, "#512BD4"),
  "blazor interactive server / webassembly": G(<path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7z" opacity="0.25" />, "#512BD4"),
  blazor: G(<path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7z" opacity="0.25" />, "#512BD4"),
  "node.js": G(<path fill="currentColor" d="M12 2l9 5v10l-9 5-9-5V7z" />, "#539E43"),
  "express.js": G(<path fill="currentColor" d="M2 6h20v3H2zM2 11h14v3H2zM2 16h18v3H2z" opacity="0.5" />, "#444"),
  express: G(<path fill="currentColor" d="M2 6h20v3H2zM2 11h14v3H2zM2 16h18v3H2z" opacity="0.5" />, "#444"),
  angular: G(<path fill="currentColor" d="M12 2l9 3-1.4 12L12 22l-7.6-5L3 5z" opacity="0.3" />, "#DD0031"),
  react: G(
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </>,
    "#61DAFB"
  ),

  // Databases & storage
  postgresql: G(<ellipse cx="12" cy="12" rx="8" ry="9" fill="currentColor" opacity="0.25" />, "#336791"),
  pgpool: G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />, "#336791"),
  repmgr: G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />, "#336791"),
  "ms sql server": G(<path fill="currentColor" d="M12 3c4 0 7 1.3 7 3v12c0 1.7-3 3-7 3s-7-1.3-7-3V6c0-1.7 3-3 7-3z" opacity="0.25" />, "#CC2927"),
  mysql: G(<path fill="currentColor" d="M4 16c4 3 12 3 16 0-1-3-4-6-8-6S5 13 4 16z" opacity="0.3" />, "#4479A1"),
  mongodb: G(<path fill="currentColor" d="M12 2c2 4 4 7 4 11 0 4-2 7-4 9-2-2-4-5-4-9 0-4 2-7 4-11z" />, "#47A248"),
  elasticsearch: G(<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />, "#FEC514"),
  opensearch: G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />, "#005EB8"),
  redis: G(<path fill="currentColor" d="M3 8l9-4 9 4-9 4zM3 12l9 4 9-4M3 16l9 4 9-4" opacity="0.4" />, "#DC382D"),

  // DevOps & cloud
  docker: G(<path fill="currentColor" d="M3 12h4v4H3zm5 0h4v4H8zm5 0h4v4h-4zM8 7h4v4H8zm5 0h4v4h-4zM3 16c3 3 15 3 18-3-2 0-3 .5-4 1-1-3-4-4-6-3-1-1-3-1-4 0" opacity="0.7" />, "#2496ED"),
  kubernetes: G(<path fill="currentColor" d="M12 2l8 4v8l-8 4-8-4V6z" opacity="0.25" />, "#326CE5"),
  "docker swarm": G(<path fill="currentColor" d="M4 6h6v6H4zm10 6h6v6h-6z" opacity="0.4" />, "#2496ED"),
  "github actions": G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />, "#2088FF"),
  "gitlab ci/cd": G(<path fill="currentColor" d="M12 21l-3-9H4l3 9zm0 0l3-9h5l-3 9zM4 12L6 3l3 9zm16 0l-2-9-3 9z" opacity="0.7" />, "#FC6D26"),
  jenkins: G(<circle cx="12" cy="10" r="6" fill="currentColor" opacity="0.3" />, "#D24939"),
  "linux (rhel, ubuntu)": G(<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />, "#E95420"),
  "aws ec2": G(<path fill="currentColor" d="M4 8l8-4 8 4v8l-8 4-8-4z" opacity="0.25" />, "#FF9900"),
  "shell scripting": G(<path fill="none" stroke="currentColor" strokeWidth="2" d="M5 7l5 5-5 5M12 17h7" />, "#4EAA25"),
  grafana: G(<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />, "#F46800"),
  "grafana alloy": G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />, "#F46800"),
  loki: G(<path fill="currentColor" d="M4 6h16v3H4zm0 5h16v3H4zm0 5h10v3H4z" opacity="0.5" />, "#F46800"),
  prometheus: G(<path fill="currentColor" d="M12 2a10 10 0 00-6 18h12a10 10 0 00-6-18z" opacity="0.25" />, "#E6522C"),

  // APIs & testing
  rest: G(<path fill="none" stroke="currentColor" strokeWidth="2" d="M4 12h16M8 6l-4 6 4 6M16 6l4 6-4 6" />, "#0071e3"),
  soap: G(<rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" opacity="0.2" />, "#0071e3"),
  postman: G(<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.3" />, "#FF6C37"),
  insomnia: G(<path fill="currentColor" d="M12 3a9 9 0 108 5 7 7 0 11-8-5z" opacity="0.5" />, "#4000BF"),
  soapui: G(<rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />, "#5AA700"),
  cypress: G(<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />, "#17202C"),
  "python automated testing module (patm)": G(<path fill="none" stroke="currentColor" strokeWidth="2" d="M5 12l4 4 10-10" />, "#3776AB"),
  "ef core": G(<path fill="currentColor" d="M12 3c4 0 7 1.3 7 3v12c0 1.7-3 3-7 3s-7-1.3-7-3V6c0-1.7 3-3 7-3z" opacity="0.2" />, "#512BD4"),

  // Version control
  git: G(<path fill="currentColor" d="M22 12L12 2 2 12l10 10z" opacity="0.2" />, "#F05032"),
  github: G(
    <path
      fill="currentColor"
      d="M12 2A10 10 0 002 12a10 10 0 006.8 9.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12 10 10 0 0012 2z"
    />,
    "#181717"
  ),
  gitlab: G(<path fill="currentColor" d="M12 21l-3-9H4l3 9zm0 0l3-9h5l-3 9zM4 12L6 3l3 9zm16 0l-2-9-3 9z" opacity="0.6" />, "#FC6D26"),
  svn: G(<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2" />, "#809CC9"),
};

const normalize = (s: string) => s.toLowerCase().trim();

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Renders a brand/tech glyph for a skill name, or a neutral dot fallback. */
export const TechIcon = ({ name, size = 16, className }: TechIconProps) => {
  const glyph = GLYPHS[normalize(name)];

  if (!glyph) {
    // Neutral fallback: a small ring, so unknown tools still get an icon.
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={glyph.color ? { color: glyph.color } : undefined}
      aria-hidden="true"
    >
      {glyph.node}
    </svg>
  );
};

export const hasTechIcon = (name: string) => Boolean(GLYPHS[normalize(name)]);

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const { profile } = PORTFOLIO_DATA;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.name} — ${profile.title}. ${profile.summary.slice(0, 140)}`,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: `${profile.title} | ${profile.subtitle}`,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f7",
};

/**
 * Root layout. Kept strictly synchronous per project conventions (RULES.md).
 * The theme-init script sets the persisted light/dark class before paint to
 * avoid a flash of the wrong theme (no hydration mismatch on <html>).
 */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          // Runs before hydration: applies saved theme (or system preference).
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

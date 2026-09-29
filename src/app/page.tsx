import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Sidebar } from "@/components/sidebar";
import { RailPattern } from "@/components/rail-pattern";
import { BackToTop } from "@/components/back-to-top";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

const { profile } = PORTFOLIO_DATA;
const year = new Date().getFullYear();

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <RailPattern />

      <main className="min-h-screen pt-[60px] lg:ml-[270px] lg:pt-0 xl:pr-[120px]">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Stack />
        <Journey />
        <Projects />
        <Education />
        <Contact />

        <footer className="border-t border-border py-7 glass">
          <div className="mx-auto flex max-w-[880px] flex-wrap justify-between gap-2 px-6 text-sm text-muted-foreground lg:px-12">
            <span>{profile.name}</span>
            <span>© {year} — Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </footer>
      </main>

      <BackToTop />
    </>
  );
};

export default HomePage;

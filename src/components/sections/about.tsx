import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card, CardTitle } from "@/components/ui/card";

const { profile, competencies } = PORTFOLIO_DATA;

export const About = () => {
  return (
    <section id="about" className="py-[72px]">
      <div className="mx-auto max-w-[880px] px-6 lg:px-12">
        <SectionHeading num="01" label="about" />
        <p className="text-dim mb-10 text-[1.05rem]">{profile.summary}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {competencies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <Card className="h-full transition-transform hover:-translate-y-1.5">
                <div
                  className="mb-4 grid h-12 w-12 place-items-center rounded-[14px] text-primary"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--cyan)/0.1))",
                  }}
                >
                  <Icon name={c.icon} size={22} />
                </div>
                <CardTitle className="mb-3.5">{c.title}</CardTitle>
                <ul className="flex flex-col gap-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="text-dim relative pl-4 text-sm">
                      <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

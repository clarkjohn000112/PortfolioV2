import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const { education, highlights } = PORTFOLIO_DATA;

const IconTile = ({ children }: { children: React.ReactNode }) => (
  <div
    className="grid h-[46px] min-w-[46px] place-items-center rounded-[14px] text-primary"
    style={{
      background: "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--cyan)/0.1))",
    }}
  >
    {children}
  </div>
);

export const Education = () => {
  return (
    <section id="education" className="py-[72px]">
      <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <SectionHeading num="06" label="education" />
          <div className="flex flex-col gap-4">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.05}>
                <article className="flex gap-4 rounded-[var(--radius)] p-6 transition-transform hover:-translate-y-1 glass">
                  <IconTile>
                    <Icon name="graduation" size={22} />
                  </IconTile>
                  <div>
                    <h3 className="font-display text-[1.04rem] font-semibold">{e.degree}</h3>
                    <p className="text-dim text-sm">{e.school}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading num="★" label="highlights" />
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05}>
                <article className="flex gap-4 rounded-[var(--radius)] p-6 transition-transform hover:-translate-y-1 glass">
                  <IconTile>
                    <Icon name={h.icon} size={22} />
                  </IconTile>
                  <div>
                    <h3 className="font-display text-[1.04rem] font-semibold">{h.title}</h3>
                    <p className="text-dim text-sm">{h.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

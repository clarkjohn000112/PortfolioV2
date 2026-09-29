import { PORTFOLIO_DATA } from "@/config/portfolio";
import { Icon } from "@/components/icon";
import { TechIcon } from "@/components/tech-icon";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const { skillGroups } = PORTFOLIO_DATA;

export const Stack = () => {
  return (
    <section id="skills" className="py-[72px]">
      <div className="mx-auto max-w-[880px] px-6 lg:px-12">
        <SectionHeading num="03" label="stack" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <Card className="h-full">
                <div className="mb-[18px] flex items-center gap-3">
                  <span
                    className="grid h-[42px] w-[42px] place-items-center rounded-xl text-[hsl(var(--cyan))]"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--cyan)/0.1))",
                    }}
                  >
                    <Icon name={group.icon} size={20} />
                  </span>
                  <h3 className="font-display text-[1.08rem] font-semibold">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-[7px]">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="tag" className="gap-1.5">
                      <TechIcon name={skill} size={14} className="shrink-0" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

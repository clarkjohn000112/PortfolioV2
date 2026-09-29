import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-semibold transition-colors",
  {
    variants: {
      variant: {
        accent:
          "bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs",
        live: "bg-primary/10 text-primary border border-primary/30 px-3 py-0.5 text-[0.72rem] tracking-wide",
        mono: "font-mono bg-muted text-foreground border border-border px-2.5 py-1 text-[0.66rem] tracking-wide font-medium",
        tag: "font-mono bg-background/60 text-dim border border-border rounded-lg px-2.5 py-1 text-[0.76rem] hover:text-primary hover:border-primary hover:bg-primary/10",
      },
    },
    defaultVariants: {
      variant: "accent",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export { Badge, badgeVariants };

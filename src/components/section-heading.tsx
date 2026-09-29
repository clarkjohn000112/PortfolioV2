import type { ReactNode } from "react";

interface SectionHeadingProps {
  num: string;
  label: string;
  action?: ReactNode;
  center?: boolean;
}

/** "01 — about" mono section header with an optional right-aligned action. */
export const SectionHeading = ({ num, label, action, center }: SectionHeadingProps) => {
  return (
    <div className={center ? "shead justify-center border-b-0 mb-3" : "shead"}>
      <span className="shead__label">
        <span className="shead__num">{num}</span> — {label}
      </span>
      {action ? (
        <span className="font-mono text-xs text-muted-foreground">{action}</span>
      ) : null}
    </div>
  );
};

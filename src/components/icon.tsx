import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Layers,
  Database,
  Server,
  CheckCircle2,
  Code2,
  LayoutGrid,
  Cloud,
  Activity,
  GitBranch,
  Shield,
  Award,
  Briefcase,
  GraduationCap,
  ArrowUp,
  ExternalLink,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/config/portfolio";

/**
 * Brand icons (LinkedIn, GitHub) are no longer shipped by lucide-react, so we
 * provide them as small inline SVGs with the same props signature as lucide.
 */
const LinkedinIcon = ({ size = 20, className, ...rest }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.76V1.74C24 .78 23.2 0 22.22 0z" />
  </svg>
);

const GithubIcon = ({ size = 20, className, ...rest }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const ICONS: Record<IconName, LucideIcon | ((props: LucideProps) => React.JSX.Element)> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  globe: Globe,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  layers: Layers,
  database: Database,
  server: Server,
  "check-circle": CheckCircle2,
  code: Code2,
  layout: LayoutGrid,
  cloud: Cloud,
  activity: Activity,
  "git-branch": GitBranch,
  shield: Shield,
  award: Award,
  briefcase: Briefcase,
  graduation: GraduationCap,
  "arrow-up": ArrowUp,
  "external-link": ExternalLink,
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

/** Renders an icon by our internal IconName token (lucide + custom brand SVGs). */
export const Icon = ({ name, className, size = 20 }: IconProps) => {
  const Comp = ICONS[name];
  return <Comp className={className} size={size} aria-hidden="true" />;
};

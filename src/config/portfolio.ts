/**
 * Immutable, hardcoded configuration schema for all site content.
 * This is the single source of truth for the portfolio (RULES.md).
 * Update this file directly when adding projects, experience, or skills.
 */

export type IconName =
  | "linkedin"
  | "github"
  | "globe"
  | "mail"
  | "phone"
  | "map-pin"
  | "layers"
  | "database"
  | "server"
  | "check-circle"
  | "code"
  | "layout"
  | "cloud"
  | "activity"
  | "git-branch"
  | "shield"
  | "award"
  | "briefcase"
  | "graduation"
  | "arrow-up"
  | "external-link";

export interface Social {
  label: string;
  url: string;
  handle: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  intro: string[];
  summary: string;
  socials: Social[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Competency {
  title: string;
  icon: IconName;
  items: string[];
}

export interface ExperienceHighlight {
  title: string;
  detail: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: ExperienceHighlight[];
}

export interface SkillGroup {
  category: string;
  icon: IconName;
  skills: string[];
}

export interface Project {
  name: string;
  org: string;
  badges: string[];
  description: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  /** Detail bullets shown in the expanded project view. */
  details?: string[];
}

export interface CareerEntry {
  year: string;
  role: string;
  company: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Highlight {
  title: string;
  detail: string;
  icon: IconName;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  competencies: Competency[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  projects: Project[];
  career: CareerEntry[];
  education: Education[];
  highlights: Highlight[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Clark John Casin",
    shortName: "Clark John Casin",
    initials: "CJC",
    title: "End-to-End Software Engineer | DevOps Engineer | AI Engineer",
    subtitle: "Backend & Full-Stack Engineering",
    location: "Makati City, Philippines",
    phone: "+639622375960",
    email: "clarktoledana01@gmail.com",
    intro: [
      "I'm an end-to-end software and DevOps engineer. I build enterprise applications and backend services, and lately I'm focused on platform engineering and automation.",
      "Right now I'm leading the SuperDevOps platform at PSBank, keeping mission-critical banking systems fast, reliable, and always on.",
    ],
    summary:
      "Versatile Software Engineer & DevOps Specialist with extensive experience delivering end-to-end enterprise applications and backend services. Proficient across application architecture, API engineering, database design, containerized deployments, CI/CD automation, and high-availability operations. Proven expertise building .NET 10 / Blazor Interactive Server applications, Node.js/Express APIs, Angular frontends, microservices, and database-driven systems. Experienced operating in banking and high-concurrency enterprise environments, seamlessly navigating the software lifecycle from initial development and automated testing through deployment, optimization, and production support.",
    socials: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/clark-john-casin",
        handle: "clark-john-casin",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        url: "https://github.com/clarkjohn000112",
        handle: "clarkjohn000112",
        icon: "github",
      },
      {
        label: "Email",
        url: "mailto:clarktoledana01@gmail.com",
        handle: "clarktoledana01@gmail.com",
        icon: "mail",
      },
    ],
  },
  stats: [
    { value: "3+", label: "Years Professional Experience" },
    { value: "10+", label: "Enterprise Systems Delivered" },
    { value: "20+", label: "Technologies Mastered" },
    { value: "Fintech", label: "Regulated Domain Expertise" },
  ],
  competencies: [
    {
      title: "End-to-End & Backend Engineering",
      icon: "layers",
      items: [
        "Application Architecture",
        ".NET 10",
        "Blazor Interactive Server",
        "Node.js",
        "Express",
        "REST/SOAP APIs",
        "Microservices",
        "Full-Stack Development",
      ],
    },
    {
      title: "Databases & Platforms",
      icon: "database",
      items: [
        "PostgreSQL (PGPool, REPMGR)",
        "MS SQL Server",
        "MySQL",
        "MongoDB",
        "Elasticsearch",
        "OpenSearch",
        "SQL Optimization",
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: "server",
      items: [
        "Docker",
        "Kubernetes",
        "Docker Swarm",
        "Linux (RHEL, Ubuntu)",
        "CI/CD Pipelines",
        "SuperDevOps Tools",
        "Server Automation",
        "High Availability",
      ],
    },
    {
      title: "Quality & Automation",
      icon: "check-circle",
      items: [
        "Cypress",
        "Python Automated Testing",
        "GitHub Actions",
        "GitLab CI/CD",
        "Jenkins",
        "Shell Scripting",
        "Regression Testing",
      ],
    },
  ],
  experience: [
    {
      company: "Philippine Savings Bank (PSBank)",
      role: "DevOps Engineer",
      period: "April 2026 – Present",
      location: "Metro Manila, PH",
      current: true,
      highlights: [
        {
          title: "SuperDevOps Platform Engineering",
          detail:
            "Lead the end-to-end design and development of the enterprise SuperDevOps Tool built on .NET 10 and Blazor Interactive Server, streamlining internal infrastructure workflows, automated releases, and system orchestration.",
        },
        {
          title: "Enterprise Banking Infrastructure",
          detail:
            "Direct the deployment, operational maintenance, and high-availability support for mission-critical enterprise banking applications and server infrastructure.",
        },
        {
          title: "Production & Incident Management",
          detail:
            "Rapidly diagnose and resolve complex multi-tier issues across application code, Linux servers, containerized workloads, networking, and clustered databases to ensure strict SLAs.",
        },
        {
          title: "Cross-Functional Collaboration",
          detail:
            "Partner closely with development, cybersecurity, and IT operations teams to streamline application release cycles and security compliance.",
        },
        {
          title: "Operational Automation",
          detail:
            "Architect server-side automation scripts, custom management tools, and CI/CD enhancements aimed at eliminating manual deployment overhead and lowering production risk.",
        },
      ],
    },
    {
      company: "OneTool Solutions PH",
      role: "End-to-End Software Engineer",
      period: "September 2023 – April 2026",
      location: "Philippines",
      current: false,
      highlights: [
        {
          title: "Full-Lifecycle Delivery",
          detail:
            "Spearheaded complete application development cycles, building enterprise services using Node.js, Express, .NET, Angular, and MS SQL Server.",
        },
        {
          title: "Container Orchestration",
          detail:
            "Configured and maintained production container workloads using Docker and Kubernetes, improving application deployment speed and scalability.",
        },
        {
          title: "High-Availability Clustering",
          detail:
            "Administered and monitored critical high-availability database clusters including PostgreSQL/PGPool, REPMGR, MySQL clusters, MongoDB, and Elasticsearch/ELK.",
        },
        {
          title: "CI/CD & Server Automation",
          detail:
            "Built automated deployment workflows using GitHub Actions, GitLab CI/CD, and Jenkins; engineered cron jobs and shell scripts for automated maintenance.",
        },
        {
          title: "Multi-Layer Troubleshooting",
          detail:
            "Performed root-cause diagnosis across operating systems (RHEL/Ubuntu), API gateways, database locks, and application code.",
        },
      ],
    },
    {
      company: "OneTool Solutions PH",
      role: "Backend Developer / Engineer — ATM Microservices",
      period: "September 2023 – April 2026",
      location: "Philippines",
      current: false,
      highlights: [
        {
          title: "Financial Microservices",
          detail:
            "Architected high-throughput Node.js microservices to process backend transactions for enterprise ATM switch systems.",
        },
        {
          title: "API Integration & Reliability",
          detail:
            "Implemented robust REST and SOAP integrations verified through Postman and SoapUI, ensuring zero transactional drop-off.",
        },
      ],
    },
    {
      company: "OneTool Solutions PH",
      role: "Full-Stack Developer — Employee Reward & BIR Liquidation Systems",
      period: "September 2023 – April 2026",
      location: "Philippines",
      current: false,
      highlights: [
        {
          title: "Enterprise Web Applications",
          detail:
            "Authored responsive frontend interfaces in Angular & TypeScript integrated with Node.js/Express APIs and MS SQL Server.",
        },
        {
          title: "Compliance Systems",
          detail:
            "Successfully delivered the internal Employee Reward System and official BIR Liquidation System aligned with corporate financial workflows.",
        },
      ],
    },
    {
      company: "Achieve Without Borders Inc.",
      role: "Quality Engineer Intern",
      period: "December 2022 – February 2023",
      location: "Philippines",
      current: false,
      highlights: [
        {
          title: "QA & Test Execution",
          detail:
            "Designed and executed functional, manual, and regression test suites to systematically eliminate critical software bugs prior to production releases.",
        },
        {
          title: "Automated Testing",
          detail:
            "Assisted engineering teams in diagnosing software defect root causes and introduced automated testing modules.",
        },
      ],
    },
  ],
  skillGroups: [
    {
      category: "Languages",
      icon: "code",
      skills: ["C#", "TypeScript", "JavaScript", "Python", "PHP", "Java", "C++", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Web",
      icon: "layout",
      skills: [
        ".NET 10",
        "ASP.NET Core API",
        "Blazor Interactive Server / WebAssembly",
        "Node.js",
        "Express.js",
        "Angular",
        "React",
      ],
    },
    {
      category: "Databases & Storage",
      icon: "database",
      skills: ["PostgreSQL", "PGPool", "REPMGR", "MS SQL Server", "MySQL", "MongoDB", "Elasticsearch", "OpenSearch"],
    },
    {
      category: "DevOps & Cloud",
      icon: "cloud",
      skills: [
        "Docker",
        "Kubernetes",
        "Docker Swarm",
        "GitHub Actions",
        "GitLab CI/CD",
        "Jenkins",
        "Linux (RHEL, Ubuntu)",
        "AWS EC2",
        "Shell Scripting",
      ],
    },
    {
      category: "APIs & Testing",
      icon: "activity",
      skills: ["REST", "SOAP", "Postman", "Insomnia", "SoapUI", "Cypress", "Python Automated Testing Module (PATM)"],
    },
    {
      category: "Version Control",
      icon: "git-branch",
      skills: ["Git", "GitHub", "GitLab", "SVN"],
    },
  ],
  projects: [
    {
      name: "SuperDevOps Tool",
      org: "PSBank",
      badges: ["Flagship Platform", "Enterprise Banking"],
      description:
        "Enterprise DevOps platform on .NET 10 and Blazor Interactive Server that streamlines infrastructure workflows, automated releases, and system orchestration.",
      tags: [".NET 10", "Blazor", "CI/CD", "Automation"],
      featured: true,
      details: [
        "Led end-to-end design and development of the platform on .NET 10 and Blazor Interactive Server.",
        "Automated internal infrastructure workflows, releases, and cluster state syncs to cut manual deployment overhead.",
        "Integrated CI/CD pipeline triggers and low-overhead container log extraction for faster diagnostics.",
        "Built for high-availability banking operations with strict SLA and security compliance requirements.",
      ],
    },
    {
      name: "ATM Switch Microservices",
      org: "OneTool Solutions PH",
      badges: ["Zero Drop-off", "High Throughput"],
      description:
        "High-throughput Node.js microservices processing backend transactions for enterprise ATM switch systems with REST/SOAP integrations and zero transactional drop-off.",
      tags: ["Node.js", "Microservices", "REST/SOAP", "Fintech"],
      featured: true,
      details: [
        "Architected high-throughput Node.js microservices for enterprise ATM switch transaction processing.",
        "Implemented robust REST and SOAP integrations verified through Postman and SoapUI.",
        "Engineered for reliability with zero transactional drop-off under heavy concurrency.",
        "Supported multi-tier troubleshooting across API gateways, databases, and application code.",
      ],
    },
    {
      name: "BIR Liquidation System",
      org: "OneTool Solutions PH",
      badges: ["Compliance"],
      description:
        "Official compliance platform built with Angular, TypeScript, Node.js/Express, and MS SQL Server aligned with corporate financial workflows.",
      tags: ["Angular", "TypeScript", "Express", "MS SQL"],
      featured: false,
      details: [
        "Delivered the official BIR Liquidation System aligned with corporate financial workflows.",
        "Authored responsive Angular & TypeScript frontends integrated with Node.js/Express APIs.",
        "Backed by MS SQL Server for durable, compliant record keeping.",
      ],
    },
    {
      name: "Employee Reward System",
      org: "OneTool Solutions PH",
      badges: ["Internal Tool"],
      description:
        "Internal enterprise web application with responsive Angular frontends integrated to Node.js/Express APIs backed by MS SQL Server.",
      tags: ["Angular", "Node.js", "Enterprise", "Full-Stack"],
      featured: false,
      details: [
        "Built an internal Employee Reward System used across corporate teams.",
        "Responsive Angular frontend wired to Node.js/Express APIs and MS SQL Server.",
        "Full-stack delivery from data model through UI and deployment.",
      ],
    },
  ],
  career: [
    {
      year: "2026",
      role: "DevOps Engineer / Jr. Assistant Manager",
      company: "Philippine Savings Bank (PSBank)",
    },
    { year: "2023", role: "End-to-End Software Engineer", company: "OneTool Solutions PH" },
    { year: "2023", role: "Backend Engineer — ATM Microservices", company: "OneTool Solutions PH" },
    { year: "2022", role: "Quality Engineer Intern", company: "Achieve Without Borders Inc." },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "National University – Laguna",
      period: "June 2019 – July 2023",
    },
    {
      degree: "Senior High School – Information and Communications Technology (ICT)",
      school: "STI College Calamba",
      period: "June 2017 – April 2019",
    },
  ],
  highlights: [
    {
      title: "Full-Stack & Infrastructure Versatility",
      detail:
        "Seamlessly bridges the gap between modern .NET / Blazor software development, database administration, QA testing, and DevOps automation.",
      icon: "layers",
    },
    {
      title: "Domain Expertise",
      detail:
        "Proven experience in highly regulated financial and enterprise environments (banking systems, ATM switch networks, SuperDevOps tooling, liquidation platforms).",
      icon: "shield",
    },
    {
      title: "Hackathon Recognition",
      detail:
        "Honored through global and national hackathon awards for rapid solution engineering, analytical thinking, and high-pressure problem solving.",
      icon: "award",
    },
  ],
};

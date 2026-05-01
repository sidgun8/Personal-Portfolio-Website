export interface ProjectType {
  title: string;
  description: string[];
  tech: string[];
  category: "tech" | "business";
  images?: string[];
  links: { name: string, link: string }[]
  dir_name?: string;
}

export const projectsData: ProjectType[] = [
  {
    title: 'Multilingual Industrial Safety Copilot',
    category: "tech",
    description: [
      "Built an Industrial AI assistant that helps operators retrieve SOPs, hazard controls, and troubleshooting guidance in real time.",
      "Implemented a hybrid retrieval architecture with semantic vector search and keyword matching for higher precision on plant documentation.",
      "Integrated multilingual support so operators can query safety procedures in practical, field-ready language.",
      "Deployed with an AWS-backed architecture for reliable inference and faster iteration during pilot rollouts."
    ],
    tech: ['Python', 'RAG', 'AWS', 'Industrial AI'],
    links: [
      { name: "Code", link: "https://github.com/sidgun8/Industrial-Safety-for-Indian-Chemical-Plants-QA" }
    ]
  },
  {
    title: 'NDY - Not Done Yet',
    category: "business",
    description: [
      "Founded NDY as a rapid prototyping venture to turn early ideas into production-ready products quickly.",
      "Shipped web-first workflows with a focus on performance, iterative delivery, and practical user feedback loops.",
      "Built infrastructure and automation patterns that reduce handoff time from prototype to stable release.",
      "Use NDY as a platform to experiment with AI-enabled product and operations systems."
    ],
    tech: ['Rapid Prototyping', 'Product Engineering', 'Infra', 'AWS'],
    links: [
      { name: "Demo", link: "https://www.notdoneyet.in/" },
      { name: "Code", link: "https://github.com/sidgun8" }
    ]
  },
  {
    title: 'Industrial Simulation and Optimization Toolkit',
    category: "tech",
    description: [
      "Created simulation-backed decision workflows combining ASPEN Plus and DWSIM outputs with Python-based analytics.",
      "Designed reusable optimization templates for process tuning, sensitivity checks, and rapid feasibility exploration.",
      "Built reporting pipelines to turn simulation outputs into actionable operating recommendations for stakeholders.",
      "Focused on fast prototyping and transparent assumptions to accelerate engineering decisions."
    ],
    tech: ['ASPEN Plus', 'DWSIM', 'Python', 'Optimization'],
    links: [
      { name: "Code", link: "https://github.com/sidgun8" }
    ]
  },
  {
    title: 'SidGun08 YouTube Channel Growth',
    category: "business",
    description: [
      "Built a focused YouTube presence to document practical engineering, systems thinking, and execution lessons.",
      "Positioned video content as a business-facing communication channel for visibility, trust, and inbound opportunities.",
      "Use the channel to translate technical depth into accessible narratives for broader audiences.",
      "Integrates content strategy with the broader NDY and personal brand direction."
    ],
    tech: ['Content Strategy', 'Brand Building', 'Community', 'Management'],
    links: [
      { name: "Demo", link: "https://www.youtube.com/@SidGun08" }
    ]
  },
];
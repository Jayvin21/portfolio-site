import hrDashboard from "../hr-flow-ss/01-dashboard-command-center.png";
import hrCandidates from "../hr-flow-ss/03-candidates-parsed-profiles.png";
import hrCommunications from "../hr-flow-ss/07-communications-queue.png";

// AUDITPAL_SCREENSHOT_IMPORTS_START
import auditPal1 from "../auditpal-ss/01_landing_page.png";
import auditPal2 from "../auditpal-ss/05_column_mapping_module_fields.png";
import auditPal3 from "../auditpal-ss/09_findings_review.png";
import auditPal4 from "../auditpal-ss/13_reports_export.png";
// AUDITPAL_SCREENSHOT_IMPORTS_END



import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaCode,
  FaRobot,
  FaBrain,
  FaSearch,
  FaFileAlt,
  FaChartLine,
  FaNetworkWired,
  FaProjectDiagram,
  FaCogs,
  FaLock,
  FaLayerGroup,
  FaCodeBranch,
  FaSitemap,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaFileExcel,
  FaCloud,
  FaPaintBrush,
  FaFire,
  FaBolt,
} from "react-icons/fa";

export const profile = {
  name: "Jayvin Parmar",
  badge: "Full-Stack Engineer • AI Systems • Automation",
  headline: "I build intelligent systems that turn complexity into clarity.",
  subline: "Full-Stack Apps • AI Agents • RAG Systems • Automation • Data Dashboards",
  description:
    "I build full-stack apps, AI workflows, RAG systems, automations, and dashboards that make complex work easier to understand, use, and scale.",
  email: "jayvin.parmar@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayvin-parmar-j21/",
  github: "https://github.com/Jayvin21",
};

export const techRowOne = [
  "React",
  "Vite",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Python",
  "REST APIs",
  "JWT Auth",
  "MongoDB",
  "PostgreSQL",
  "SQL",
  "Git",
  "GitHub",
  "Vercel",
];

export const techRowTwo = [
  "Pandas",
  "NumPy",
  "LLMs",
  "RAG",
  "Embeddings",
  "Vector Search",
  "Document Parsing",
  "CSV Processing",
  "Dashboards",
  "Automation",
  "Data Structures",
  "Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "System Design Basics",
  "Software Engineering",
];

export const projects = [
  {
    title: "AuditPal",
    subtitle: "Agentic Audit Automation Platform",
    description:
      "Full-stack audit automation platform for Excel-heavy audit workflows. AuditPal lets users upload CSV/XLSX accounting exports, classify file types, map messy columns, extract normalized records, run 11 audit modules, review evidence-backed findings, use an agentic Audit Chat assistant, and export CSV/PDF reports.",
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "SQLite",
      "Pandas",
      "OpenPyXL",
      "Audit Automation",
      "Agentic AI",
      "Rule Engine",
      "PDF Reports"
    ],
    demo: "https://youtu.be/7ILILgUMo-Q",
    github: "https://github.com/Jayvin21AuditPal",
    live: "#",
    visual: "audit",
    status: "Star Project",
    images: [auditPal1, auditPal2, auditPal3, auditPal4],
  },
  {
    title: "AskSheets AI",
    subtitle: "AI Spreadsheet Analyst",
    description:
      "Workspace-based data analysis platform where users upload CSV files, preview dataset health, ask natural-language questions, and generate summaries, tables, charts, downloadable outputs, and business insights from structured data.",
    tech: [
      "React",
      "FastAPI",
      "Python",
      "Pandas",
      "CSV Processing",
      "LLMs",
      "Data Analysis",
      "Charts",
      "Automation"
    ],
    demo: "https://youtu.be/H-amSXnkhlQ",
    github: "https://github.com/Jayvin21AskSheets",
    live: "#",
    visual: "ai-query",
    status: "MVP Complete",
    images: [
      "/projects/asksheets/01-upload-preview.png",
      "/projects/asksheets/02-csv-health.png",
      "/projects/asksheets/03-ai-analyst.png",
      "/projects/asksheets/04-chat-response-downloads.png",
    ],
  },
  {
    title: "HRFlow RAG AI",
    subtitle: "AI HR Operations Platform",
    description:
      "Full-stack HR command center that converts resumes, job descriptions, attendance sheets, and HR issues into structured workflows. It includes document intelligence, resume parsing, JD matching, attendance analysis, communication queues, email and letter generators, interview packs, cases, and a dashboard command center.",
    tech: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "SQLite",
      "Pandas",
      "Document Parsing",
      "RAG",
      "Automation",
      "Dashboards"
    ],
    demo: "https://youtu.be/D3jKEjYy0B4",
    github: "https://github.com/Jayvin21HR-Flow-Agent",
    live: "#",
    visual: "dashboard",
    status: "MVP Complete",
    images: [hrDashboard, hrCandidates, hrCommunications],
  },
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Building clean, responsive, product-focused interfaces.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: FaBolt },
      { name: "JavaScript", icon: FaCode },
      { name: "TypeScript", icon: FaCode },
      { name: "Tailwind CSS", icon: FaPaintBrush },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "UI Components", icon: FaLayerGroup },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Designing APIs, server logic, auth flows, and backend services.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaServer },
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: FaServer },
      { name: "REST APIs", icon: FaSitemap },
      { name: "JWT Auth", icon: FaLock },
      { name: "Socket.io", icon: FaNetworkWired },
      { name: "API Design", icon: FaSitemap },
    ],
  },
  {
    title: "AI, Data & Automation",
    description: "Working with data pipelines, AI workflows, and intelligent systems.",
    skills: [
      { name: "LLMs", icon: FaRobot },
      { name: "RAG", icon: FaSearch },
      { name: "Embeddings", icon: FaBrain },
      { name: "Vector Search", icon: FaProjectDiagram },
      { name: "Document Parsing", icon: FaFileAlt },
      { name: "Pandas", icon: FaChartLine },
      { name: "NumPy", icon: FaProjectDiagram },
      { name: "Automation", icon: FaCogs },
    ],
  },
  {
    title: "Database & Analytics",
    description: "Managing structured data, dashboards, and analysis workflows.",
    skills: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "PostgreSQL", icon: FaDatabase },
      { name: "Firebase", icon: FaFire },
      { name: "SQL", icon: FaDatabase },
      { name: "Power BI", icon: FaChartLine },
      { name: "Excel", icon: FaFileExcel },
      { name: "Dashboards", icon: FaChartLine },
      { name: "CSV Processing", icon: FaFileAlt },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Using modern development tools for shipping and collaboration.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Postman", icon: FaServer },
      { name: "VS Code", icon: FaCode },
      { name: "Vercel", icon: FaCloud },
      { name: "Figma", icon: FaPaintBrush },
      { name: "Linux", icon: FaLinux },
    ],
  },
  {
    title: "Computer Engineering Core",
    description: "Strong fundamentals from computer engineering coursework.",
    skills: [
      { name: "Data Structures", icon: FaProjectDiagram },
      { name: "Algorithms", icon: FaCodeBranch },
      { name: "OOP", icon: FaCode },
      { name: "DBMS", icon: FaDatabase },
      { name: "Operating Systems", icon: FaServer },
      { name: "Computer Networks", icon: FaNetworkWired },
      { name: "C++", icon: FaCode },
      { name: "Java", icon: FaJava },
    ],
  },
];




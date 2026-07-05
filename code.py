from pathlib import Path

ROOT = Path(r"D:\Portfolio\portfolio-site")
SRC = ROOT / "src"

# Find the portfolio data file automatically.
candidates = list(SRC.rglob("*.js")) + list(SRC.rglob("*.jsx")) + list(SRC.rglob("*.ts")) + list(SRC.rglob("*.tsx"))
portfolio_file = None

for file in candidates:
    text = file.read_text(encoding="utf-8", errors="ignore")
    if "export const projects" in text and "AskSheets AI" in text and "HRFlow RAG AI" in text:
        portfolio_file = file
        break

if not portfolio_file:
    raise FileNotFoundError("Could not find the portfolio data file containing export const projects.")

auditpal_dir = SRC / "auditpal-ss"
if not auditpal_dir.exists():
    raise FileNotFoundError(f"AuditPal screenshots folder not found: {auditpal_dir}")

image_files = sorted(
    [
        file for file in auditpal_dir.iterdir()
        if file.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp", ".svg"}
    ]
)

if len(image_files) < 4:
    raise ValueError(f"Expected at least 4 AuditPal images in {auditpal_dir}, found {len(image_files)}")

auditpal_images = image_files[:4]

text = portfolio_file.read_text(encoding="utf-8")

# Remove old generated AuditPal imports if script is rerun.
start_marker = "// AUDITPAL_SCREENSHOT_IMPORTS_START"
end_marker = "// AUDITPAL_SCREENSHOT_IMPORTS_END"

if start_marker in text and end_marker in text:
    start = text.index(start_marker)
    end = text.index(end_marker) + len(end_marker)
    text = text[:start] + text[end:].lstrip()

import_lines = [start_marker]
for index, image in enumerate(auditpal_images, start=1):
    import_lines.append(
        f'import auditPal{index} from "../auditpal-ss/{image.name}";'
    )
import_lines.append(end_marker)
import_block = "\n".join(import_lines) + "\n\n"

# Insert after HR imports if possible.
insert_after = 'import hrCommunications from "../hr-flow-ss/07-communications-queue.png";'
if insert_after in text:
    text = text.replace(insert_after, insert_after + "\n\n" + import_block)
else:
    # Fallback: insert before react-icons import.
    text = text.replace("import {\n  FaReact,", import_block + "import {\n  FaReact,")

projects_start = text.index("export const projects = [")
skillgroups_start = text.index("export const skillGroups", projects_start)

new_projects = r'''export const projects = [
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
    github: "https://github.com/Jayvin21/AuditPal",
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
    github: "https://github.com/Jayvin21/AskSheets",
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
    github: "https://github.com/Jayvin21/HR-Flow-Agent",
    live: "#",
    visual: "dashboard",
    status: "MVP Complete",
    images: [hrDashboard, hrCandidates, hrCommunications],
  },
];

'''

text = text[:projects_start] + new_projects + text[skillgroups_start:]

portfolio_file.write_text(text, encoding="utf-8")

print("Updated portfolio projects.")
print(f"File: {portfolio_file}")
print("AuditPal images used:")
for image in auditpal_images:
    print(f"- {image.name}")
print("Project order:")
print("1. AuditPal")
print("2. AskSheets AI")
print("3. HRFlow RAG AI")
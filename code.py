from pathlib import Path
import shutil
import re

ROOT = Path(r"D:\Portfolio\portfolio-site")
SRC = ROOT / "src"
PUBLIC = ROOT / "public"

RESUME_SOURCE = SRC / "assets" / "Jayvin-Resume-26.pdf"
RESUME_PUBLIC = PUBLIC / "Jayvin-Resume-26.pdf"
RESUME_URL = "/Jayvin-Resume-26.pdf"

if not RESUME_SOURCE.exists():
    raise FileNotFoundError(f"Resume PDF not found: {RESUME_SOURCE}")

PUBLIC.mkdir(exist_ok=True)
shutil.copy2(RESUME_SOURCE, RESUME_PUBLIC)

print(f"Copied resume to: {RESUME_PUBLIC}")

target_exts = {".js", ".jsx", ".ts", ".tsx"}
updated_files = []

for file in SRC.rglob("*"):
    if file.suffix.lower() not in target_exts:
        continue

    text = file.read_text(encoding="utf-8", errors="ignore")
    original = text
    lower = text.lower()

    # Only touch files that likely contain resume/CV/download buttons.
    if not any(keyword in lower for keyword in ["resume", "cv", "download"]):
        continue

    # Replace common placeholder links in resume-related files.
    text = re.sub(
        r'href=(["\'])#\1',
        f'href="{RESUME_URL}"',
        text
    )

    text = re.sub(
        r'href=\{(["\'])#\1\}',
        f'href="{RESUME_URL}"',
        text
    )

    text = re.sub(
        r'to=(["\'])#\1',
        f'to="{RESUME_URL}"',
        text
    )

    text = re.sub(
        r'to=\{(["\'])#\1\}',
        f'to="{RESUME_URL}"',
        text
    )

    # Replace old resume paths if any exist.
    text = re.sub(
        r'(["\'])[^"\']*resume[^"\']*\.pdf\1',
        f'"{RESUME_URL}"',
        text,
        flags=re.IGNORECASE
    )

    text = re.sub(
        r'(["\'])[^"\']*cv[^"\']*\.pdf\1',
        f'"{RESUME_URL}"',
        text,
        flags=re.IGNORECASE
    )

    # Add download attribute to anchor tags that point to the resume, if missing.
    text = re.sub(
        r'(<a\b(?=[^>]*href="/Jayvin-Resume-26\.pdf")(?![^>]*\bdownload\b)[^>]*)(>)',
        r'\1 download\2',
        text
    )

    # Add target/rel if the button opens as normal link and does not have download.
    # We leave download links alone.

    if text != original:
        file.write_text(text, encoding="utf-8")
        updated_files.append(file)

print("\nUpdated files:")
for file in updated_files:
    print(f"- {file}")

if not updated_files:
    print("- No matching JSX/TSX files were changed.")
    print("Resume was still copied to public. Manually set buttons to href='/Jayvin-Resume-26.pdf' if needed.")

print("\nUse this link in React buttons:")
print(RESUME_URL)
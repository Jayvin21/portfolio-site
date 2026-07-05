from pathlib import Path
import re

ROOT = Path(r"D:\Portfolio\portfolio-site")
SRC = ROOT / "src"

CORRECT_GITHUB = "https://github.com/Jayvin21"
CORRECT_LINKEDIN = "https://www.linkedin.com/in/jayvin-parmar-j21/"
CORRECT_EMAIL = "jayvin.parmar@gmail.com"

updated = []

for file in SRC.rglob("*"):
    if file.suffix.lower() not in {".js", ".jsx", ".ts", ".tsx"}:
        continue

    text = file.read_text(encoding="utf-8", errors="ignore")
    original = text

    # Fix wrong profile object values / contact links.
    text = text.replace("https://github.com/jayvinparmar", CORRECT_GITHUB)
    text = text.replace("https://github.com/Jayvin21/", CORRECT_GITHUB)
    text = text.replace("https://github.com/Jayvin21", CORRECT_GITHUB)

    text = text.replace("https://linkedin.com/in/jayvinparmar", CORRECT_LINKEDIN)
    text = text.replace("https://www.linkedin.com/in/jayvinparmar", CORRECT_LINKEDIN)
    text = text.replace("linkedin.com/in/jayvinparmar", "linkedin.com/in/jayvin-parmar-j21")
    text = text.replace("https://www.linkedin.com/in/jayvin-parmar-j21", CORRECT_LINKEDIN)

    # Fix display text if contact section hardcoded it.
    text = text.replace("github.com/jayvinparmar", "github.com/Jayvin21")
    text = text.replace("linkedin.com/in/jayvinparmar", "linkedin.com/in/jayvin-parmar-j21")
    text = text.replace("linkedin.com/in/jayvin-parmar-j21/", "linkedin.com/in/jayvin-parmar-j21")

    # Ensure email stays correct.
    text = text.replace("jayvin.parmar@gmail.com", CORRECT_EMAIL)

    if text != original:
        file.write_text(text, encoding="utf-8")
        updated.append(file)

print("Updated files:")
for file in updated:
    print("-", file)

if not updated:
    print("No files changed. Run Select-String command to find hardcoded links.")
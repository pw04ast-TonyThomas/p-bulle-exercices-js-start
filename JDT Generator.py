import re
import subprocess
from collections import defaultdict
from pathlib import Path

# Output folder
OUTPUT_DIR = Path("JDT")
OUTPUT_DIR.mkdir(exist_ok=True)

# Get git log
log = subprocess.check_output(
    ["git", "log", "--pretty=format:%ad|%s%n%b", "--date=short"],
    text=True,
    encoding="utf-8",
    errors="ignore"
)

# Regex to parse commits
pattern = re.compile(
    r"(?P<date>\d{4}-\d{2}-\d{2})\|"
    r"(?P<type>\w+)\((?P<context>.+?)\): (?P<title>.+)\n"
    r"\[(?P<time>\d+)\] \[(?P<status>.+?)\]",
    re.MULTILINE
)

entries_by_date = defaultdict(list)
plain_entries = []

# Parse commits
for match in pattern.finditer(log):
    data = match.groupdict()
    entries_by_date[data["date"]].append(data)

    plain_entries.append(
        f"{data['type'].lower()} "
        f"{data['context']} "
        f"{data['title']} "
        f"{data['time']} min "
        f"{data['status']}"
    )

# Write Markdown file
with open(OUTPUT_DIR / "JDT.md", "w", encoding="utf-8") as md:
    md.write("# Journal de Travail (JDT)\n\n")

    for date in sorted(entries_by_date.keys()):
        md.write(f"## {date}\n\n")

        total_time = 0
        for entry in entries_by_date[date]:
            total_time += int(entry["time"])

            md.write(
                f"- **Type**: {entry['type']}\n"
                f"  - **Module**: {entry['context']}\n"
                f"  - **Description**: {entry['title']}\n"
                f"  - **Temps**: {entry['time']} min\n"
                f"  - **Statut**: {entry['status']}\n\n"
            )

        md.write(f"**Temps total: {total_time} min**\n\n")

# Write plain text file
with open(OUTPUT_DIR / "JDT-audio.txt", "w", encoding="utf-8") as txt:
    txt.write(", ".join(plain_entries))

print("JDT folder created with JDT.md and JDT-audio.txt")

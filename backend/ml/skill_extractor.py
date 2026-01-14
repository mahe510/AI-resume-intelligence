from backend.ml.skill_taxonomy import SKILLS

def extract_skills(text: str):
    text = text.lower()
    found = set()

    for canonical, aliases in SKILLS.items():
        for alias in aliases:
            if alias in text:
                found.add(canonical.title())
                break

    return sorted(found)

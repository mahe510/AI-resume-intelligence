from fastapi import APIRouter, UploadFile, File

from backend.ocr.extractor import extract_text
from backend.nlp.section_extractor import extract_sections
from backend.nlp.skill_extractor import extract_skills
from backend.ml.skill_consistency import analyze_skill_consistency
from backend.ml.skill_demand_service import get_skill_demand
from backend.scraping.skill_demand import get_skill_demand


router = APIRouter()

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    text = extract_text(file)

    sections = extract_sections(text)
    skills = extract_skills(sections["skills"])

    consistency = analyze_skill_consistency(
        skills,
        sections["experience"]
    )

    demand = get_skill_demand(skills)

    return {
        "status": "success",
        "skills": skills,
        "consistency_analysis": consistency,
        "live_skill_demand": demand
    }

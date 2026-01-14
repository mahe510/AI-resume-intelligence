from fastapi import APIRouter, UploadFile
from backend.ocr.extractor import (
    extract_text_from_pdf,
    extract_text_from_image
)
from backend.ml.skill_extractor import extract_skills

router = APIRouter()

@router.post("/analyze")
async def analyze_resume(file: UploadFile):
    file_bytes = await file.read()

    if file.filename.lower().endswith(".pdf"):
        text = extract_text_from_pdf(file_bytes)
    else:
        text = extract_text_from_image(file_bytes)

    skills = extract_skills(text)

    return {
        "skills": skills
    }

# AI Resume Intelligence Platform

An AI-powered application that analyzes resumes, extracts skills using OCR-based text extraction, and evaluates how well a resume aligns with a selected job role.

The system is designed to be simple, explainable, and practical, focusing on real-world resume analysis rather than black-box models.

---

## What This Project Does

- Accepts resumes in PDF or image format
- Extracts text from scanned resumes using OCR
- Identifies technical skills using a curated skill vocabulary and taxonomy
- Compares extracted skills with role-based market requirements
- Highlights matched and missing skills
- Calculates a demand alignment score
- Displays results through an interactive web interface

---

## How It Works

1. A user uploads a resume.
2. OCR (Tesseract) converts the resume into raw text.
3. Skills are extracted using vocabulary-based matching and alias normalization.
4. The user selects a target job role.
5. Resume skills are compared with predefined role requirements.
6. The system outputs skill matches, gaps, and a demand score.

---

## Tools & Technologies Used

### Frontend
- React (Vite)
- JavaScript (JSX)
- CSS

### Backend
- Python
- FastAPI
- REST APIs

### OCR & Processing
- Tesseract OCR
- pdf2image
- Pillow

### AI / Logic
- Rule-based skill extraction
- Skill taxonomy and normalization
- Demand scoring logic

---

## Why This Approach

- OCR enables support for scanned resumes, increasing real-world usability.
- Rule-based skill extraction ensures transparency and explainability.
- Role-based comparison provides clear insights into skill gaps.
- The architecture is modular and can be extended with machine learning models in the future.

---

## Example Output

- Extracted Skills: Python, SQL, Docker
- Target Role: Backend Developer
- Matched Skills: Python, SQL
- Missing Skills: AWS, System Design
- Demand Score: 25%

---

## Future Scope

- Machine learning–based skill extraction
- Live job market analysis
- Personalized upskilling recommendations

---

## Author

Mahe Barnwal  
B.Tech CSE  
AI & ML Enthusiast

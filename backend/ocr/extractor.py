import pytesseract
from pdf2image import convert_from_bytes
from PIL import Image
import io

def extract_text_from_pdf(file_bytes: bytes) -> str:
    images = convert_from_bytes(file_bytes)
    text = ""

    for img in images:
        text += pytesseract.image_to_string(img)

    return text


def extract_text_from_image(file_bytes: bytes) -> str:
    image = Image.open(io.BytesIO(file_bytes))
    return pytesseract.image_to_string(image)

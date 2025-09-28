from PyPDF2 import PdfReader
import re

def extract_text_from_pdf(file):
    pdf_reader = PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text() or ""
    return text


def split_text_into_chunks(text, max_chars=500):
    """
    Split text into chunks of up to max_chars without breaking words.
    """
    words = text.split()
    chunks = []
    current_chunk = ""

    for word in words:
        # +1 for the space
        if len(current_chunk) + len(word) + 1 > max_chars:
            chunks.append(current_chunk.strip())
            current_chunk = word
        else:
            current_chunk += " " + word if current_chunk else word

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks
from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from utils.pdf_parser import extract_text_from_pdf,split_text_into_chunks
from utils.embeddings import db, add_texts, query_db
from utils.summarizer import summarize_text

app = FastAPI()

# CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile):
    text = extract_text_from_pdf(file.file)

    if not text.strip():
        return {"message": "No extractable text found in PDF."}

    # Split into word-safe chunks
    chunks = split_text_into_chunks(text, max_chars=500)

    add_texts(chunks, db)

    return {"message": "File processed successfully", "chunks": len(chunks)}

@app.post("/ask")
async def ask_question(question: str = Form(...)):
    answer = query_db(question, db)
    return {"answer": answer}

@app.post("/summarize")
async def summarize():
    docs = db.get()
    full_text = " ".join(docs["documents"])
    summary = summarize_text(full_text)
    return {"summary": summary}

@app.get("/debug")
async def debug_db():
    docs = db.get()
    result = []
    for i, doc in enumerate(docs["documents"]):
        result.append({
            "id": docs["ids"][i],
            "document": doc,
            "metadata": docs["metadatas"][i]
        })
    return {"total_docs": len(docs["documents"]), "documents": result}

@app.delete("/deletechunk")
async def delete_chunk(ids: str = Form(...)):
    chunk_ids = [x.strip() for x in ids.split(",") if x.strip()]
    if not chunk_ids:
        return {"message": "No valid chunk IDs provided."}

    db.delete(ids=chunk_ids)
    return {"message": f"Deleted chunks: {chunk_ids}"}

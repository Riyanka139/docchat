# 📄 AI Document Assistant

An end-to-end **AI-powered document assistant** that lets you:  

- Upload PDF files  
- Extract and store their contents in a **vector database (ChromaDB)**  
- Ask natural language **questions** about the documents  
- Generate **summaries** of entire documents  
- Interact through a beautiful **React + Material UI frontend**  

## 🚀 Why This Project?

- Demonstrates **LLM-powered document QA**  
- Clean **FastAPI backend** with modular structure  
- Interactive **React UI** with Material-UI for professional design  
- Real database integration using **ChromaDB (vector DB)**  
- Open-source **sentence-transformers embeddings** (no paid quota needed)  

## 🛠️ Tech Stack

**Backend**  
- FastAPI (Python) — REST APIs  
- ChromaDB — Vector Database  
- Sentence Transformers — Open-source embeddings  
- PyPDF2 — PDF text extraction  

**Frontend**  
- React 18  
- Material-UI (MUI)  
- Fetch API  

## 📂 Project Structure

```text
ai-doc-assistant/
│
├── backend/
│   ├── main.py               # FastAPI entry point
│   ├── utils/
│   │   ├── pdf_parser.py     # Extracts text from PDF
│   │   ├── embeddings.py     # Creates & queries embeddings
│   │   └── summarizer.py     # Summarizes documents
│   └── requirements.txt      # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Upload, Ask, Summarize, ResultCard
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## ⚙️ Setup & Run
**Backend**
```text
cd backend
python -m venv venv
venv\Scripts\activate (window)
pip install -r requirements.txt
uvicorn main:app --reload
```
- Runs on 👉 http://localhost:8000
- Swagger docs 👉 http://localhost:8000/docs
**Frontend**
```text
cd frontend
npm install
npm start
```
- Runs on 👉 http://localhost:3000

## 🎯 Features
- Upload PDFs (via React frontend → FastAPI → store in ChromaDB)
- Ask Questions (semantic search retrieves relevant chunks → answer returned)
- Summarize Document (whole document summary via LLM pipeline)
- Delete Chunks (API to clear/reset vector DB)
- Modern UI with Material-UI: file upload, answer cards, close buttons

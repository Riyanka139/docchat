from sentence_transformers import SentenceTransformer
import chromadb

# Initialize embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Initialize ChromaDB collection
def init_db():
    client = chromadb.PersistentClient(path="./chroma_db")  # persistent storage
    collection = client.get_or_create_collection(name="pdf_embeddings")
    return collection

db = init_db()

def add_texts(chunks, collection):
    embeddings = model.encode(chunks)  # Hugging Face embeddings

    for i, chunk in enumerate(chunks):
        collection.add(
            documents=[chunk],
            embeddings=[embeddings[i]],
            ids=[f"chunk_{i}"]
        )

def query_db(question, collection, top_k=1):
    """
    Query ChromaDB using local embeddings and return the most relevant chunk(s).
    """
    # Embed the question
    q_embedding = model.encode([question])[0]

    # Query the collection for top_k most similar chunks
    results = collection.query(
        query_embeddings=[q_embedding],
        n_results=top_k
    )

    # results["documents"] is a list of lists (because batch queries)
    if results["documents"] and results["documents"][0]:
        # Return only the top chunk
        return results["documents"][0][0]
    else:
        return "No relevant information found."
        
import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to Book Hub API"}

@app.get("/books")
def get_books(q: str = "harry potter"):
    """
    Fetch books from Open Library API based on a query.
    Default search is "Harry Potter" if no query is provided.
    """
    url = f"https://openlibrary.org/search.json?q={q}&limit=5"
    response = requests.get(url)
    data = response.json()

    books = []
    for item in data.get("docs", []):
        # Extract cover image URL if available
        cover_id = item.get("cover_i")
        cover_url = None
        if cover_id:
            cover_url = f"http://covers.openlibrary.org/b/id/{cover_id}-L.jpg"
        
        books.append({
            "title": item.get("title", "Unknown Title"),
            "author": item.get("author_name", ["Unknown Author"])[0],
            "cover": cover_url,  # Include cover URL if available
            "description": item.get("first_sentence", ["No description available"])[0],  # Example for description
        })
    
    return books

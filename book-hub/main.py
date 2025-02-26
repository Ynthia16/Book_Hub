from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from models.book import Book
from database import SessionLocal, engine
from schemas import BookBase, BookResponse
from fastapi.middleware.cors import CORSMiddleware
import requests

Book.metadata.create_all(bind=engine)

app = FastAPI()

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message": "Welcome to Book Hub API"}

@app.get("/books", response_model=list[BookResponse])
def get_books(q: str = "", db: Session = Depends(get_db)):
    """
    Fetch books from the database, or if not found, fetch from an external API.
    """
    # Only filter by title if 'q' is provided
    if q:
        books = db.query(Book).filter(Book.title.contains(q)).all()
    else:
        books = db.query(Book).all()  
    
    # Fetch books from an external API if no books were found in DB
    if not books:
        url = f"https://openlibrary.org/search.json?q={q}&limit=5"
        response = requests.get(url)
        data = response.json()

        # Convert existing books in the database to a set of titles for comparison
        existing_titles = {book.title for book in books}
        
        # Adding books fetched from the external API
        for item in data.get("docs", []):
            cover_id = item.get("cover_i")
            cover_url = None
            if cover_id:
                cover_url = f"http://covers.openlibrary.org/b/id/{cover_id}-L.jpg"
            
            title = item.get("title", "Unknown Title")
            # Only add the book if it's not already in the list
            if title not in existing_titles:
                books.append({
                    "title": title,
                    "author": item.get("author_name", ["Unknown Author"])[0],
                    "cover": cover_url,  
                    "description": item.get("first_sentence", ["No description available"])[0],  
                })

    return books

@app.post("/books", response_model=BookResponse)
def create_book(book: BookBase, db: Session = Depends(get_db)):
    """
    Create a new book entry in the database.
    """
    db_book = Book(
        title=book.title,
        author=book.author,
        description=book.description,
        cover=book.cover
    )
    
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

@app.put("/books/{book_id}", response_model=BookResponse)
def update_book(book_id: int, book: BookBase, db: Session = Depends(get_db)):
    """
    Update an existing book's details.
    """
    db_book = db.query(Book).filter(Book.id == book_id).first()

    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")
    
    db_book.title = book.title
    db_book.author = book.author
    db_book.description = book.description
    db_book.cover = book.cover
    
    db.commit()
    db.refresh(db_book)
    return db_book

@app.delete("/books/{book_id}", response_model=BookResponse)
def delete_book(book_id: int, db: Session = Depends(get_db)):
    """
    Delete a book from the database.
    """
    db_book = db.query(Book).filter(Book.id == book_id).first()

    if not db_book:
        raise HTTPException(status_code=404, detail="Book not found")
    
    db.delete(db_book)
    db.commit()
    return db_book

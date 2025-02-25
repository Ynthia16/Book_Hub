from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models.book import Book

# Create a new session
db: Session = SessionLocal()

# List of books to add
books_to_add = [
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "description": "A young wizard begins his magical journey at Hogwarts.",
        "cover": "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "description": "Bilbo Baggins embarks on an epic adventure with dwarves.",
        "cover": "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "A classic novel about love, society, and personal growth.",
        "cover": "https://m.media-amazon.com/images/I/91HHqVTAJQL.jpg",
    },
]

# Add books to the database
for book_data in books_to_add:
    db_book = Book(
        title=book_data["title"],
        author=book_data["author"],
        description=book_data["description"],
        cover=book_data["cover"],
    )
    db.add(db_book)

# Commit the transaction
db.commit()
db.close()

print("Books added to the database!")

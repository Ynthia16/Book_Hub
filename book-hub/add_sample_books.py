from sqlalchemy.orm import Session
from database import SessionLocal
from models.book import Book


db: Session = SessionLocal()


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
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "A novel about the serious issues of rape and racial inequality.",
        "cover": "https://m.media-amazon.com/images/I/81OtwKI6ftL.jpg",
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "description": "A dystopian novel that critiques totalitarian regimes and surveillance.",
        "cover": "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "A novel set in the Jazz Age, exploring themes of decadence and excess.",
        "cover": "https://m.media-amazon.com/images/I/91KkIQV+JxL.jpg",
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "description": "A story about teenage alienation and loss of innocence.",
        "cover": "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "description": "A thrilling mystery involving secret codes and religious history.",
        "cover": "https://m.media-amazon.com/images/I/91BqKn-6V1L.jpg",
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "author": "J.R.R. Tolkien",
        "description": "The first part of the epic fantasy trilogy set in Middle-Earth.",
        "cover": "https://m.media-amazon.com/images/I/91Wg9TS6CpL.jpg",
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "description": "A dystopian novel set in a future society where children are forced to fight.",
        "cover": "https://m.media-amazon.com/images/I/51WL2m0RO5L.jpg",
    }
]

for book_data in books_to_add:
    db_book = Book(
        title=book_data["title"],
        author=book_data["author"],
        description=book_data["description"],
        cover=book_data["cover"],
    )
    db.add(db_book)

db.commit()
db.close()

print("Books added to the database!")

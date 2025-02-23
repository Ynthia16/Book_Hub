# Book Hub
Book Hub is a web application that allows users to explore a collection of books, search for books by title, and paginate through results. The app has a user-friendly interface with a dark and light theme toggle. The backend is powered by FastAPI, providing a fast and efficient API to fetch book data, while the frontend is built using React and TypeScript for a dynamic and modern user experience.

## Features
### Search for Books: Users can search for books by title using a search bar.
### Pagination: Navigate through the list of books with 5 books per page.
### Theme Toggle: Switch between dark and light mode.
### Clear Search: Clear the search input field easily.
### Responsive Design: Optimized for desktop and mobile devices.


## Technologies Used
### Frontend:
React: JavaScript library for building user interfaces.
TypeScript: Static type checking for JavaScript.
Tailwind CSS: Utility-first CSS framework for styling.
React Icons: For adding icons like search.
Backend:
FastAPI: A modern, fast (high-performance) web framework for building APIs with Python.
Uvicorn: An ASGI server for FastAPI.
Pydantic: Data validation and settings management for Python.
Backend Setup (FastAPI)
Prerequisites
Python 3.7 or later.
Virtual environment (recommended for isolation).
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/book-hub.git
Navigate to the backend directory:

bash
Copy
Edit
cd book-hub/backend
Create a virtual environment (optional but recommended):

bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
Install the required dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the FastAPI server:

bash
Copy
Edit
uvicorn main:app --reload
This will start the server at http://localhost:8000.

API Endpoints
GET /books: Retrieves the list of books.

Example response:

json
Copy
Edit
[
  {
    "id": "1",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "cover": "url-to-cover-image",
    "description": "A book about a young wizard..."
  },
  ...
]
Frontend Setup (React)
Prerequisites
Node.js (LTS version).
npm (Node Package Manager) or yarn.
Installation
Navigate to the frontend directory:

bash
Copy
Edit
cd book-hub/frontend
Install the required dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm start
This will start the app at http://localhost:3000.

Frontend Components
Homepage: The homepage of the application, which contains the initial layout and navigation to explore books, search for books, and interact with the book data. It includes the welcome message, the search bar, and a preview of the first set of books.

SearchBar: Handles the user input for searching books by title. The results are filtered automatically with a delay.

BookCard: Displays individual book details (title, author, cover, and description).

BookList: Fetches books from the API, handles pagination, and displays the books based on the current search query.

Pagination: Provides the logic for navigating between pages of books, displaying 5 books per page.

Components Breakdown
Homepage: Displays the initial page with a greeting, search functionality, and a preview of books. It includes the search bar for filtering the list and pagination controls for navigating between pages of books.

BookList: Fetches the book data from the FastAPI backend and handles pagination and search filtering.

Pagination: Provides the logic for navigating between pages of books, displaying 5 books per page. Users can click on "Next" and "Previous" to browse through different pages.

SearchBar: Allows users to search for books by title and clear the search input. It sends requests to the backend to fetch books that match the query.

Environment Variables
The backend API URL is set by default as http://localhost:8000. You can update this in the frontend code if deploying to a different environment.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and create a pull request with your changes.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
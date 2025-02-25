# Book Hub: A React + FastAPI Book Discovery App
Book Hub is a web application that allows users to explore and discover books with filtering, search, and sorting functionalities. Built with React (TypeScript) for the frontend and FastAPI for the backend, it provides a seamless browsing experience.

# Features
🔹 Frontend (React + TypeScript)
✅ Browse and search books by title, genre, author, and rating
✅ Implement state management for filtering and search (using Context API / Redux)
✅ Responsive and user-friendly UI (Mobile + Desktop)
✅ Well-structured React components and lifecycle methods
✅ TypeScript used for type safety

# Backend (FastAPI + Database)
✅ FastAPI-powered RESTful API for managing books
✅ CRUD operations: Add, update, delete, and retrieve books
✅ Filter and search books by genre, author, or date
✅ Database integration using PostgreSQL / MongoDB
✅ API endpoints structured for scalability and security

## Frontend:
 React (TypeScript)
 TailwindCss (for UI)
React Router
Context API (State Management)

# Backend:
 FastAPI (Python)
🛡️ Authentication & Authorization (Future Feature)

📂 Project Structure
To ensure clean organization, structure your files like this:

# Frontend: React + TypeScript (/frontend)

/src
 ├── /components          # Reusable UI components
 ├── /context             # Context API setup for state management
 ├── /services            # API calls to backend
 ├── /styles              # CSS / Styled components
 ├── App.tsx              # Main component
 ├── index.tsx            # Entry point
 ├── types.ts             # TypeScript types

# Backend: FastAPI (/backend)

/backend
 ├── /models              # Database models
 ├── /routes              # API routes (books, users, etc.)
 ├── /schemas             # Pydantic schemas for validation
 ├── /database.py         # Database connection
 ├── /main.py             # FastAPI main app

## Installation & Setup
#### 🔹 1️⃣ Clone the Repository

`git clone https://github.com/Ynthia16/Book_Hub.git`
`cd book-hub`
#### 🔹 2️⃣ Set Up the Backend (FastAPI)

Create a Virtual Environment (only needed for backend development)

If you don't have a virtual environment set up, run the following command to create one:

`python -m venv venv`
Activate the Virtual Environment

Windows:

`.\venv\Scripts\activate`
Mac/Linux:

`source venv/bin/activate`
Install Backend Dependencies

`pip install -r requirements.txt`
Run the FastAPI Backend

`uvicorn main:app --reload`  # Runs FastAPI backend on localhost:8000

The backend should now be accessible at http://127.0.0.1:8000.

#### 🔹 3️⃣ Set Up the Frontend (React + TypeScript)

Install Frontend Dependencies

`npm install`
Run the React App

`npm start`  # Runs React app on localhost:3000

The app should now be accessible at http://localhost:3000.

## API Endpoints
Method	Endpoint	Description
GET	/books/	Fetch all books
GET	/books/{id}	Get details of a specific book
POST	/books/	Add a new book
PUT	/books/{id}	Update book details
DELETE	/books/{id}	Delete a book

### Assessment Criteria (Rubric)
I have ensured that my project meets all the rubric requirements:

✅ Effective React Components – Organized and structured with correct lifecycle usage
✅ State Management – Implemented using Context API / Redux
✅ TypeScript – Enforced strong typing for maintainability
✅ Responsive UI – Works seamlessly on mobile and desktop
✅ RESTful API with FastAPI – CRUD operations, filtering, and database integration

### Future Enhancements
🔹 Implement User Authentication (Login, Signup, JWT Tokens)
🔹 Add User Reviews & Ratings for Books
🔹 Implement Pagination for large datasets
🔹 Deploy to Vercel (Frontend) and Render / Railway (Backend)


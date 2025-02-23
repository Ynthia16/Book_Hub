import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { useTheme } from "../context/ThemeContext"; // Import useTheme()
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  description: string | null;
}

const HomePage: React.FC = () => {
  const { theme } = useTheme(); // Get the theme state from Context API
  const [books, setBooks] = useState<Book[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate to handle route change

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/books")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching books. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 transition-colors duration-300 
      ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to Book Hub!</h2>
      <p className="text-lg mb-8">Explore a world of books at your fingertips.</p>

      {/* Toggle Grid/List View */}
      <button
        onClick={() => setView(view === "grid" ? "list" : "grid")}
        className="mb-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle between grid and list view"
      >
        Toggle View
      </button>

      {/* Loading and Error Handling */}
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading books...</span>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          } w-full max-w-5xl`}
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

      {/* Button to Explore More */}
      <button
        onClick={() => navigate("/booklist", { state: { books } })}
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Explore the full book list"
      >
        Start Exploring 📖
      </button>
    </div>
  );
};

export default HomePage;

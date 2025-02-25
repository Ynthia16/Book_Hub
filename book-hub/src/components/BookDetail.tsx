import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  description: string | null;
}

const BookDetail: React.FC = () => {
  const { theme } = useTheme();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching book details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 py-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary"></div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : book ? (
        <div className="max-w-3xl p-6 bg-white shadow-lg rounded-lg">
          <img
            src={book.cover || "https://via.placeholder.com/300x450?text=No+Cover+Available"}
            alt={book.title}
            className="w-64 h-96 object-cover mx-auto rounded-lg mb-4"
          />
          <h2 className="text-3xl font-bold mb-2 text-primary">{book.title}</h2>
          <p className="text-xl mb-2">by <span className="font-semibold">{book.author}</span></p>
          <p className="text-gray-700">{book.description || "No description available."}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            🔙 Back to Book List
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Book not found.</p>
      )}
    </div>
  );
};

export default BookDetail;



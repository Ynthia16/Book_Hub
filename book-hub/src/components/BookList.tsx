import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useTheme } from "../context/ThemeContext";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  description: string | null;
}

const BookList: React.FC = () => {
  const { theme } = useTheme();
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/books");
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);
      setTotalPages(Math.ceil(data.length / 5)); // 5 books per page
      setLoading(false);
    } catch (error) {
      setError("Error fetching books. Please try again later.");
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
      setNoResults(filtered.length === 0);
    } else {
      setFilteredBooks(books);
      setNoResults(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 5;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + 5);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 py-6 transition-colors duration-300 
      ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Explore Books</h2>
      <SearchBar onSearch={handleSearch} placeholder="Search for books by title" />
      
      {loading ? (
        <div className="spinner-border text-primary mb-6" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <p className="text-red-500 mb-6">{error}</p>
      ) : noResults ? (
        <p className="text-red-500 mb-6">No books found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {currentBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

      {totalPages > 1 && filteredBooks.length > 0 && (
        <div className="mt-6 w-full flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default BookList;




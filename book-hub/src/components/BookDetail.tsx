import { useLocation, useNavigate } from "react-router-dom";

const BookDetail: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate(); 
  const book = state?.book;

 
  if (!book) {
    return (
      <div className="p-6 max-w-lg sm:max-w-md mx-auto bg-white dark:bg-dark rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-4 text-dark dark:text-light">Book not found</h3>
        <p className="text-base text-dark dark:text-light">
          Sorry, we couldn't find the details for this book. Please try again later or
          <button
            onClick={() => navigate("/booklist")}  
            className="text-primary hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
          >
            go back to the book list
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg sm:max-w-md mx-auto bg-white dark:bg-dark rounded-lg shadow-lg">
      {/* Book Cover */}
      <img
        src={book.cover || "/path/to/fallback-image.jpg"}
        alt={book.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      
      {/* Book Title and Author */}
      <h3 className="text-3xl font-bold text-dark dark:text-light">{book.title}</h3>
      <p className="text-xl italic text-gray-700 dark:text-gray-300">{book.author}</p>

      {/* Book Description */}
      <p className="mt-4 text-base text-dark dark:text-light">{book.description}</p>
    </div>
  );
};

export default BookDetail;

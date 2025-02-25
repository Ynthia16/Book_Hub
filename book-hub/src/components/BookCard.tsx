import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BookProps {
  book: {
    id: string;
    title: string;
    author: string;
    cover: string | null;
    description: string | null;
  };
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div className="relative rounded-lg shadow-md overflow-hidden bg-white dark:bg-dark text-dark dark:text-light w-full sm:w-64 lg:w-80 h-80 mb-4 transition-all">
      {/* Flip Effect */}
      <motion.button
        className="absolute inset-0 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        aria-label={`Flip the cover of ${book.title}`}
      >
        <img
          src={book.cover || "/fallback-image.jpg"}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.button>

      {/* Front Cover Overlay */}
      {!flipped && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white px-4 text-center z-10 rounded-lg">
          <div>
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-sm italic">{book.author}</p>
          </div>
        </div>
      )}

      {/* Navigate to Book Details */}
      <Link
        to="/bookdetail"
        state={{ book }}
        className="absolute inset-0"
        aria-label={`View details for ${book.title}`}
      />
    </motion.div>
  );
};

export default BookCard;

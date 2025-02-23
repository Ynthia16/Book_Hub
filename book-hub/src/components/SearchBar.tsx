import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string; // Accept placeholder as a prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch(""); 
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="my-4 flex justify-center w-full">
      <div className="relative w-full sm:w-1/2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder} // Use the placeholder prop here
          className="p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark dark:border-gray-600 dark:text-light pr-10"
          aria-label="Search for books"
        />

        {/* Clear Button (❌) */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-1"
            aria-label="Clear search"
          >
            ❌
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

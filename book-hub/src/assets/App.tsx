import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "../components/BookList";
import HomePage from "../components/Homepage";
import { useTheme } from "../context/ThemeContext";
import BookDetail from "../components/BookDetail";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Use theme context

  return (
    <Router>
      {/* Apply theme styles */}
      <div className={`${theme === "dark" ? "dark bg-dark text-light" : "bg-light text-dark"}`}>
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">📚 Book Hub</h1>
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 bg-primary text-white rounded"
          >
            {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/bookdetail" element={<BookDetail />} /> {/* Route for BookDetail */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

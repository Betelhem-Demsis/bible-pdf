import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";


const Dashboard = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  
  // Sample data
  const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
  const chapters = Array.from({ length: 30 }, (_, i) => i + 1); // Simulating 30 chapters
  const chapterContent = `This is the content of chapter ${selectedChapter} in the book of ${selectedBook}.`;

  // Retrieve username from local storage
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSelectedChapter(null); // Reset the chapter selection when a new book is selected
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="flex h-screen bg-gray-200 font-poppins">
      {/* Sidebar */}
      <div className={`bg-blue-950 p-4 ${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300`}>
        <div className="flex justify-between items-center">
          <h2 className={`${isSidebarOpen ? "block" : "hidden"} text-gray-100 font-normal text-xl`}>Books</h2>
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <BsChevronLeft size={24} /> : <BsChevronRight size={24} />}
          </button>
        </div>

        {/* Book List */}
        <ul className="mt-4">
          {books.map((book) => (
            <li key={book} className="mb-2 cursor-pointer p-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md hover:bg-opacity-80" onClick={() => handleBookClick(book)}>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>{book}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full p-4">
      <div className="flex justify-end items-center mb-3"> {/* Aligns everything to the right */}
    <h1 className="text-xl font-light text-right mr-2">Hi, {username}!</h1> {/* Move the text first */}
    <LuUserCircle2 className="text-3xl font-light" /> {/* Increase the size of the icon */}
  </div>
        {/* Chapter Selector */}
        {selectedBook && (
          <div className="mb-4">
            <h3 className="text-2xl">Select a Chapter from {selectedBook}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter}
                  className={`px-3 py-1 rounded-md border ${selectedChapter === chapter ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
                  onClick={() => handleChapterClick(chapter)}
                >
                  {chapter}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chapter Content */}
        {selectedChapter && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Chapter {selectedChapter}</h3>
            <p>{chapterContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

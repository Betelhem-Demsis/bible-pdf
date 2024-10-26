import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Sample data
  const books = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
  const chapters = Array.from({ length: 30 }, (_, i) => i + 1); // Simulating 50 chapters
  const chapterContent = `This is the content of the chapter ${selectedChapter} in the book of ${selectedBook}.`;

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
    <div className="flex h-screen bg-gray-100 font-poppins">
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
        {/* Chapter Selector */}
        {selectedBook && (
          <div className="mb-4">
            <h3 className="text-2xl">Select a Chapter from {selectedBook}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
  {chapters.map((chapter) => (
    <button
      key={chapter}
      className={`px-3 py-1 rounded-md border ${selectedChapter === chapter ? "bg-blue-950 text-white" : "bg-white text-blue-950"}`}
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
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">
              {selectedBook} - Chapter {selectedChapter}
            </h3>
            <p>{chapterContent}</p>
          </div>
        )}

        {/* No book or chapter selected message */}
        {!selectedBook && <p className="text-2xl text-center font-light text-gray-400 py-48">Please select a book from the sidebar to begin.</p>}
      </div>
    </div>
  );
};

export default Dashboard;

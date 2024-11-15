import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { LuUserCircle2 } from "react-icons/lu";

const Dashboard = () => {
  // const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  
  // Sample data
  const books = ["Matthew", "Mark", "Luke", "John","Acts", "Romans"];
  const chapters = Array.from({ length: 30 }, (_, i) => i + 1);

  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSelectedChapter(null);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const docUrl = "https://docs.google.com/document/d/1SOz3jKcZ-fZ8l33Ll1ugC7aRZA1E3x2LSuy-RTDt3cM/preview?rm=minimal&embedded=true";

  return (
    <div className="flex h-screen font-poppins overflow-hidden">
      {/* Sidebar */}
      <div className={`bg-blue-950 p-4 ${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300 flex-shrink-0`}>
        <div className="flex justify-between items-center">
          <h2 className={`${isSidebarOpen ? "block" : "hidden"} text-gray-100 font-normal text-xl`}>Books</h2>
          <button onClick={toggleSidebar} className="text-white hover:bg-blue-900 p-1 rounded-full transition-colors">
            {isSidebarOpen ? <BsChevronLeft size={24} /> : <BsChevronRight size={24} />}
          </button>
        </div>

        <ul className="mt-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {books.map((book) => (
            <li 
              key={book} 
              className={`mb-2 cursor-pointer p-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md hover:bg-opacity-80 transition-all ${
                selectedBook === book ? 'bg-opacity-80' : ''
              }`}
              onClick={() => handleBookClick(book)}
            >
              <span className={`${isSidebarOpen ? "block" : "hidden"} text-white`}>{book}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow w-full h-screen overflow-hidden">
        {/* <div className="flex justify-end items-center p-4 bg-white shadow-sm">
          <h1 className="text-xl font-light text-right mr-2">Hi, {username}!</h1>
          <LuUserCircle2 className="text-3xl font-light" />
        </div>
         */}
        <div className="flex-grow flex flex-col p-4 overflow-hidden">
          {selectedBook && (
            <div className="mb-4">
              <h3 className="text-2xl mb-2">Select a Chapter from {selectedBook}</h3>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                {chapters.map((chapter) => (
                  <button
                    key={chapter}
                    className={`px-3 py-1 rounded-md border transition-all ${
                      selectedChapter === chapter 
                        ? "bg-blue-500 text-white border-blue-600" 
                        : "bg-white text-blue-500 hover:bg-blue-50"
                    }`}
                    onClick={() => handleChapterClick(chapter)}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            </div>
          )}

<div className="flex-grow overflow-hidden">
            <iframe 
              src={docUrl}
              className="w-full h-full"
              style={{
                border: 'none',
                margin: 0,
                padding: 0,
                display: 'block'
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
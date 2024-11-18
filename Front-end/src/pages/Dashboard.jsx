import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useRef } from "react";
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { gospelNames, chapterAndPage, chapterNumberValues, offsets, indexList } from "../assets/data.js";
import ForwardedViewer from '../components/ForwardedViewer.jsx'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const viewerRef = useRef(null); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setSelectedChapter(null);
  };


  return (
    <div className="flex h-screen font-poppins overflow-hidden">
      <div className={`bg-blue-950 p-4 ${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300 flex-shrink-0`}>
        <div className="flex justify-between items-center">
          <h2 className={`${isSidebarOpen ? "block" : "hidden"} text-gray-100 font-normal text-xl`}>
            መጽሐፍ ቅዱስ
          </h2>
          <button onClick={toggleSidebar} className="text-white hover:bg-blue-900 p-1 rounded-full transition-colors">
            {isSidebarOpen ? <BsChevronLeft size={24} /> : <BsChevronRight size={24} />}
          </button>
        </div>

        <ul className="mt-4 overflow-y-auto max-h-[calc(100vh-100px)]">
          {gospelNames.map((book) => (
            <li
              key={book}
              className={`mb-2 cursor-pointer p-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-md hover:bg-opacity-80 transition-all ${selectedBook === book ? "bg-opacity-80" : ""}`}
              onClick={() => handleBookClick(book)}
            >
              <span className={`${isSidebarOpen ? "block" : "hidden"} text-white`}>{book}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col flex-grow w-full h-screen overflow-hidden">
        <div className="flex-grow flex flex-col p-4 overflow-hidden">
          {selectedBook && (
            <div className="mb-4">
              <h3 className="text-2xl mb-2">{selectedBook} - ምዕራፍ ይምረጡ</h3>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                {Array.from({ length: chapterNumberValues[gospelNames.indexOf(selectedBook)] }, (_, i) => i + 1).map((chapter) => (
                  <button
                    key={chapter}
                    className={`px-3 py-1 rounded-md border transition-all ${selectedChapter === chapter ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-500 hover:bg-blue-50"}`}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-grow overflow-hidden">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <ForwardedViewer fileUrl="/new.pdf" ref={viewerRef} />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

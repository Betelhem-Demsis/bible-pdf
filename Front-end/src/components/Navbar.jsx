// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[url('/public/navimage.png')] bg-cover bg-center sm:pt-4 sm:pb-12 pt-3 pb-6">
      <div className="container mx-2 sm:mx-auto flex justify-between items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg sm:px-8 sm:py-2 rounded-3xl shadow-md py-1 px-2 ">
        <div className="flex items-center sm:space-x-4 space-x-1">
          <img src="public/logo.png" alt="Logo" className="sm:h-10 h-7" />
          <h5 className="sm:text-lg text-sm font-semibold text-white">Hiyaw Kal</h5>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl mr-2 focus:outline-none hover:scale-105">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul className={`hidden lg:flex space-x-8`}>
          <li><Link to="/" className="text-white text-xl bg-btn-bg hover:bg-btn-clicked py-0.5 px-4 rounded-2xl">Home</Link></li>
          <li><Link to="/about" className="text-white text-xl bg-btn-bg hover:bg-btn-clicked py-0.5 px-4 rounded-2xl">About</Link></li>
          <li><Link to="/download" className="text-white text-xl bg-btn-bg hover:bg-btn-clicked py-0.5 px-4 rounded-2xl">Download</Link></li>
          <li><Link to="/signup" className="text-white text-xl bg-blue-950 hover:bg-btn-clicked py-0.5 px-4 rounded-2xl">SignUp</Link></li>
        </ul>
        <ul className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-white bg-opacity-90 shadow-md rounded-2xl text-center`}>
          <li><Link to="/" onClick={toggleMenu} className="text-gray-800 text-xl block py-2 hover:bg-btn-clicked">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="text-gray-800 text-xl block py-2 hover:bg-btn-clicked">About</Link></li>
          <li><Link to="/download" onClick={toggleMenu} className="text-gray-800 text-xl block py-2 hover:bg-btn-clicked">Download</Link></li>
          <li><Link to="/SignUp" onClick={toggleMenu} className="text-gray-800 text-xl block py-2 hover:bg-btn-clicked">SignUp</Link></li>
        </ul>
      </div>
      {/* <div className="flex space-x-4 justify-center mt-2">
        <Link to="/signup">
          <button className="text-white text-sm bg-blue-950 hover:bg-btn-clicked py-1 px-2 rounded-lg">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="text-white text-sm bg-btn-bg hover:bg-btn-clicked py-1 px-2 rounded-lg">Login</button>
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;

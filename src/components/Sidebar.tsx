import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-7 left-0 right-0 z-10">
      <div className="container mx-auto px-6">
        <div className="bg-gray-100 rounded-full px-6 py-2 flex justify-between items-center">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center">
            <Link to="/" className="text-2xl text-gray-900 font-extrabold tracking-tight menlo hover:text-black transition-colors">
                nameblank
            </Link>
            </div>
            <div className="w-1/3 flex justify-end">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-black transition-colors"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>
            </div>
        </div>
        {isMenuOpen && (
          <div className="mt-2 bg-gray-100 rounded-full p-2 text-center">
            <Link to="/about" className="block text-gray-800 hover:text-black transition-colors text-base font-medium mb-2" onClick={() => setIsMenuOpen(false)}>
              <span className="menlo">About</span>
            </Link>
            <Link to="/gallery" className="block text-gray-800 hover:text-black transition-colors text-base font-medium" onClick={() => setIsMenuOpen(false)}>
              <span className="menlo">Gallery</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Sidebar;

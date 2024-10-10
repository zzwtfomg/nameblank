import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Header() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isSmallScreen) {
    return <Sidebar />;
  }

  return (
    <header className="fixed top-7 left-0 right-0 z-10">
      <div className="container mx-auto px-6">
        <div className="bg-gray-100 rounded-full px-6 py-2 flex justify-between items-center">
          <div className="w-1/3 flex justify-start">
            <Link to="/about" className="text-gray-800 hover:text-black transition-colors text-base font-medium">
              <span className="border-b-2 border-transparent hover:border-black pb-1 menlo">About</span>
            </Link>
          </div>
          <div className="w-1/3 flex justify-center">
            <Link to="/" className="text-2xl text-gray-900 font-extrabold tracking-tight menlo hover:text-black transition-colors">
              nameblank
            </Link>
          </div>
          <div className="w-1/3 flex justify-end">
            <Link to="/gallery" className="text-gray-800 hover:text-black transition-colors text-base font-medium">
              <span className="border-b-2 border-transparent hover:border-black pb-1 menlo">Gallery</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

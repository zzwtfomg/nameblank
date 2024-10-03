import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-10 p-4 flex justify-between items-center">
        <Link to="/" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-base">
          Back
        </Link>
        <div className="text-2xl text-white flex-grow text-center menlo">nameblank</div>
        <div className="w-24"></div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen pt-16">
        <div className="text-center max-w-2xl menlo font-light">
          <p className="text-lg mb-3">coming soon!</p>
          <p className="text-lg mb-3">coming soon!</p>
          <p className="text-lg mb-3">coming soon!</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
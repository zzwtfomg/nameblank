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
      <div 
        className="flex flex-col items-center justify-center min-h-screen pt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/col1/img11.jpg')" }}
      >
        <div className="text-center max-w-2xl menlo font-light bg-black bg-opacity-70 p-6 rounded-lg">
          <p className="text-lg mb-3 text-white">Coming Soon!</p>
          <p className="text-lg mb-3 text-white">Coming Soon!</p>
          <p className="text-lg mb-3 text-white">Coming Soon!</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;

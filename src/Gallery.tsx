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
          <p className="text-lg mb-3">This is the gallery page. Here you can view various clothing items and designs.</p>
          <p className="text-lg mb-3">Each piece showcases unique craftsmanship and attention to detail, reflecting the philosophy of creating clothes that truly feel like an extension of oneself.</p>
          <p className="text-lg mb-3">Browse through the collection to see how unisex designs can be tailored to express individual style and personality.</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
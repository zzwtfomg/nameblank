import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gray-100 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-1/3 flex justify-start">
            <Link to="/" className="text-gray-800 hover:text-black transition-colors text-base font-medium">
              <span className="border-b-2 border-transparent hover:border-black pb-1 menlo">Home</span>
            </Link>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="text-2xl text-gray-900 font-extrabold tracking-tight menlo">nameblank</div>
          </div>
          <div className="w-1/3 flex justify-end">
            {/* Empty div for balance */}
          </div>
        </div>
      </header>
      <div 
        className="flex flex-col items-center justify-center min-h-screen pt-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/col1/img11.jpg')" }}
      >
        <div className="text-center max-w-2xl menlo font-light bg-black bg-opacity-70 p-6 rounded-lg">
          <p className="text-lg mb-3 text-white">Welcome to our exciting gallery!</p>
          <p className="text-lg mb-3 text-white">Discover unique designs that will make you say "Wow!"</p>
          <p className="text-lg mb-3 text-white">Each piece is a statement! Express yourself!</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;


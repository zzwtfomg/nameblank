
import Header from "./components/Header";

function Gallery() {
  return (
    <>
      <Header />
      <div 
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/col1/img11.jpg')",
          paddingTop: "6rem"  // Add extra padding to the top
        }}
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


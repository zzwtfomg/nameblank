
import Footer from "./components/footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function Gallery() {
  // Sample clothing data - you can customize this with your actual clothing items
  const clothingItems = [
    {
      id: 1,
      name: "White Tee",
      image: "/col1/DSC_0451.JPG",
      category: ""
    },
    {
      id: 2,
      name: "Casual Jacket",
      image: "/col1/img2.jpg",
      category: "Outerwear"
    },
    {
      id: 3,
      name: "Evening Gown",
      image: "/col1/img3.jpg",
      category: "Formal"
    },
    {
      id: 4,
      name: "Street Style",
      image: "/col1/img4.jpg",
      category: "Casual"
    }
  ];

  return (
    <>
      <Header />
      <div 
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/col1/img11.jpg')",
          paddingTop: "6rem"
        }}
      >
        <div className="text-center max-w-6xl menlo font-light p-8">
          <h1 className="text-3xl mb-8 text-white font-medium">Fashion Collection</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {clothingItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/clothing/${item.id}`}
                className="group block"
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;


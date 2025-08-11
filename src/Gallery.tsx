
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
      name: "blank",
      image: "/col1/bag front.JPG",
      category: ""
    },
    {
      id: 3,
      name: "hope",
      image: "/col1/hope front.JPG",
      category: ""
    },
    {
      id: 4,
      name: "COMING SOON",
      image: "/col1/sofia bag front 2.png",
      category: ""
    }
  ];

  return (
    <>
      <Header />
              <div 
          className="flex flex-col items-center justify-center min-h-screen bg-black"
          style={{ 
            paddingTop: "6rem"
          }}
        >
        <div className="text-center max-w-6xl menlo font-light p-8">
          
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {clothingItems.map((item) => (
              <Link 
                key={item.id} 
                to={`/clothing/${item.id}`}
                className="group block"
              >
                <div className="bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-black mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;


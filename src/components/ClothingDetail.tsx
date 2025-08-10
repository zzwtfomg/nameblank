import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";

function ClothingDetail() {
  const { id } = useParams();
  
  // Sample detailed clothing data - you can customize this with your actual clothing details
  const clothingDetails = {
    1: {
      name: "White Tee",
      category: "",
      description: "A stylish white t-shirt with an off-shoulder design and cropped fit. Features a textured, slightly sheer fabric with raw edges for a modern, edgy aesthetic.",
      mainImage: "/col1/DSC_0451.JPG",
      additionalImages: ["/col1/img5.jpg", "/col1/img6.jpg", "/col1/img9.jpg"],
      details: [
        "Lightweight textured fabric",
        "Off-shoulder design",
        "Cropped fit",
        "Raw edge detailing",
        "Versatile styling"
      ],
      price: "$49.99"
    },
    2: {
      name: "Casual Jacket",
      category: "Outerwear",
      description: "A versatile casual jacket that's perfect for layering. Features a modern design with practical details like zippered pockets and adjustable cuffs.",
      mainImage: "/col1/img2.jpg",
      additionalImages: ["/col1/img7.jpg", "/col1/img8.jpg", "/col1/img10.jpg"],
      details: [
        "Polyester blend",
        "Water-resistant",
        "Zippered pockets",
        "Adjustable cuffs",
        "Lightweight and packable"
      ],
      price: "$129.99"
    },
    3: {
      name: "Evening Gown",
      category: "Formal",
      description: "An elegant evening gown designed for special occasions. Features intricate beading, a flowing silhouette, and premium fabric that drapes beautifully.",
      mainImage: "/col1/img3.jpg",
      additionalImages: ["/col1/imgx.jpg", "/col1/imgy.jpg", "/col1/imgyy.jpg"],
      details: [
        "Silk blend",
        "Hand-beaded details",
        "Adjustable fit",
        "Dry clean only",
        "Available in black and navy"
      ],
      price: "$299.99"
    },
    4: {
      name: "Street Style",
      category: "Casual",
      description: "A contemporary street style ensemble that combines comfort with urban fashion. Perfect for everyday wear with a modern, edgy aesthetic.",
      mainImage: "/col1/img4.jpg",
      additionalImages: ["/col1/imgyyy.jpg", "/col1/img1.jpg", "/col1/img2.jpg"],
      details: [
        "Cotton blend",
        "Relaxed fit",
        "Graphic print",
        "Machine washable",
        "Unisex sizing"
      ],
      price: "$79.99"
    }
  };

  const item = clothingDetails[id as '1' | '2' | '3' | '4'];

  if (!item) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-900 pt-24">
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-2xl text-white mb-4">Item not found</h1>
            <Link to="/gallery" className="text-blue-400 hover:text-blue-300">
              Back to Gallery
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Gallery
            </Link>
          </nav>

          <div className="max-w-6xl mx-auto">
            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image section */}
              <div className="space-y-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={item.mainImage} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Additional images */}
                <div className="grid grid-cols-3 gap-4">
                  {item.additionalImages.map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`${item.name} view ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details section */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-gray-400 uppercase tracking-wide">{item.category}</span>
                  <h1 className="text-4xl font-bold text-white mt-2 mb-4">{item.name}</h1>
                  <p className="text-2xl font-semibold text-blue-400 mb-6">{item.price}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Details</h2>
                  <ul className="space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Contact for Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClothingDetail;

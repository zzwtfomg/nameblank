import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import { Card } from "@/components/card";

function ClothingDetail() {
  const { id } = useParams();
  
  // Sample detailed clothing data - you can customize this with your actual clothing details
  const clothingDetails = {
    1: {
      name: "White Tee",
      category: "",
      description: "enter text here",
      mainImage: "/col1/DSC_0451.JPG",
      additionalImages: ["/col1/white tee 1.JPG", "/col1/white tee 2.JPG", "/col1/white tee 3.JPEG", "/col1/white tee 4.JPG"],
      details: [],
      price: ""
    },
    2: {
      name: "blank",
      category: "",
      description: "enter text here",
      mainImage: "/col1/bag front.JPG",
      additionalImages: ["/col1/bag details 1.JPG", "/col1/bag details 2.JPG", "/col1/bag details 3.JPG", "/col1/bag details 4.JPG"],
      details: [],
      price: ""
    },
    3: {
      name: "hope",
      category: "",
      description: "enter text here",
      mainImage: "/col1/hope front.JPG",
      additionalImages: ["/col1/hope 1.JPG", "/col1/hope 2.JPG", "/col1/hope 3.JPG"],
      details: [],
      price: ""
    },
    4: {
      name: "COMING SOON",
      category: "",
      description: "enter text here",
      mainImage: "/col1/img4.jpg",
      additionalImages: ["/col1/draco 1.jpeg", "/col1/draco 2.jpeg", "/col1/draco 3.jpeg"],
      details: [],
      price: ""
    }
  };

  const item = clothingDetails[id as '1' | '2' | '3' | '4'];

  if (!item) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black pt-24">
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
      <div className="min-h-screen bg-black pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/gallery" className="text-white hover:text-gray-300 transition-colors">
              ← Back to Gallery
            </Link>
          </nav>

          <div className="max-w-6xl mx-auto">
            {/* Cards at top center */}
            <div className="flex justify-center mb-16">
              <div className={`grid gap-6 ${
                item.additionalImages.length === 3 
                  ? 'grid-cols-1 max-w-xs' 
                  : 'grid-cols-2 max-w-2xl'
              }`}>
                {item.additionalImages.map((img, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={img}
                      alt={`${item.name} view ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </Card>
                ))}
              </div>
            </div>

            {/* Text below with moderate spacing */}
            <div className={`${
              item.additionalImages.length === 3 
                ? 'text-left ml-16' 
                : 'text-center'
            }`}>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClothingDetail;

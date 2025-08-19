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
      description: "100% cotton jersey",
      mainImage: "/col1/DSC_0451.JPG",
      additionalImages: ["/col1/white tee 1.JPG", "/col1/white tee 2.JPG", "/col1/white tee 3.JPEG", "/col1/white tee 4.JPG"],
      details: [],
      price: ""
    },
    2: {
      name: "blank",
      category: "",
      description: "hand sewn, made entirely of scraps from previous projects",
      mainImage: "/col1/bag front.JPG",
      additionalImages: ["/col1/sofia nice 1.JPG", "/col1/sofia nice 2.JPG", "/col1/sofia nice 3.JPG", "/col1/sofia nice 4.JPG"],
      details: [],
      price: ""
    },
    3: {
      name: "hope",
      category: "",
      description: "100% wool tweed, hand distressed",
      mainImage: "/col1/hope front.JPG",
      additionalImages: ["/col1/hope 1.JPG", "/col1/hope 2.JPG", "/col1/hope 3.JPG", "/col1/hope 5.jpg"],
      details: [],
      price: ""
    },
    4: {
      name: "S Shirt",
      category: "",
      description: "my dog Draco",
      mainImage: "/col1/sshirt front.jpeg",
      additionalImages: ["/col1/sshirt 1.jpg", "/col1/sshirt 2.jpg"],
      details: [],
      price: ""
    },
    5: {
      name: "C Jeans",
      category: "",
      description: "100% cotton jersey",
      mainImage: "/col1/jeans front.jpeg",
      additionalImages: ["/col1/jeans detail 1.jpeg", "/col1/jeans detail 2.jpeg", "/col1/jeans detail 3.jpeg", "/col1/jeans detail 4.jpeg"],
      details: [],
      price: ""
    },
    6: {
      name: "G Hoodie",
      category: "",
      description: "hand sewn, made entirely of scraps from previous projects",
      mainImage: "/col1/g hoodie front.png",
      additionalImages: ["/col1/g hoodie 1.jpg", "/col1/g hoodie 2.jpg", "/col1/g hoodie 3.jpg", "/col1/g hoodie 4.jpg"],
      details: [],
      price: ""
    },
    7: {
      name: "history",
      category: "",
      description: "100% wool tweed, hand distressed",
      mainImage: "/col1/history front.jpeg",
      additionalImages: ["/col1/history 1!.jpeg", "/col1/history 1.jpeg", "/col1/history 2.jpeg", "/col1/history 4.jpeg"],
      details: [],
      price: ""
    },
    8: {
      name: "COMING SOON",
      category: "",
      description: "my dog Draco",
      mainImage: "/col1/img4.jpg",
      additionalImages: ["/col1/draco 1.jpeg", "/col1/draco 2.jpeg", "/col1/draco 3.jpeg", "/col1/draco erewhon.jpeg"],
      details: [],
      price: ""
    }
  };

  const item = clothingDetails[id as '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'];

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
              <div className="grid grid-cols-2 gap-8 max-w-6xl">
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
            <div className="text-center">
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
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

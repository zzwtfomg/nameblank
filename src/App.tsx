import { Card } from "@/components/card";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function App() {
  const [videoWidth, setVideoWidth] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newWindowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (newWindowDimensions.width < 1024) {
      setVideoWidth(newWindowDimensions.width - 16);
    } else {
      setVideoWidth(newWindowDimensions.width * 0.7);
    }
  };

  return (
    <>
      <header className="fixed top-7 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="bg-gray-100 rounded-full px-6 py-2 flex justify-between items-center">
            <div className="w-1/3 flex justify-start">
              <Link to="/about" className="text-gray-800 hover:text-black transition-colors text-base font-medium">
                <span className="border-b-2 border-transparent hover:border-black pb-1 menlo">About</span>
              </Link>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="text-2xl text-gray-900 font-extrabold tracking-tight menlo">nameblank</div>
            </div>
            <div className="w-1/3 flex justify-end">
              <Link to="/gallery" className="text-gray-800 hover:text-black transition-colors text-base font-medium">
                <span className="border-b-2 border-transparent hover:border-black pb-1 menlo">Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="relative menlo pt-24">
        <div className="text-center mb-8 text-white">
          <h1 className="text-white text-center text-lg mt-6 mb-2 menlo">Name Blank (Fill Here) June Runway</h1>
        </div>
        <div className="">
          <div className="flex flex-col items-center">
            <Card>
              <ReactPlayer
                playing
                loop
                muted={true}
                url="col1/video1.mp4"
                height={(videoWidth * 9) / 16}
                width={videoWidth}
                controls={false}
                style={{
                  objectFit: "cover",
                  transition: "all .3s",
                }}
              />
            </Card>
            <div className="text-white text-center text-sm mt-12 mb-2">
              Looks
            </div>
            {[1, 2, 3].map((rowNum) => (
              <div key={rowNum} className="w-full max-w-6xl mb-2">
                <h2 className="text-sm text-white mb-6 mt-8 text-center">{rowNum}</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {[1, 2].map((colNum) => (
                    <Card key={colNum} className="overflow-hidden">
                      <img
                        src={`/col1/img${(rowNum - 1) * 2 + colNum}.jpg`}
                        alt={`Image ${(rowNum - 1) * 3 + colNum}`}
                        className="h-full w-full object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

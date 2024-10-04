import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header className="fixed top-7 left-0 right-0 z-10">
        <div className="container mx-auto px-6">
          <div className="bg-gray-100 rounded-full px-6 py-2 flex justify-between items-center">
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
        </div>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen pt-24">
        <div className="text-center max-w-2xl menlo font-light">
          <p className="text-lg mb-3">I'm from West Hollywood, CA and I like to make clothes that actually feel like something. Two years ago I realized there was nothing I owned or could buy that felt like me, so I taught myself how to sew and pattern draft.</p>
          <p className="text-lg mb-3">So often when you buy clothes you think of how others would see you in them or how they've looked on others, and each piece is put into a category. There's words like 'style', 'fit', 'gender', 'season', and certainly many more that lead to clothes being thought of in an unhealthy way. I don't need someone telling me how to wear MY clothes, and I'm sure many feel the same. </p>
          <p className="text-lg mb-3">As such, all my clothes are unisex and are meant to be tailored to any given person's unique expression. </p>
        </div>
      </div>
    </>
  );
}

export default About;

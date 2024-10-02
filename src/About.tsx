import { Link } from "react-router-dom";

function About() {
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
          <p className="text-lg mb-3">I'm from West Hollywood, CA and I like to make clothes that actually feel like something. Two years ago I realized there was nothing I owned or could buy that felt like me, so I taught myself how to sew and pattern draft.</p>
          <p className="text-lg mb-3">So often when you buy clothes you think of how others would see you in them or how they've looked on others, and each piece is put into a category. There's words like 'style', 'fit', 'gender', 'season', and certainly many more that lead to clothes being thought of in an unhealthy way. I don't need someone telling me how to wear MY clothes, and I'm sure many feel the same. </p>
          <p className="text-lg mb-3">As such, all my clothes are unisex and are meant to be tailored to any given person's unique expression. </p>
        </div>
      </div>
    </>
  );
}

export default About;

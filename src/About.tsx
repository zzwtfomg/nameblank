
import Footer from "./components/footer";
import Header from "./components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 p-10">
        <div className="text-center max-w-2xl menlo font-light">
          <p className="text-lg mb-8">I'm from West Hollywood, CA and I like to make clothes that actually feel like something. Two years ago I realized there was nothing I owned or could buy that felt like me, so I taught myself how to sew and pattern draft.</p>
          <p className="text-lg mb-8">So often when you buy clothes you think of how others would see you in them or how they've looked on others, and each piece is put into a category. There's words like 'style', 'fit', 'gender', 'season', and certainly many more that lead to clothes being thought of in an unhealthy way. I don't need someone telling me how to wear MY clothes, and I'm sure many feel the same. </p>
          <p className="text-lg mb-8">As such, all my clothes are unisex and are meant to be tailored to any given person's unique expression. </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

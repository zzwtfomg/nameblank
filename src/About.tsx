
import Footer from "./components/footer";
import Header from "./components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 p-10">
        <div className="text-center max-w-2xl menlo font-light">
          <p className="text-lg mb-8">Hi I'm Zeke and I like to make clothes that actually feel like something. Two years ago I realized there was nothing I owned or could buy that felt like me, so I taught myself how to sew, pattern draft, and drape.</p>
          <p className="text-lg mb-8">So often when you buy clothes you think of how others would see you in them or how they've looked on others. All this does is sort each piece and person into arbitrary categories that people leverage to differentiate from one another in a never-ending cycle. I seek to highlight how humans are by and large more similar than different without forgetting the importance of individualism. Each piece I create is meant to be uniquely adapted to the individual while simultaneously free from any categorization or specific demographic. I don't need someone telling me how to wear MY clothes, and I'm sure many feel the same. This is the essence of the nameblank idea as I aim to foster a communal identity born of the lack thereof. </p>
          <p className="text-lg mb-8">All my clothes are unisex and are meant to be tailored to any given person's unique expression. I take influence from my upbringing in Hollywood, California and from my time in Santa Barbara attending UCSB. #GoGauchos </p>
          <p className="text-lg mb-8">All my socials are linked below. </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

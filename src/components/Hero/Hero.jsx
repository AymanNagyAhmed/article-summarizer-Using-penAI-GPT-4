import CustomNavBar from "../NavBar/CustomNavBar";

const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <CustomNavBar />

        <h1 className="head_text">
          Summarize Articles with <br />
          <span className="orange_gradient">OpenAI Gpt-4</span>
        </h1>
        <h2 className="desc">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </header>
    </>
  );
};

export default Hero;

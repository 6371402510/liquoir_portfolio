import bg from "../assets/hero2.png";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">

      <div
        className="w-full h-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

    </section>
  );
};

export default Hero;
import desktopBg from "../assets/hero2.png";
import mobileBg from "../assets/hero-mobile.jpeg";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-black flex items-center justify-center">

      <picture className="block w-full h-full">

        <source
          media="(max-width: 640px)"
          srcSet={mobileBg}
        />

        <img
          src={desktopBg}
          className="w-full h-full object-contain"
          alt="hero"
        />

      </picture>

    </section>
  );
};

export default Hero;
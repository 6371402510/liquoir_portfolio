import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <main className="w-full">

      {/* navbar height space */}
      <div className="pt-[80px]">
        <Hero />
      </div>

      <AboutSection />

    </main>
  );
};

export default Home;
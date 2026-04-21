import About from "./_components/About";
import FeaturedWork from "./_components/FeaturedWork";
import Hero from "./_components/Hero";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedWork />
      <Services/>
    </div>
  );
}

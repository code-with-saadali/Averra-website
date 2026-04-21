import About from "./_components/About";
import FeaturedWork from "./_components/FeaturedWork";
import Hero from "./_components/Hero";
import OurClients from "./_components/OurClients";
import Process from "./_components/Process";
import Services from "./_components/Services";
import WhyUs from "./_components/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedWork />
      <Services/>
      <Process/>
      <WhyUs/>
      <OurClients/>
    </div>
  );
}

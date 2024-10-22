import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { Benefits } from "@/sections/Benefits";
import { Solutions } from "@/sections/Solutions";
import { Services } from "@/sections/Services";
 
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Benefits />
      <Services />
      <Solutions />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

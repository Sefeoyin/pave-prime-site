import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Projects />
      <Insights />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

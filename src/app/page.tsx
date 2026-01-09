import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Gallery from "@/components/layout/Gallery";
import Reviews from "@/components/layout/Reviews";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

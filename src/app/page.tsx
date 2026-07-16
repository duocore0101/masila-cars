import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Categories from "@/components/Categories";
import FinanceCalculator from "@/components/FinanceCalculator";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
      <Categories />
      <FinanceCalculator />
      <About />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

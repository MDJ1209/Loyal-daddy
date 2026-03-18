import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PremiumFeature from "@/components/PremiumFeature";

import ProductSection from "@/components/ProductSection";

import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PremiumFeature />

      <ProductSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

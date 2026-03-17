import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import FeatureCards from "@/components/FeatureCards";
import ProductSection from "@/components/ProductSection";
import WhySection from "@/components/WhySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeatureCards />
      <WhySection />
      <ProductSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

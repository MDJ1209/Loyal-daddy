import { ShoppingBag, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import heroFarm from "@/assets/hero-farm-blend.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-cream">
      {/* Floating farm image — optimized for mobile and desktop */}
      <div className="absolute inset-y-0 -right-20 w-[140%] md:w-[75%] z-0 pointer-events-none">
        <motion.img
          src={heroFarm}
          alt="Floating family farm island with chickens"
          className="w-full h-full object-contain object-right opacity-30 md:opacity-100"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-black flex flex-col items-start text-left italic">
            <span className="block">Farm Raised</span>
            <span className="block ml-4 md:ml-5 lg:ml-6">Chicken For</span>
            <span className="block text-forest">Stronger,</span>
            <span className="block text-forest">Healthier</span>
            <span className="block ml-4 md:ml-5 lg:ml-6">Dogs</span>
          </h1>

          <p className="text-black text-lg max-w-md leading-relaxed font-body">
            Raising chickens on our family farm ensures the cleanest, most nutritious ingredients for your loyal companions. No industrial byproducts, just pure nature.
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="btn-brutal gap-2">
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </button>
            <button className="btn-brutal-secondary gap-2">
              <TreePine className="w-5 h-5" strokeWidth={1.5} />
              Our Farm Story
            </button>
          </div>

          <div className="pt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-cream flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">Trusted by Professionals</p>
              <p className="text-sm font-display font-bold text-black">5,000+ Loyal Dog Families</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

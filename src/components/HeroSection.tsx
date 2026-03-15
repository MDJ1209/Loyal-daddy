import { ShoppingBag, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import heroFarmBg from "@/assets/hero-farm-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFarmBg}
          alt="Countryside family farm at golden hour with chickens"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays to blend image into white bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-primary">100% Family Farm Raised</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-foreground">
            Farm Raised
            <br />
            Chicken For
            <br />
            <span className="text-gradient italic">Stronger,</span>
            <br />
            <span className="text-gradient">Healthier</span>
            <br />
            Dogs
          </h1>

          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Raising chickens on our family farm ensures the cleanest, most nutritious ingredients for your loyal companions. No industrial byproducts, just pure nature.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-500">
              <ShoppingBag className="w-4 h-4" />
              Shop Dog Food
            </button>
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/15 text-foreground font-medium hover:bg-muted transition-all duration-500">
              <TreePine className="w-4 h-4" />
              Our Farm Process
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold">
                  🐕
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">TRUSTED BY</p>
              <p className="text-sm font-semibold text-foreground">5,000+ Loyal Dads</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

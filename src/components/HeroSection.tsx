import { ShoppingBag, TreePine } from "lucide-react";
import { motion } from "framer-motion";
import floatingFarm from "@/assets/floating-farm.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ambient glow behind island — blends PNG into dark bg */}
      <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(30 60% 20% / 0.25) 0%, hsl(145 43% 15% / 0.12) 40%, transparent 70%)"
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-secondary">100% Family Farm Raised</span>
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
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/40 transition-all duration-500">
              <ShoppingBag className="w-4 h-4" />
              Shop Dog Food
            </button>
            <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-muted/50 text-foreground font-medium hover:bg-muted/20 transition-all duration-500">
              <TreePine className="w-4 h-4" />
              Our Farm Process
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs text-muted-foreground font-bold">
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

        {/* Right - Floating Farm (blended into bg) */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Warm evening glow behind island */}
          <div className="absolute w-[650px] h-[650px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(30 50% 18% / 0.35) 0%, hsl(145 40% 12% / 0.15) 50%, transparent 75%)"
            }}
          />
          <img
            src={floatingFarm}
            alt="Loyal-Daddy floating family farm with black chickens at golden evening"
            className="relative w-full max-w-2xl xl:max-w-3xl animate-float"
            style={{
              filter: "drop-shadow(0 30px 60px hsl(30 40% 10% / 0.5))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

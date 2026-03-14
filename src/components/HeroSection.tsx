import { ShoppingBag, TreePine } from "lucide-react";
import floatingFarm from "@/assets/floating-farm.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-medium text-secondary">100% Family Farm Raised</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-foreground">
            Farm Raised{" "}
            <br />
            Chicken For{" "}
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

          {/* Trust badge */}
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
        </div>

        {/* Right - Floating Farm */}
        <div className="relative flex items-center justify-center animate-fade-in-up-delay-1">
          {/* Glow behind island */}
          <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <img
            src={floatingFarm}
            alt="Loyal-Daddy floating family farm with black chickens and green pastures at night"
            className="relative w-full max-w-xl xl:max-w-2xl animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

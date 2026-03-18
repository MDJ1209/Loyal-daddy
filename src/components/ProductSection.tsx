import { motion } from "framer-motion";
import productImg from "@/assets/product-bag.png";

const ingredients = [
  { name: "Family Raised Chicken", desc: "Triple growth standard" },
  { name: "Farm Processed Grain", desc: "No commercial fillers" },
  { name: "Holistic Vitamins", desc: "Scientifically balanced" },
  { name: "Natural Minerals", desc: "Source of vitality" },
  { name: "Digestive Enzymes", desc: "Optimized absorption" },
  { name: "Omega Fatty Acids", desc: "For coat and skin" },
];

const ProductSection = () => {
  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-background overflow-hidden" id="products">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image Container */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center lg:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[400px] lg:max-w-none">
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] font-bold px-4 py-2 z-10">
                80% Protein
              </div>
              <img 
                src={productImg} 
                alt="Premium Farmhouse Dog Fare" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-forest/40 block">
                The Gold Standard
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.2] text-forest">
                Farmhouse Dog Fare: <br className="md:hidden" />
                <span className="italic text-forest/80">Pure Clean Nutrition</span>
              </h2>
              <p className="text-black/80 text-lg font-body leading-relaxed max-w-xl">
                Elevate your dog's daily ritual with the only protein-first kibble grown, raised, and processed on a single family farm. Science-forward wellness meets honest country integrity.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-black text-forest/40">Key Ingredients</h3>
              {/* Responsive Grid/Scroll */}
              <div className="flex lg:grid lg:grid-cols-2 gap-4 overflow-x-auto pb-6 lg:pb-0 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-6 px-6 lg:mx-0 lg:px-0">
                {ingredients.map((item, i) => (
                  <motion.div 
                    key={item.name} 
                    className="flex-shrink-0 w-[280px] lg:w-full p-6 border border-forest/10 bg-cream snap-center space-y-2 hover:bg-forest/5 transition-colors group cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h4 className="font-display font-bold text-lg text-forest group-hover:italic transition-all">
                      {item.name}
                    </h4>
                    <p className="text-sm text-black/60 font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="btn-brutal w-full md:w-auto">
                Purchase Now — $49.50
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

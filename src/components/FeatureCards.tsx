import { motion } from "framer-motion";
import { Leaf, ShieldBan, Drumstick, Heart } from "lucide-react";

const features = [
  { 
    title: "Eco-Conscious Farming", 
    category: "Sustainability",
    image: "/conscious-farming.jpg",
    description: "Our chickens are raised with respect for the land, ensuring a sustainable cycle that benefits your dog and the planet." 
  },
  { 
    title: "Pure Integrity", 
    category: "Integrity",
    image: "/pure-integrity.jpg",
    description: "Absolutely zero antibiotics, growth hormones, or synthetic broiler feeds. Just clean, honest nutrition." 
  },
  { 
    title: "Superior Protein", 
    category: "Nutrition",
    image: "/superior-protein.jpg",
    description: "We use only high-grade, farm-fresh chicken protein to support lean muscle and vibrant vitality." 
  },
  { 
    title: "Nurturing Longevity", 
    category: "Wellness",
    image: "/longevity.jpg",
    description: "Scientifically balanced, holistic recipes crafted to support your dog’s health through every life stage." 
  },
];

const FeatureCards = () => {
  return (
    <section className="pt-24 pb-20 md:pb-32 bg-background border-y border-forest/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] as any }}
                className="bg-white p-2 rounded-lg shadow-sm border-2 border-forest/40 group cursor-pointer flex flex-col h-full transform-gpu"
              >
                <div className="relative overflow-hidden rounded-md h-[180px] bg-cream">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
                </div>
                
                <div className="space-y-1 py-4 px-2 flex-grow">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-forest">
                    {feature.category}
                  </div>
                  <h3 className="font-display font-bold text-xl leading-tight text-forest group-hover:italic transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-black/70 text-[13px] leading-relaxed font-body pt-2">
                    {feature.description}
                  </p>
                </div>

                <div className="px-2 pb-2 mt-auto">
                  <p className="text-[10px] text-black/40 font-body">
                    By <span className="font-bold text-black/60">Loyal Daddy</span> Farm
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

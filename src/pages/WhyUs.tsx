import { motion } from "framer-motion";
import { ShieldBan, FlaskConical, Trash2, Ban, Leaf, Sparkles, Sprout, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroTV from "@/components/RetroTV";

const noList = [
  {
    icon: <ShieldBan className="w-8 h-8" />,
    title: "Zero Antibiotics",
    desc: "We believe in natural immunity. Our chickens are never pumped with drugs to survive industrial conditions."
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: "No Growth Hormones",
    desc: "Nature takes its own time. We refuse to use synthetic accelerators to rush a life cycle."
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "No Synthetic Fillers",
    desc: "You won't find corn, soy, or cheap industrial byproducts. Just pure, farm-fresh ingredients."
  },
  {
    icon: <Ban className="w-8 h-8" />,
    title: "No Artificials",
    desc: "Colors, flavors, and preservatives have no place in a dog's natural diet."
  }
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-cream text-foreground overflow-x-hidden font-display">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black text-forest/60 block">
              The Philosophy of Purity
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-forest max-w-4xl mx-auto italic break-words">
              WHY WE REFUSE TO COMPROMISE
            </h1>
            <p className="text-black/70 text-base md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
              In an industry driven by speed and profit, we choose patience and integrity. Every decision we make starts with one question: Is this good enough for our own family?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Black Chicken Significance */}
      <section className="py-20 md:py-24 px-6 bg-cream border-t border-forest/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="stack w-full max-w-[320px] md:max-w-md">
                <div className="stack-card">
                  <div className="stack-image-wrapper">
                    <img
                      src="/black-chicken.png"
                      alt="Black Chicken Heritage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.3em] font-black text-forest/60">The Superior Source</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight italic">
                  The Significance of Black Chicken
                </h2>
              </div>

              <div className="space-y-6 text-black/80 font-body text-base md:text-lg leading-relaxed">
                <p>
                  Most brands use fast-growing broilers bred for mass production. We raise **Black Chickens**—a heritage breed known for centuries for its profound nutritional profile and restorative properties.
                </p>
                <p>
                  These birds are naturally richer in **collagen, amino acids, and carnosine** (a powerful antioxidant). Because they grow slower, their muscle meat is denser and holds a complex spectrum of nutrients that commercial chicken simply lacks.
                </p>
                <p>
                  This isn't just protein; it's a structural foundation for your dog's longevity. By focusing on this specific breed, we offer a product that is biologically superior and entirely unique in the market.
                </p>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <button className="btn-brutal gap-2">
                  Explore Heritage Nutrition
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Don't Use */}
      <section className="py-20 md:py-32 bg-white border-y border-forest/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Staggered Heading */}
          <div className="max-w-5xl mx-auto mb-20 md:mb-32">
            <div className="flex flex-col gap-8 md:gap-0 relative">

              {/* Top - Left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="z-10 text-center md:text-left"
              >
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-display italic font-bold text-forest leading-none">
                  Things which are
                </h2>
              </motion.div>

              {/* Middle - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="py-4 md:py-2 flex justify-center z-20"
              >
                <div className="scale-[0.8] md:scale-100">
                  <RetroTV />
                </div>
              </motion.div>

              {/* Bottom - Right */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                className="md:self-end z-10 text-center md:text-right"
              >
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-display italic font-bold text-forest leading-none relative inline-block">
                  in our process
                  <div className="hidden md:block absolute -bottom-3 left-0 right-0 h-1 bg-forest/20 rounded-full"></div>
                </h2>
              </motion.div>

            </div>
          </div>

          <div className="flex flex-col items-center space-y-12 md:space-y-16">
            {noList.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="brutal-card w-full max-w-full md:max-w-5xl px-6 md:px-10"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <span className="brutal-card__title text-2xl md:text-3xl">{item.title}</span>
                  <div className="text-forest opacity-40">
                    {item.icon}
                  </div>
                </div>
                <div className="brutal-card__content text-sm md:text-base mb-8">
                  {item.desc}
                </div>
                <div className="brutal-card__form">
                  <button className="brutal-card__button w-full md:w-auto">
                    The Pure Way
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Manifesto Section */}
      <section className="py-24 md:py-40 bg-forest text-white relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-display font-black text-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap italic">
          MANIFESTO
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {[
              {
                icon: <Leaf className="w-8 h-8 md:w-10 h-10" />,
                title: "100% Natural Soil",
                desc: "We don't use chemical fertilizers. Our soil thrives on organic composting from our own farm, creating a nutrient loop that starts at the grass and ends in the bowl."
              },
              {
                icon: <Sprout className="w-8 h-8 md:w-10 h-10" />,
                title: "Our Singular Focus",
                desc: "We aren't a factory. We are a family farm. We focus on quality over quantity, ensuring every single bag of Farmhouse Dog Fare meets our ruthless standards."
              },
              {
                icon: <HeartPulse className="w-8 h-8 md:w-10 h-10" />,
                title: "Health Optimization",
                desc: "We don't just want your dog to live; we want them to thrive. Our recipes are designed to boost vitality, improve cognitive function, and support joints."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative p-6 md:p-8 border border-white/10 bg-black/40 hover:bg-black/50 transition-colors rounded-2xl backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="mb-6 md:mb-8 w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold italic mb-4 md:mb-6 text-white">
                  {item.title}
                </h3>
                <p className="text-white/90 font-body leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-white/5 font-display italic text-4xl md:text-6xl group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-40 bg-cream relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
            <h2 className="text-4xl md:text-8xl font-display font-bold italic text-forest leading-tight">
              Ready for a<br />Cleaner Bowl?
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:pt-8">
              <button className="btn-brutal text-[20px] md:text-[24px] px-12 md:px-16 py-6 md:py-8 w-full md:w-auto">
                Shop Our Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;

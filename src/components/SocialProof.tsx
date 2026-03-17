import { motion } from "framer-motion";

const brands = ["Vogue", "Forbes", "The New York Times", "Pet Wellness", "Farm Living", "Modern Dog"];

const SocialProof = () => {
  // Duplicate the brands many times to ensure a truly seamless, unbroken loop
  const marqueeItems = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-20 md:py-32 bg-white border-b border-forest/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.6em] font-black text-forest/30"
          >
            Featured In
          </motion.span>
          
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <motion.div
              className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-4"
              animate={{
                x: [0, -1500]
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {marqueeItems.map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className={`text-forest font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter transition-all duration-700 cursor-default opacity-80 hover:opacity-100 hover:scale-105 active:scale-95 ${i % 2 === 1 ? 'italic' : ''}`}
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

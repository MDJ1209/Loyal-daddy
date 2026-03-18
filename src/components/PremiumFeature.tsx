import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import kadaknathPhoto from "@/assets/kadaknath-photo.png";
import kadaknathSketch from "@/assets/kadaknath-sketch.png";
import productBag from "@/assets/product-bag.png";
import ingredientsImg from "@/assets/card-ingredients.jpg";

const comparisonData = [
  { feature: "High Protein Content (>25%)", broiler: false, kadaknath: true },
  { feature: "Extremely Low Fat", broiler: false, kadaknath: true },
  { feature: "Free Range Rearing", broiler: false, kadaknath: true },
  { feature: "Natural Foraging Diet", broiler: false, kadaknath: true },
  { feature: "Zero Antibiotics", broiler: false, kadaknath: true },
  { feature: "Rich In Iron & Amino Acids", broiler: false, kadaknath: true },
];

const PremiumFeature = () => {
  const kadaknathIngredients = "Premium Kadaknath Meat, Kadaknath Liver, Organic Pumpkin, Quinoa, Sweet Potato, Cold-Pressed Coconut Oil, Spinach, Blueberries, Carrots, Chia Seeds, Turmeric, Mixed Tocopherols (Natural Preservative), Rosemary Extract.";

  return (
    <>
    <section className="bg-white pt-20 pb-0 md:pt-32 md:pb-4 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-8 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-forest/40 block mb-4">
              Unrivaled Nutrition
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.05] text-forest italic max-w-4xl mx-auto uppercase">
              India’s First Premium <span className="text-black font-extrabold not-italic">Kadaknath</span> based Dog Food
            </h2>
          </motion.div>
        </div>

        <div className="relative flex items-end justify-center gap-2 md:gap-8 min-h-[0px] md:min-h-[600px] mt-6 md:-mt-20 transform md:scale-100 scale-125 origin-bottom mb-16 md:mb-0">
          {/* Left Sketch */}
          <motion.div
            className="w-1/3 max-w-[300px] relative z-10"
            initial={{ opacity: 0, x: -50, rotate: -20 }}
            whileInView={{ opacity: 0.6, x: 0, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src={kadaknathSketch}
              alt="Kadaknath Sketch Left"
              className="w-full h-auto grayscale transition-all duration-700 hover:grayscale-0 mix-blend-multiply"
            />
          </motion.div>

          {/* Middle Photo */}
          <motion.div
            className="w-2/5 max-w-[450px] relative z-20"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-yellow-500/15 blur-[80px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000 z-0"></div>
              <img
                src="/gemin.png"
                alt="Original Kadaknath"
                className="relative w-[110%] max-w-none h-auto object-contain z-10 hover:scale-[1.03] transition-transform duration-700 mix-blend-multiply"
              />
            </div>
          </motion.div>

          {/* Right Sketch */}
          <motion.div
            className="w-1/3 max-w-[300px] relative z-10"
            initial={{ opacity: 0, x: 50, rotate: 20 }}
            whileInView={{ opacity: 0.6, x: 0, rotate: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src={kadaknathSketch}
              alt="Kadaknath Sketch Right"
              className="w-full h-auto grayscale scale-x-[-1] transition-all duration-700 hover:grayscale-0 mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 md:mt-32 max-w-5xl mx-auto w-full md:px-4"
        >
          <div className="text-center mb-10 md:mb-12 px-4">
            <h3 className="font-cursive text-5xl md:text-6xl text-forest mb-4 relative inline-block">
              <span className="relative z-10 md:rotate-[-2deg] block">The Premium Difference</span>
              <div className="hidden md:block absolute bottom-1 left-0 w-full h-3 bg-forest/20 -rotate-2 rounded-full blur-[1px]"></div>
            </h3>
            <p className="font-body text-forest/80 font-bold max-w-2xl mx-auto mt-4 md:mt-6 text-sm md:text-lg tracking-wide uppercase">Why settle for standard when your dog deserves the best?</p>
          </div>

          {/* Light Sketchy Board with 3-column layout */}
          <div className="bg-[#fbfaee] text-forest md:rounded-[2rem] md:rounded-tl-xl md:rounded-br-2xl md:rounded-tr-[3rem] md:rounded-bl-[4rem] border-y-[4px] border-[4px] md:border-[4px] border-dashed border-forest/60 p-4 py-8 md:p-12 shadow-2xl relative overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-500 w-full max-w-4xl mx-auto mb-10">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('@/assets/noise.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>

            <div className="grid grid-cols-[3fr_2fr_2.5fr] md:grid-cols-[2fr_1fr_1fr] relative z-10 font-cursive text-xl tracking-wide px-1 md:px-0">
              {/* Header Row */}
              <div className="col-span-3 grid grid-cols-subgrid border-b-[3px] border-dashed border-forest/30 pb-4 items-end">
                <div className="flex items-end h-full">
                  {/* Empty corner */}
                </div>

                <div className="flex flex-col items-center justify-end text-center h-full px-1">
                  <div className="md:w-16 md:h-16 w-10 h-10 border-2 border-dashed border-forest/40 rounded-xl mb-3 flex items-center justify-center bg-white shadow-sm overflow-hidden p-1">
                    <div className="w-full h-full bg-red-50 rounded-lg flex items-center justify-center">
                      <span className="font-cursive text-[10px] md:text-sm text-red-900/60 leading-tight">Broiler</span>
                    </div>
                  </div>
                  <span className="font-cursive font-bold text-sm md:text-xl text-red-900/80 leading-tight">Regular<br />Broiler</span>
                </div>

                <div className="flex flex-col items-center justify-end text-center h-full px-1 relative">
                  {/* Accent Highlight Background for Header */}
                  <div className="absolute inset-0 bg-[#fac617]/20 rounded-t-2xl -z-10 border-b-2 border-dashed border-forest/30"></div>

                  <div className="md:w-24 md:h-24 w-20 h-20 bg-white rounded-xl p-1 mb-2 md:mb-3 flex items-center justify-center shadow-xl transform rotate-[-3deg] border-2 border-dashed border-[#fac617] -mt-8 md:-mt-10 relative z-20">
                    <img src={kadaknathPhoto} alt="Kadaknath" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <span className="font-cursive font-bold text-[15px] md:text-2xl text-forest leading-tight">Premium<br />Kadaknath</span>
                </div>
              </div>

              {/* Data Rows */}
              {comparisonData.map((item, idx) => (
                <div key={idx} className="col-span-3 grid grid-cols-subgrid border-b-2 border-dotted border-forest/20 hover:bg-forest/5 transition-all duration-300 items-stretch group">

                  {/* Feature Name */}
                  <div className="p-3 py-5 md:p-6 flex items-center">
                    <span className="font-cursive text-[16px] md:text-3xl text-forest leading-tight pr-2 drop-shadow-sm">{item.feature}</span>
                  </div>

                  {/* Broiler Tick/Cross */}
                  <div className="p-3 md:p-6 flex items-center justify-center border-l-2 border-dashed border-forest/10 relative">
                    <div className="relative flex items-center justify-center text-red-800/80">
                      {/* Sketchy circle */}
                      <div className="absolute w-7 h-7 md:w-12 md:h-12 border-[1.5px] border-red-900/40 rounded-[45%] rotate-[15deg] opacity-70"></div>
                      <div className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] border-[1px] border-red-900/20 rounded-[55%] rotate-[-10deg] opacity-40"></div>
                      {item.broiler ? <Check className="w-5 h-5 md:w-8 md:h-8 relative z-10" strokeWidth={3} /> : <X className="w-5 h-5 md:w-8 md:h-8 relative z-10" strokeWidth={3} />}
                    </div>
                  </div>

                  {/* Kadaknath Tick/Cross */}
                  <div className="p-3 md:p-6 flex items-center justify-center relative border-l-2 border-dashed border-forest/10">
                    {/* Accent Highlight Background for Column */}
                    <div className="absolute inset-0 bg-[#fac617]/20 group-hover:bg-[#fac617]/30 transition-colors -z-10"></div>

                    <div className="relative flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                      {/* Sketchy circle */}
                      <div className="absolute w-8 h-8 md:w-14 md:h-14 border-[2px] border-forest/60 rounded-[40%] rotate-[-20deg] opacity-80"></div>
                      <div className="absolute w-[34px] h-[34px] md:w-[60px] md:h-[60px] border-[1.5px] border-forest/40 rounded-[60%] rotate-[30deg] opacity-50"></div>
                      {item.kadaknath ? <Check className="w-6 h-6 md:w-10 md:h-10 relative z-10" strokeWidth={4} /> : <X className="w-6 h-6 md:w-10 md:h-10 relative z-10" strokeWidth={4} />}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Sketchy corner doodles */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-solid border-forest/40 rounded-tl-3xl"></div>
            <div className="absolute top-6 left-6 w-8 h-8 border-t-[2px] border-l-[2px] border-dashed border-forest/20 rounded-tl-xl"></div>

            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-solid border-forest/40 rounded-br-3xl"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-[2px] border-r-[2px] border-dashed border-forest/20 rounded-br-xl"></div>
          </div>

          <div className="flex justify-center mb-16 px-4">
            <button className="bg-[#fbfaee] text-forest font-cursive font-bold py-3 px-10 md:py-4 md:px-12 rounded-[2rem] rounded-tl-xl rounded-br-xl text-2xl md:text-3xl border-2 border-dashed border-forest shadow-[6px_6px_0px_#143a24] hover:shadow-[2px_2px_0px_#143a24] hover:translate-y-[4px] hover:translate-x-[4px] transition-all w-full md:w-auto text-center transform -rotate-1">
              Give Them The Best
            </button>
          </div>
        </motion.div>

        {/* Ingredients Spotlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-24 mb-16 md:mb-32 px-4 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.05] mb-8">
                Clean, quality ingredients <span className="italic font-medium">you can pronounce.</span>
              </h2>

              <div className="flex gap-3 md:gap-4 mb-10 flex-wrap justify-center lg:justify-start">
                <div className="px-5 py-2.5 rounded-full border-2 border-forest font-body uppercase tracking-[0.15em] text-xs md:text-sm bg-forest text-[#fbfaee] font-bold shadow-[2px_2px_0px_#fbfaee,4px_4px_0px_#143a24] -translate-y-1 -translate-x-1 cursor-default select-none">
                  Original Kadaknath
                </div>
              </div>

              <p className="font-body text-forest/90 text-lg md:text-2xl leading-relaxed md:leading-[1.6]">
                {kadaknathIngredients}
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[400px] lg:max-w-none">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-[80px] -z-10"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-dashed border-forest/30 shadow-2xl transform rotate-3">
                  <img src={ingredientsImg} alt="Fresh Ingredients" className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-1000" />
                </div>
                {/* Sketchy accent */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-solid border-forest/40 rounded-tr-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-solid border-forest/40 rounded-bl-3xl"></div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>

    {/* "Say Goodbye" Section — separate bg */}
    <section className="bg-[#f7f6f6] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mt-20 md:mt-32 max-w-3xl mx-auto text-center px-4 pb-12"
        >
          {/* Catchy Headline */}
          <h2 className="font-display font-medium text-[38px] md:text-6xl text-forest leading-[1.05] tracking-tight mb-14 md:mb-20">
            Say goodbye to highly processed <br className="hidden md:block" /> kibble and <br className="md:hidden" />
            hello to natural <br className="hidden md:block" /> meat and veggies.
          </h2>

          {/* Center Product Bowl */}
          <div className="flex justify-center mb-16 md:mb-24 relative px-8">
            <img
              src="/bowl.png"
              alt="Farmhouse Dog Fare Premium Bowl"
              className="w-full max-w-[280px] md:max-w-[450px] object-contain relative z-10 hover:scale-[1.05] transition-all duration-700 hover:-translate-y-2"
            />
          </div>

          {/* Features Stack */}
          <div className="space-y-14 md:space-y-20 max-w-md mx-auto">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <h4 className="font-display font-medium text-forest text-[25px] md:text-3xl uppercase tracking-widest mb-2 shadow-forest/10">Human-Grade Ingredients</h4>
              <p className="font-body text-[#2d4031] text-[18px] md:text-[21px] font-medium leading-[1.3] px-2">0% synthetics.<br />100% natural meat and superfoods.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h4 className="font-display font-medium text-forest text-[25px] md:text-3xl uppercase tracking-widest mb-2 shadow-forest/10">Just Scoop And Serve</h4>
              <p className="font-body text-[#2d4031] text-[18px] md:text-[21px] font-medium leading-[1.3] px-2">No fridge, no prep,<br />no mess.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default PremiumFeature;

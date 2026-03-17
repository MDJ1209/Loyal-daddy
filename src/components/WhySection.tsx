import { motion } from "framer-motion";
import whyFarm from "@/assets/why-farm.jpg";
import whyNutrition from "@/assets/why-nutrition.jpg";
import whyDogHealth from "@/assets/why-dog-health.jpg";

const sections = [
  {
    label: "Quality Sourcing",
    title: "The Purest Beginnings",
    text: "Every piece of kibble starts on our own family farm. We control the soil, the seeds, and the life of every chicken. This closed-loop system ensures that what ends up in your dog's bowl is pure, powerful, and perfectly traceable.",
    image: whyFarm,
    bgColor: "bg-cream"
  },
  {
    label: "Better Process",
    title: "The 90-Day Slow Growing Difference",
    text: "While industrial farms rush growth in 40 days, we let our chickens mature naturally over 90 days. This patience results in superior muscle development and a nutrient profile that commercial brands simply cannot replicate.",
    image: whyNutrition,
    bgColor: "bg-white"
  },
  { 
    label: "Total Control", 
    title: "From Our Soil to Your Door",
    text: "By owning every step of the process—from seed to soil to selection—we eliminate the uncertainties of third-party supply chains. We grow our own grain, raise our own birds, and process them right here on the farm. Total control means total peace of mind for you, and thriving health for them.", 
    image: whyDogHealth,
    bgColor: "bg-cream"
  },
];

const WhySection = () => {
  const premiumEase = [0.23, 1, 0.32, 1];

  return (
    <section id="our-farm">
      {sections.map((section, i) => (
        <div key={section.title} className={`${section.bgColor} section-padding overflow-hidden`}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`flex flex-col items-center gap-12 md:gap-24 ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <motion.div 
                className="lg:w-1/2 space-y-8" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] as any }}
              >
                <div className="space-y-4">
                  <span className="text-[11px] uppercase tracking-[0.4em] font-black text-forest/40 block">
                    {section.label}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-forest italic">
                    {section.title}
                  </h2>
                </div>
                <p className="text-black/80 text-lg leading-relaxed font-body max-w-xl">
                  {section.text}
                </p>
                <div className="pt-4">
                  <button className="btn-brutal text-[14px]">
                    Learn about our soil
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                className={`lg:w-1/2 w-full flex justify-center ${i % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`} 
                initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 1 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] as any }}
              >
                <div className="stack transform-gpu">
                  <div className="stack-card">
                    <div className="stack-image-wrapper shadow-2xl">
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhySection;

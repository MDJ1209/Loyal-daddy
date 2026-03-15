import { motion } from "framer-motion";
import whyFarm from "@/assets/why-farm.jpg";
import whyNutrition from "@/assets/why-nutrition.jpg";
import whyDogHealth from "@/assets/why-dog-health.jpg";

const sections = [
  { number: "01", title: "Full Control Over Quality", text: "By raising our own black country chickens, we control every variable. From the specific non-GMO seed they eat to the clean mountain water they drink, we ensure no toxins and industrial \"mystery meats\" ever enter the supply chain.", image: whyFarm },
  { number: "02", title: "The Industrial vs. Natural Divide", text: "Most dog foods use \"meat meal\" sourced from massive industrial processing plants. We believe your dog deserves better. Our chickens live in the sunshine, resulting in meat that is higher in Omega-3s and vital minerals compared to factory-farmed alternatives.", image: whyNutrition },
  { number: "03", title: "Scientific Health Benefits", text: "Our proprietary formula focuses on bioavailability. Because our ingredients are fresh, your dog's digestive system can actually absorb the nutrients rather than just passing them through. This leads to shinier coats, brighter eyes, and stable energy levels.", image: whyDogHealth },
];

const WhySection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Why We Raise Our Own</h2>
          <p className="text-primary italic text-lg">"The shortest path from farm to bowl is the most honest one."</p>
        </motion.div>

        <div className="space-y-32">
          {sections.map((section, i) => (
            <div key={section.number} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              <motion.div className="lg:w-1/2 space-y-4" initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
                <span className="text-5xl font-display font-bold text-secondary/30">{section.number}</span>
                <h3 className="text-3xl font-display font-bold text-foreground">{section.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">{section.text}</p>
              </motion.div>
              <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                  <img src={section.image} alt={section.title} className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

import { motion } from "framer-motion";
import cardChickens from "@/assets/card-chickens.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardIngredients from "@/assets/card-ingredients.jpg";

const features = [
  { title: "Family Farm Raised", description: "Pasture-raised for superior protein and natural vitality. No cages, no stress, just healthy lives.", image: cardChickens },
  { title: "Clean Dog Nutrition", description: "Formulated for peak canine health by veterinarians and farm nutritionists. Energy that lasts.", image: cardNutrition },
  { title: "Natural Ingredients", description: "Zero fillers, zero artificial preservatives. Just wholesome goodness straight from our soil.", image: cardIngredients },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" as const },
  }),
};

const FeatureCards = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Commitment to Quality</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group rounded-2xl bg-card border border-border overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
